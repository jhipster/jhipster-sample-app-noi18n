package io.github.jhipster.sample.config;

import java.util.Collections;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testcontainers.containers.JdbcDatabaseContainer;
import org.testcontainers.containers.MySQLContainer;
import org.testcontainers.containers.output.Slf4jLogConsumer;

public class MysqlTestContainer implements SqlTestContainer {

    private static final Logger log = LoggerFactory.getLogger(MysqlTestContainer.class);

    private MySQLContainer<?> mysqlContainer;

    @Override
    public void destroy() {
        if (null != mysqlContainer && mysqlContainer.isRunning()) {
            mysqlContainer.stop();
        }
    }

    @Override
    public void afterPropertiesSet() {
        if (null == mysqlContainer) {
            mysqlContainer =
                new MySQLContainer<>("mysql:8.0.33")
                    .withDatabaseName("jhipsterNoI18nSampleApplication")
                    .withTmpFs(Collections.singletonMap("/testtmpfs", "rw"))
                    .withLogConsumer(new Slf4jLogConsumer(log))
                    .withReuse(true);
        }
        if (!mysqlContainer.isRunning()) {
            mysqlContainer.start();
        }
    }

    @Override
    public JdbcDatabaseContainer<?> getTestContainer() {
        return mysqlContainer;
    }
}
