# explain me this line of code:  

```html
<div style="--x:1;--y:0;">
```

- `<div>`: This is an HTML element used to create a division or a section in an HTML document, providing a container in which content can be placed.

- `style="..."`: This is an inline style attribute applied directly to the `<div>` element. It's used to add specific styling to that element without the need for an external CSS file.

- `--x:1;--y:0;`: These are custom CSS variables or custom properties. In CSS, variables start with `--` and can be defined and assigned values for later use within that element or its descendants. In this case, `--x` and `--y` are the custom properties being defined.

    - `--x: 1;`: This sets the value of the custom property `--x` to `1`.
    
    - `--y: 0;`: This sets the value of the custom property `--y` to `0`.

These custom properties are set within the `style` attribute directly in the HTML, allowing for reuse and manipulation within the specific element or its children.

Later in the CSS code, these custom properties can be utilized by referencing `var(--x)` or `var(--y)`, allowing for dynamic changes and avoiding hard-coded values, providing more flexibility and ease of maintenance in styling. For example:

```css
.someOtherClass {
    background-color: blue;
    transform: translate(var(--x), var(--y));
}
```

This code snippet demonstrates the use of custom properties within a CSS class. The values of `--x` and `--y` defined in the `style` attribute of the HTML `<div>` can be utilized within this CSS block for transformations, such as in this case, the `translate` function.



# z-index 

The CSS property z-index is used to control the stacking order of positioned elements on a web page along the z-axis. It only applies to elements with a specified position property, such as position: relative, position: absolute, position: fixed, or position: sticky

For example, if you have elements with z-index: 1 and z-index: 3, an element with z-index: 2 will appear above the element with z-index: 1 but below the element with z-index: 3.

It's important to note that the z-index property only works on positioned elements and doesn't have any effect on non-positioned elements. Additionally, elements within the same stacking context are affected by their parent stacking context, which means their z-index values are relative to their parent's stacking order.


# var() fun

``` CSS
:root {
  --blue: #1e90ff;
  --white: #ffffff;
}

body { background-color: var(--blue); }

h2 { border-bottom: 2px solid var(--blue); }

.container {
  color: var(--blue);
  background-color: var(--white);
  padding: 15px;
}

button {
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
  padding: 5px;
}  
```
var(--name, value)

Value	Description
name	Required. The variable name (must start with two dashes)
value	Optional. The fallback value (used if the variable is not found)

- Advantages of using var() are:

makes the code easier to read (more understandable)
makes it much easier to change the color values
To change the blue and white color to a softer blue and white, you just need to change the two variable values:




#  filter()


The CSS property `filter` applies graphical effects like blurring or color shifting to an element's rendering. In this case, `filter: drop-shadow(0 0 30px #ef4149);` applies a drop shadow effect to the element.

Let's break down the parameters within the `drop-shadow` function:

- `0 0`: These values represent the horizontal and vertical offsets of the shadow. Here, both are set to `0`, meaning the shadow is directly behind the element without any horizontal or vertical displacement.

- `30px`: This value represents the blur radius of the shadow. The larger the value, the more blurred the shadow will be. In this case, `30px` specifies a substantial blur for the shadow.

- `#ef4149`: This is the color of the shadow. It's represented in hexadecimal color code format `#ef4149`, indicating a shade of red.

When applied to an element, `filter: drop-shadow(0 0 30px #ef4149);` creates a red drop shadow directly behind the element, with a significant blur effect (30 pixels) and no horizontal or vertical offset, giving the impression of a soft, diffused shadow. This can add depth and visual appeal to the element, making it appear as if it's slightly raised or floating above the background.

It's worth noting that the `filter` property, including `drop-shadow`, might not be supported in older browsers and may have limited browser compatibility. Always test and consider fallbacks or alternative approaches for broader support if necessary.


# transform-origin 

The transform-origin property allows you to change the position of transformed elements.

2D transformations can change the x- and y-axis of an element. 3D transformations can also change the z-axis of an element.

To better understand the transform-origin property, view a demo.

Note: This property must be used together with the transform property.

Tip: To better understand this property for 3D transforms, view a demo.


# filter : hue-rotate 


- Applies a hue rotation on the image. The value defines the number of degrees around the color circle the image samples will be adjusted. 0deg is default, and represents the original image.

- Note: Maximum value is 360deg.

https://www.w3schools.com/cssref/playdemo.php?filename=playcss_filter&preval=hue-rotate(90deg) 