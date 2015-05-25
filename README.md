# Coding a timepicker in AngularJs

## Basics of angular directives

1. Syntax
  
  [Little Demo](http://jsfiddle.net/joshdmiller/FHVD9/)

2. Template

3. Link function

4. Scope

  [Isolated Scope](http://www.bennadel.com/blog/2725-how-scope-broadcast-interacts-with-isolate-scopes-in-angularjs.htm)  

5. Controller function
  
  [Order between Compile, Controller, Link](http://jasonmore.net/angular-js-directives-difference-controller-link/)  



## Creating a timepicker

### Problems

1. Respond to time format (meridian)

2. Validation

3. Mouse & Keyboard support

### ngModels 

1. How does it work

  ``` 
  
  <realModel> → ngModelCtrl.$formatters(realModel) → $viewModel
                                                       ↓
  ↑                                                  $render()
                                                       ↓
  ↑                                                  UI changed
                                                       ↓
  ngModelCtrl.$parsers(newViewModel)    ←    $setViewModel(newViewModel)
  
  ```
  
  [Ref: chroder](http://www.chroder.com/2014/02/01/using-ngmodelcontroller-with-custom-directives/)

2. Customize ngModel for timepicker

## Testing a timepicker

