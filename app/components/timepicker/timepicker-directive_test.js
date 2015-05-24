'use strict';


describe('myApp.timepicker.module', function() {

    var scope, timepicker;

    
    beforeEach(module('myApp.timepicker'));

    beforeEach(inject(function($rootScope){
        scope = $rootScope.$new();
        scope.testData = {
            showMeridian: false,
            time: new Date(2015, 0, 1, 2, 3)
        };
        
    }));

    function setTime(hour, minute) {
        scope.testData.time.setHours(hour);
        scope.testData.time.setMinutes(minute);
    }

    function buildTimepicker() {
        var timepickerLn;        
        inject(function($compile) {
            timepickerLn = $compile(
                '<div>'
                + '<my-timepicker time-value="testData.time" show-meridian="testData.showMeridian">'
                + '</my-timepicker></div>'); 
        });
      
        timepicker = timepickerLn(scope).find('my-timepicker');
        scope.$digest();
    }

    
    describe('timepicker directive', function() {
        it('should display hour and time input', function() {
            buildTimepicker();            
            expect(timepicker.find('input[hour-input]').length).toBe(1);
            expect(timepicker.find('input[minute-input]').length).toBe(1);
        });

        it('should display meridian-select when scope showMeridian is true', function() {
            scope.testData.showMeridian = true;
            buildTimepicker();
            expect(timepicker.find('select[meridian-input]').length).toBe(1);
            
        });

        it('should hide meridian-select when scope showMeridian is false', function() {
            scope.testData.showMeridian = false;
            buildTimepicker();
            expect(timepicker.find('select[meridian-input]').length).toBe(0);            
        });

        it('should display hour correctly when showMeridian is false', function() {
            setTime(20, 0);
            scope.testData.showMeridian = false;
            buildTimepicker();
            var hourInput = timepicker.find('input[hour-input]');
            expect(hourInput.val()).toBe('20');
        });

        it('should display minute correctly', function() {
            setTime(0, 50);
            buildTimepicker();
            var minuteInput = timepicker.find('input[minute-input]');
            expect(minuteInput.val()).toBe('50');
        });

        it('should display hour correctly when showMeridian is true', function() {
            setTime(20, 0);
            scope.testData.showMeridian = true;
            buildTimepicker();

            var hourInput = timepicker.find('input[hour-input]');
            expect(hourInput.val()).toBe('8');
            
        });
        
    });

    
    

});