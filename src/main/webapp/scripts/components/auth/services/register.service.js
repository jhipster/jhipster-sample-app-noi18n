'use strict';

angular.module('sampleNo18nApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


