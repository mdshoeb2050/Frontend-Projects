# Browser APIs (Application Programming Interfaces) in JavaScript

Browser APIs (Application Programming Interfaces) in JavaScript provide functionality to interact with the browser environment. These APIs enable developers to access and control various browser features, from manipulating the DOM to handling network requests, accessing device features, and much more. Here are explanations of a few common Browser APIs with code examples:

1. **DOM Manipulation with `document` API:**

   **Explanation:** The `document` API provides access to the DOM, allowing developers to manipulate HTML elements, create, modify, or remove elements, and interact with the document structure.

   **Code Example:**
   ```javascript
   // Creating a new element and adding it to the document
   const newElement = document.createElement('div');
   newElement.textContent = 'New Element added via JavaScript';
   document.body.appendChild(newElement);

   // Modifying existing elements
   const existingElement = document.getElementById('existingElementId');
   existingElement.style.color = 'blue';
   existingElement.classList.add('highlight');
   ```

2. **AJAX and Fetch API for Network Requests:**

   **Explanation:** The Fetch API and XMLHttpRequest (XHR) enable making network requests (like fetching data from APIs) asynchronously.

   **Code Example using Fetch API:**
   ```javascript
   fetch('https://api.example.com/data')
       .then(response => {
           if (!response.ok) {
               throw new Error('Network response was not ok');
           }
           return response.json();
       })
       .then(data => {
           console.log(data);
           // Process retrieved data
       })
       .catch(error => {
           console.error('There was a problem with the fetch operation:', error);
       });
   ```

3. **Geolocation API:**

   **Explanation:** Allows access to the user's geographical location, enabling location-based functionalities in web applications.

   **Code Example:**
   ```javascript
   if ("geolocation" in navigator) {
       navigator.geolocation.getCurrentPosition(position => {
           console.log("Latitude:", position.coords.latitude);
           console.log("Longitude:", position.coords.longitude);
       }, error => {
           console.error('Error getting geolocation:', error);
       });
   } else {
       console.log("Geolocation not supported in this browser");
   }
   ```

4. **Web Storage - localStorage and sessionStorage:**

   **Explanation:** Allows storing key-value pairs locally on the client's side, persisting data across sessions (localStorage) or for the current session (sessionStorage).

   **Code Example (localStorage):**
   ```javascript
   localStorage.setItem('user', JSON.stringify({ id: 1, name: 'John' }));

   const user = JSON.parse(localStorage.getItem('user'));
   console.log(user.name); // Output: John

   localStorage.removeItem('user');
   ```

5. **Canvas API for Drawing/Graphics:**

   **Explanation:** The Canvas API enables drawing and manipulating graphics, such as lines, shapes, images, and text.

   **Code Example:**
   ```html
   <canvas id="myCanvas" width="200" height="100"></canvas>

   <script>
       const canvas = document.getElementById('myCanvas');
       const ctx = canvas.getContext('2d');
       ctx.fillStyle = 'green';
       ctx.fillRect(10, 10, 150, 80);
   </script>
   ```

6. **Web Audio API for Audio Manipulation:**

   **Explanation:** This API allows playing, synthesizing, and manipulating audio directly in the browser.

   **Code Example:**
   ```javascript
   const audioContext = new (window.AudioContext || window.webkitAudioContext)();

   fetch('audio_file.mp3')
       .then(response => response.arrayBuffer())
       .then(buffer => audioContext.decodeAudioData(buffer))
       .then(decodedData => {
           const source = audioContext.createBufferSource();
           source.buffer = decodedData;
           source.connect(audioContext.destination);
           source.start();
       })
       .catch(error => {
           console.error('Error loading audio:', error);
       });
   ```

These examples represent a subset of the numerous APIs available in modern browsers. Each API provides specific functionalities that empower developers to build powerful and interactive web applications.


# here are 20 multiple-choice questions on the topic of "Browser APIs in JavaScript" along with their correct answers:

1. **Question:** Which API is used to make asynchronous network requests in JavaScript?
   - A. DOM API
   - B. Web Storage API
   - C. Fetch API
   - D. Geolocation API
   - **Correct Answer:** C. Fetch API

2. **Question:** What does the Geolocation API do in JavaScript?
   - A. Accesses device orientation
   - B. Fetches user's geographical location
   - C. Manipulates the DOM structure
   - D. Provides canvas drawing capabilities
   - **Correct Answer:** B. Fetches user's geographical location

3. **Question:** Which API allows you to store data locally on the client's side in key-value pairs?
   - A. Canvas API
   - B. Audio API
   - C. Web Storage API
   - D. Web Workers API
   - **Correct Answer:** C. Web Storage API

4. **Question:** The `localStorage` and `sessionStorage` objects belong to which API in JavaScript?
   - A. Fetch API
   - B. Canvas API
   - C. Web Storage API
   - D. Geolocation API
   - **Correct Answer:** C. Web Storage API

5. **Question:** Which API is used for rendering graphics and images on a drawing surface in HTML?
   - A. Audio and Video APIs
   - B. Fetch API
   - C. Geolocation API
   - D. Canvas API
   - **Correct Answer:** D. Canvas API

6. **Question:** The `navigator.geolocation.getCurrentPosition()` method belongs to which API?
   - A. Fetch API
   - B. Geolocation API
   - C. Canvas API
   - D. Web Storage API
   - **Correct Answer:** B. Geolocation API

7. **Question:** Which API is used for playing, controlling, and manipulating audio and video content in the browser?
   - A. Web Storage API
   - B. Fetch API
   - C. Audio and Video APIs
   - D. Geolocation API
   - **Correct Answer:** C. Audio and Video APIs

8. **Question:** What API provides a method to fetch data from an external server in JavaScript?
   - A. DOM API
   - B. Canvas API
   - C. Fetch API
   - D. Web Workers API
   - **Correct Answer:** C. Fetch API

9. **Question:** Which API is used to run scripts in the background without interrupting the user interface?
   - A. Geolocation API
   - B. Canvas API
   - C. Fetch API
   - D. Web Workers API
   - **Correct Answer:** D. Web Workers API

10. **Question:** The `localStorage.setItem()` method is part of which API in JavaScript?
   - A. Canvas API
   - B. Web Storage API
   - C. Fetch API
   - D. Geolocation API
   - **Correct Answer:** B. Web Storage API

11. **Question:** Which API provides access to HTML documents and enables manipulation of elements?
   - A. Fetch API
   - B. Geolocation API
   - C. DOM API
   - D. Web Workers API
   - **Correct Answer:** C. DOM API

12. **Question:** Which API enables drawing and rendering graphics on a canvas element in HTML?
   - A. Canvas API
   - B. Fetch API
   - C. Web Storage API
   - D. Audio and Video APIs
   - **Correct Answer:** A. Canvas API

13. **Question:** Which API allows access to the user's current position, if available?
   - A. Fetch API
   - B. Geolocation API
   - C. Web Workers API
   - D. DOM API
   - **Correct Answer:** B. Geolocation API

14. **Question:** The `fetch()` function is primarily used for:
   - A. Playing audio files
   - B. Making asynchronous network requests
   - C. Storing data locally
   - D. Drawing graphics on a canvas
   - **Correct Answer:** B. Making asynchronous network requests

15. **Question:** Which API allows you to play and control multimedia in a web page?
   - A. Fetch API
   - B. Geolocation API
   - C. Audio and Video APIs
   - D. Web Storage API
   - **Correct Answer:** C. Audio and Video APIs

16. **Question:** What method retrieves a specific item from the Web Storage API?
   - A. `getItem()`
   - B. `retrieveItem()`
   - C. `getItemValue()`
   - D. `fetchItem()`
   - **Correct Answer:** A. `getItem()`

17. **Question:** Which API provides a way to run scripts off the main thread in the browser?
   - A. Canvas API
   - B. Web Storage API
   - C. Geolocation API
   - D. Web Workers API
   - **Correct Answer:** D. Web Workers API

18. **Question:** The `addEventListener()` method is commonly used with which API to handle events in JavaScript?
   - A. Canvas API
   - B. Geolocation API
   - C. DOM API
   - D. Audio and Video APIs
   - **Correct Answer:** C. DOM API

19. **Question:** Which API is used to store data temporarily for the duration of a session in a web browser?
   - A. Web Workers API
   - B. Fetch API
   - C. Geolocation API
   - D. sessionStorage in Web Storage API
   - **Correct Answer:** D. sessionStorage in Web Storage API

20. **Question:** Which API is used to play audio files in the browser?
   - A. Audio and Video APIs
   - B. Web Storage API
   - C. Fetch API
   - D. Geolocation API
   - **Correct Answer:** A. Audio and Video APIs




# here are ten code-based questions related to Browser APIs in JavaScript, each asking for the expected output or result:

**Question 1:**

```javascript
console.log(navigator.userAgent);
```
**Expected Output (Sample):**
```
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36
```

**Question 2:**

```javascript
const isOnline = navigator.onLine;
console.log(isOnline);
```
**Expected Output:**
```
true
```

**Question 3:**

```javascript
const storage = localStorage;
storage.setItem('key', 'value');
console.log(storage.getItem('key'));
```
**Expected Output:**
```
value
```

**Question 4:**

```javascript
if (localStorage.getItem('visited')) {
  console.log('Welcome back!');
} else {
  console.log('First visit!');
  localStorage.setItem('visited', 'true');
}
```
**Expected Output (on the first visit):**
```
First visit!
```

**Question 5:**

```javascript
const width = window.screen.width;
console.log(width);
```
**Expected Output (Sample):**
```
1920
```

**Question 6:**

```javascript
const isGeolocationAvailable = 'geolocation' in navigator;
console.log(isGeolocationAvailable);
```
**Expected Output:**
```
true
```

**Question 7:**

```javascript
navigator.geolocation.getCurrentPosition(position => {
  console.log('Latitude:', position.coords.latitude, 'Longitude:', position.coords.longitude);
});
```
**Expected Output (Sample - based on current location):**
```
Latitude: 40.7128 Longitude: -74.0060
```

**Question 8:**

```javascript
const formData = new FormData();
formData.append('username', 'JohnDoe');
formData.append('email', 'johndoe@example.com');
console.log([...formData]);
```
**Expected Output:**
```
[ ["username", "JohnDoe"], ["email", "johndoe@example.com"] ]
```

**Question 9:**

```javascript
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 50, 50);
document.body.appendChild(canvas);
```
**Expected Output:**
A 50x50 green square drawn on a canvas appended to the body of the document.

**Question 10:**

```javascript
const audio = new Audio('path/to/audio.mp3');
audio.play();
```
**Expected Output:**
Plays the audio file located at 'path/to/audio.mp3'.
