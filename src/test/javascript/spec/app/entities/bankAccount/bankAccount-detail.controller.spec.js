'use strict';

describe('BankAccount Detail Controller', function() {
  var scope, rootScope, entity, createController;

  beforeEach(module('sampleno18nApp'));
  beforeEach(inject(function($rootScope, $controller) {
    rootScope = $rootScope;
    scope = rootScope.$new();
    entity = jasmine.createSpyObj('entity', ['unused']);

    createController = function() {
      return $controller("BankAccountDetailController", {
        '$scope': scope,
        '$rootScope': rootScope,
        'entity': null,
        'BankAccount' : null,
        'User' : null,
        'Operation' : null
      });
    };
  }));


  describe('Root Scope Listening', function() {
    it('Unregisters root scope listener upon scope destruction',
      function() {
        var eventType = 'sampleno18nApp:bankAccountUpdate';

        createController();
        expect(rootScope.$$listenerCount[eventType]).toEqual(1);

        scope.$destroy();
        expect(rootScope.$$listenerCount[eventType]).toBeUndefined();
      });
  });
});
