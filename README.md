# Coding a timepicker in AngularJs

## Basics of angular directives

1. Syntax

2. Template

3. Link function

4. Scope

5. Controller function


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

