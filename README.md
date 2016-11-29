A indicator for google's visual programming framework [blockly](https://github.com/google/blockly) that shows where a currently dragged block can be attached.

![The type indicator](http://i.imgur.com/yflINvR.gif)

The indicator can be included to any blockly project simply by appending a script tag to the index.html after any other scripts:
```html
<script src="typeIndicator.js"></script>
```

Colours can be changed by calling:
```
Blockly.Css.setTypeIndicatorColours(near, far, occupied)
```
Where near ist the colour for a connection in connecting range, far for all other type compatible connections that are not occupied and occupied for connections that are type compatible but occupied.
