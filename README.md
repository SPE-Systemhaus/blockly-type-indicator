# Blockly type indicator
A indicator for google's visual programmin framework blockly that shows where a currently dragged block can be attached.

![The type indicator](http://tinly.de/typeIndicator.png "The type indicator")

Here you can see a text block beeing draged into a comparison block's connection. Since their types are compatible it is highlighted and because the string block is within connection range it is highlighted green. The other connection on the comparison block is yellow highlighted because it's not in range. The connection on the variable set block is highlighted with a thin line because it's already occupied.

The indicator can be included to any blockly project simply by appending a script tag to the index.html after any other scripts:
```html
<script src="typeIndicator.js"></script>
