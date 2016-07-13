
"use strict";

(function(){
    angular
    .module("bleets")
    .controller("BleetShowController", [
        "BleetFactory",
        "$state",
        "$stateParams",
        BleetShowControllerFunction
    ]);

    function BleetShowControllerFunction (BleetFactory, $state, $stateParams) {
        this.bleet = BleetFactory.get({id: $stateParams.id});
        this.update = function(content) {
            console.log(content)
            this.bleet.content = content;
            this.bleet.$update({id: $stateParams.id}).then(function (response) {
                $state.go("bleetShow",({id: response.id}));
            })
        };
    }
}());
