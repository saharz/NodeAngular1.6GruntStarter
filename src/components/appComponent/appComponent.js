/**
 * Created by saharza on 27/05/2017.
 */
(function(angular) {
    'use strict';

    angular.module('web_res')
        .component('appComponent', {
            templateUrl: 'components/appComponent/appComponent.html',
            controller: function () {
                var ctrl = this;

                ctrl.$onInit = function() {
                    ctrl.groupsTitle = '1) Select Blackboxes';
                    ctrl.summaryTitle = 'Summary';
                    ctrl.protocolsTitle = '2) Select Protocols';
                    ctrl.timePeriodTitle = '3) Select Time period';
                    ctrl.ex_data = DATA;
                    ctrl.selectedtimePeriod = ctrl.ex_data.times[0];
                };
            }
        });
})(window.angular);