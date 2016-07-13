
"use strict";

(function(){
    angular
    .module("bleets")
    .controller("BleetIndexController", [
        "BleetFactory",
        "$state",
        BleetIndexControllerFunction
    ]);

    function BleetIndexControllerFunction (BleetFactory, $state) {
        this.bleets = BleetFactory.query();
        this.destroy = function(bleet){
            this.bleet = BleetFactory.get({id: bleet.id});
            this.bleet.$delete({id: bleet.id}).then(function (response) {
                $state.reload();
            })
        };
    }
}());
