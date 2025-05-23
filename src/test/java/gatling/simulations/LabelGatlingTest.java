package gatling.simulations;

import static io.gatling.javaapi.core.CoreDsl.StringBody;
import static io.gatling.javaapi.core.CoreDsl.exec;
import static io.gatling.javaapi.core.CoreDsl.rampUsers;
import static io.gatling.javaapi.core.CoreDsl.scenario;
import static io.gatling.javaapi.http.HttpDsl.headerRegex;
import static io.gatling.javaapi.http.HttpDsl.http;
import static io.gatling.javaapi.http.HttpDsl.status;

import io.gatling.javaapi.core.ChainBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;
import java.time.Duration;
import java.util.Map;
import java.util.Optional;

/**
 * Performance test for the Label entity.
 *
 * @see <a href="https://github.com/jhipster/generator-jhipster/tree/v8.11.0/generators/gatling#logging-tips">Logging tips</a>
 */
public class LabelGatlingTest extends Simulation {

    String baseURL = Optional.ofNullable(System.getProperty("baseURL")).orElse("http://localhost:8080");

    HttpProtocolBuilder httpConf = http
        .baseUrl(baseURL)
        .inferHtmlResources()
        .acceptHeader("*/*")
        .acceptEncodingHeader("gzip, deflate")
        .acceptLanguageHeader("fr,fr-fr;q=0.8,en-us;q=0.5,en;q=0.3")
        .connectionHeader("keep-alive")
        .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:33.0) Gecko/20100101 Firefox/33.0")
        .silentResources(); // Silence all resources like css or css so they don't clutter the results

    Map<String, String> headersHttp = Map.of("Accept", "application/json");

    Map<String, String> headersHttpAuthenticated = Map.of("Accept", "application/json", "X-XSRF-TOKEN", "${xsrf_token}");

    Map<String, String> keycloakHeaders = Map.of(
        "Accept",
        "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Upgrade-Insecure-Requests",
        "1"
    );

    ChainBuilder scn = exec(
        http("First unauthenticated request")
            .get("/api/account")
            .headers(headersHttp)
            .check(status().is(401))
            .check(headerRegex("Set-Cookie", "XSRF-TOKEN=(.*);[\\s]").saveAs("xsrf_token"))
    )
        .exitHereIfFailed()
        .pause(10)
        .exec(
            http("Authentication")
                .post("/api/authentication")
                .headers(headersHttpAuthenticated)
                .formParam("username", "admin")
                .formParam("password", "admin")
                .formParam("remember-me", "true")
                .formParam("submit", "Login")
                .check(headerRegex("Set-Cookie", "XSRF-TOKEN=(.*);[\\s]").saveAs("xsrf_token"))
        )
        .exitHereIfFailed()
        .pause(2)
        .exec(http("Authenticated request").get("/api/account").headers(headersHttpAuthenticated).check(status().is(200)))
        .pause(10)
        .repeat(2)
        .on(
            exec(http("Get all labels").get("/api/labels").headers(headersHttpAuthenticated).check(status().is(200)))
                .pause(Duration.ofSeconds(10), Duration.ofSeconds(20))
                .exec(
                    http("Create new label")
                        .post("/api/labels")
                        .headers(headersHttpAuthenticated)
                        .body(StringBody("{" + "\"label\": \"SAMPLE_TEXT\"" + "}"))
                        .asJson()
                        .check(status().is(201))
                        .check(headerRegex("Location", "(.*)").saveAs("new_label_url"))
                )
                .exitHereIfFailed()
                .pause(10)
                .repeat(5)
                .on(exec(http("Get created label").get("${new_label_url}").headers(headersHttpAuthenticated)).pause(10))
                .exec(http("Delete created label").delete("${new_label_url}").headers(headersHttpAuthenticated))
                .pause(10)
        );

    ScenarioBuilder users = scenario("Test the Label entity").exec(scn);

    {
        setUp(
            users.injectOpen(rampUsers(Integer.getInteger("users", 100)).during(Duration.ofMinutes(Integer.getInteger("ramp", 1))))
        ).protocols(httpConf);
    }
}
