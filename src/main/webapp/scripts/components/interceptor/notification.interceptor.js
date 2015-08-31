 'use strict';

angular.module('sampleno18nApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-sampleno18nApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-sampleno18nApp-params')});
                }
                return response;
            },
        };
    });