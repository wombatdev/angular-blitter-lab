
"use strict";

(function(){
    angular
    .module("bleets")
    .controller("BleetNewController", [
        "BleetFactory",
        "$state",
        "$stateParams",
        BleetNewControllerFunction
    ]);

    function BleetNewControllerFunction (BleetFactory, $state, $stateParams) {
        this.bleet = new BleetFactory();
        this.create = function () {
            this.bleet.$save().then(function (response) {
                $state.go("bleetShow",({id: response.id}));
            })
        }
    }
}());
