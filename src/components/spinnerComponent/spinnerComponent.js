/**
 * Created by saharza on 28/05/2017.
 */
(function(angular) {
    'use strict';

    angular.module('web_res')
        .component('spinnerComponent', {
            templateUrl: 'components/spinnerComponent/spinnerComponent.html',
            bindings: {
                spinner: '<'
            },
            controller: function () {
                var $ctrl = this;

                $ctrl.$onInit = function (){
                };

                $ctrl.$onChange = function (changes){
                    if (changes.spinner) {
                        $ctrl.spinner = changes.spinner.currentValue;
                    }
                };
            }
        });
})(window.angular);