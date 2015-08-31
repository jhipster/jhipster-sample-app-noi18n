'use strict';

angular.module('sampleno18nApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
