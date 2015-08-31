'use strict';

angular.module('sampleno18nApp')
    .controller('OperationDetailController', function ($scope, $rootScope, $stateParams, entity, Operation, BankAccount, Label) {
        $scope.operation = entity;
        $scope.load = function (id) {
            Operation.get({id: id}, function(result) {
                $scope.operation = result;
            });
        };
        $rootScope.$on('sampleno18nApp:operationUpdate', function(event, result) {
            $scope.operation = result;
        });
    });
