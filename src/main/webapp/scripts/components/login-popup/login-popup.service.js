'use strict';

angular.module('sampleNo18nApp')
    .factory('LoginPopupService', function ($modal) {
        return {
            open: function () {
                var modalInstance = $modal.open({
                    animation: true,
                    templateUrl: 'scripts/components/login-popup/login-popup.html',
                    controller: 'LoginPopupController'
                });
            }
        }
    });
