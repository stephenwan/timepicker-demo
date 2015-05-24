(function() {

    angular.module('myApp.timepicker.timepicker-directive', [])
    .directive('myTimepicker', timepickerDirective);


    function timepickerDirective() {

        return {
            restrict: 'E',
            template: buildTemplate,
            scope: {
                showMeridian: '=',
                timeValue: '='
            },
            link: postLink
        };

        function postLink(scope, elem, attr) {

            scope.$watch('timeValue', function(v){
                var timeStr = v.toTimeString();
                var pieces = timeStr.split(':');

                var hour = parseInt(pieces[0]);
                if (scope.showMeridian) {
                    hour = hour % 12 || 12;
                }

                scope.hour =  hour;                                
                scope.minute = pieces[1];
            });
            
        }

        function buildTemplate() {

            return '<input hour-input ng-model="hour"/>'
                   + '<input minute-input ng-model="minute"/>'
                 + '<select meridian-input ng-if="showMeridian"></select>';
        }

    }

    
    

})();