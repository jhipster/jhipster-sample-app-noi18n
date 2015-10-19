'use strict';

angular.module('sampleNo18nApp')
    .factory('errorHandlerInterceptor', function ($q, $rootScope) {
        return {
            'responseError': function (response) {
                if (!(response.status == 401 && response.data.path.indexOf("/api/account") == 0 )){
	                $rootScope.$emit('sampleNo18nApp.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });