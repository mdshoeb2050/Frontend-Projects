Here's a concise CSS3 cheat sheet to help with a quick revision before your interview:

### CSS Basics:

```css
/* CSS Syntax */
selector {
    property: value;
}
```

### Selectors:

- **Element Selector:**
    ```css
    p {
        /* Styles for <p> elements */
    }
    ```

- **Class Selector:**
    ```css
    .className {
        /* Styles for elements with class="className" */
    }
    ```

- **ID Selector:**
    ```css
    #idName {
        /* Styles for an element with id="idName" */
    }
    ```

- **Universal Selector:**
    ```css
    * {
        /* Styles apply to all elements */
    }
    ```

### Box Model:

```css
.element {
    width: 200px;
    height: 100px;
    margin: 10px;
    padding: 20px;
    border: 1px solid #000;
}
```

### Text Styling:

```css
.element {
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-align: center;
    text-decoration: underline;
}
```

### Backgrounds:

```css
.element {
    background-color: #f0f0f0;
    background-image: url('background.jpg');
    background-repeat: no-repeat;
    background-position: center;
}
```

### Flexbox Layout:

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Grid Layout:

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
}
```

### Transitions:

```css
.element {
    transition: all 0.3s ease-in-out;
}
.element:hover {
    transform: scale(1.1);
    opacity: 0.8;
}
```

### Media Queries:

```css
@media (max-width: 768px) {
    /* Styles for screens up to 768px width */
}
```

### Animations:

```css
@keyframes slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(100%); }
}
.element {
    animation: slide 3s infinite alternate;
}
```

This cheat sheet covers essential CSS3 concepts. Remember to practice and understand these core principles. Good luck with your interview!