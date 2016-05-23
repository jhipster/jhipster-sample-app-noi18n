(function () {
    'use strict';

    angular
        .module('jhipsterNoI18NSampleApplicationApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
