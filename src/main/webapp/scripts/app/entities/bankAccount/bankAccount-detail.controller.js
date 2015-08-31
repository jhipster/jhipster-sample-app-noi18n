'use strict';

angular.module('sampleno18nApp')
    .controller('BankAccountDetailController', function ($scope, $rootScope, $stateParams, entity, BankAccount, User, Operation) {
        $scope.bankAccount = entity;
        $scope.load = function (id) {
            BankAccount.get({id: id}, function(result) {
                $scope.bankAccount = result;
            });
        };
        $rootScope.$on('sampleno18nApp:bankAccountUpdate', function(event, result) {
            $scope.bankAccount = result;
        });
    });
