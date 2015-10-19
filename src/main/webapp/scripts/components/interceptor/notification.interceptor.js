 'use strict';

angular.module('sampleNo18nApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-sampleNo18nApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-sampleNo18nApp-params')});
                }
                return response;
            }
        };
    });
