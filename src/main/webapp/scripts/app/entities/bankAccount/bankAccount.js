'use strict';

angular.module('sampleno18nApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('bankAccount', {
                parent: 'entity',
                url: '/bankAccounts',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'BankAccounts'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/bankAccount/bankAccounts.html',
                        controller: 'BankAccountController'
                    }
                },
                resolve: {
                }
            })
            .state('bankAccount.detail', {
                parent: 'entity',
                url: '/bankAccount/{id}',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'BankAccount'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/bankAccount/bankAccount-detail.html',
                        controller: 'BankAccountDetailController'
                    }
                },
                resolve: {
                    entity: ['$stateParams', 'BankAccount', function($stateParams, BankAccount) {
                        return BankAccount.get({id : $stateParams.id});
                    }]
                }
            })
            .state('bankAccount.new', {
                parent: 'bankAccount',
                url: '/new',
                data: {
                    roles: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/bankAccount/bankAccount-dialog.html',
                        controller: 'BankAccountDialogController',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {name: null, balance: null, id: null};
                            }
                        }
                    }).result.then(function(result) {
                        $state.go('bankAccount', null, { reload: true });
                    }, function() {
                        $state.go('bankAccount');
                    })
                }]
            })
            .state('bankAccount.edit', {
                parent: 'bankAccount',
                url: '/{id}/edit',
                data: {
                    roles: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/bankAccount/bankAccount-dialog.html',
                        controller: 'BankAccountDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['BankAccount', function(BankAccount) {
                                return BankAccount.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('bankAccount', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            });
    });
