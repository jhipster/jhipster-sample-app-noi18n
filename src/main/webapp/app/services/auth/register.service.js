(function () {
    'use strict';

    angular
        .module('sampleNo18NApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
