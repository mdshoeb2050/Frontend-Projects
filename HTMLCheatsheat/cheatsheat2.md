# Here's a concise HTML5 cheatsheet with example code for quick revision before your interview:

### HTML5 Structure and Basic Elements:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
    <meta charset="UTF-8">
    <meta name="description" content="Description of the page">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Heading</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <article>
                <h2>Article Heading</h2>
                <p>Article content here.</p>
            </article>
            
            <aside>
                <h3>Aside Heading</h3>
                <p>Aside content here.</p>
            </aside>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2023 Your Company</p>
    </footer>
    
    <script src="script.js"></script>
</body>
</html>
```

### New Elements in HTML5:

#### Video Example:
```html
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

#### Canvas Example:
```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

#### Form and Input Example:
```html
<form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <input type="submit" value="Submit">
</form>
```

#### Audio Example:
```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio tag.
</audio>
```

### Attributes:

#### Placeholder Attribute:
```html
<input type="text" placeholder="Enter your name">
```

#### Required Attribute:
```html
<input type="text" required>
```

### APIs and Storage:

#### Local Storage Example:
```javascript
// Storing data
localStorage.setItem('username', 'John');

// Retrieving data
let storedUsername = localStorage.getItem('username');
console.log(storedUsername); // Output: John
```

#### Geolocation API Example:
```javascript
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    console.log("Geolocation is not supported by this browser.");
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
}
```

### Meta Tags:

#### Viewport Meta Tag:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### CSS Linking:

#### Linking an External Stylesheet:
```html
<link rel="stylesheet" type="text/css" href="styles.css">
```

This HTML5 cheatsheet with example code snippets should help you quickly revise essential HTML5 concepts before your interview. Good luck!