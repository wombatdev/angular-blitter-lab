
"use strict";

(function(){
    angular
    .module("bleets")
    .controller("BleetEditController", [
        "BleetFactory",
        "$state",
        "$stateParams",
        BleetEditControllerFunction
    ]);

    function BleetEditControllerFunction (BleetFactory, $state, $stateParams) {
        this.bleet = BleetFactory.get({id: $stateParams.id});
        // this.update = function() {
        //     this.bleet.$update({id: $stateParams.id}).then(function (response) {
        //         $state.go("bleetShow",({id: response.id}));
        //     })
        // };
        // this.destroy = function(){
        //     this.bleet.$delete({id: $stateParams.id}).then(function (response) {
        //         $state.go("bleetIndex");
        //     })
        // };
    };
}());
