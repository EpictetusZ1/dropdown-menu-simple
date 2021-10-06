# Simple Dropdown 
A dropdown menu component as used in Dynamic User Interface Interactions

## Installation
```shell
$ npm install @epictetus/dropdown-menu --save
```

## Functionality
This package generates a dropdown menu with no styling, that generates html, adds links, 

## Usage

#### This npm package exports ONE method: ```Menu.buildMenu()```

The ```buildMenu()``` method requires 4 parameter arguments, with one semi-optional (textContentArr).

### ```buildMenu(parentEl, menuID, menuEl, numOfItems, [textContentArr])```

### ```<parentEl>``` 

The parentEl is the element which you wish to attach the new dropdown menu to.

This is the only hard coded reference in the package. Your arg for ```parentEl``` must be an existing element.

It also must be given in the form of a ``` document.QuerySelector()``` native JS input.

#### Example:
HTML
```html
<div class="navBar">
    <!-- Desired menu location here -->
</div>
```
JS
```javascript
Menu.buildMenu(".navBar", ...args)
```

### ```<menuID>```
This arg simply generates the ID you wish to associate with the ``div`` element which will container your menu items.

### ```<menuEl>```
This arg generates the base-class for all menu items. They will additionally receive a class of ``item-${i}`` where ``i`` is the index of a given element from the ```textContentArr```

### ```<numOfItems>```
This arg accepts an int type value, which will generate the corresponding of menu items. If this is different from the length-1 of the ```textContentArr``` a console.warn() will be issued.
The only reason is to alert the user that they will have to manually target and add values for the link text content of each item.

### ```<[textContentArr]>```
This arg expects an array of string values, where the FIRST value is the title of the menu and the subsequent values will be added to their corresponding menu item a tag link text.

#### Notes:
It is recommended you add styling, as these look less than ideal without it. You can style and target your menu with the values you passed through in the inital function call.
A css file for reference will be included in the [GitRepo](https://github.com/EpictetusZ1/dropdown-menu-simple)