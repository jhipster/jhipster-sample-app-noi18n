'use strict';

angular.module('sampleno18nApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


