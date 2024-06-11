## How to use my package

***install the dependencies***
```sh
npm i mathking_lib
npm i express
```
***Usage of this package***
```js
const {
    randomNumber,
    capitalizeFirstLetter,
    reverseString,
    removeDuplicates,
    deepClone,
    mergeObjects,
    shuffleArray,
    isPalindrome,
    toQueryString
} = require('mathking_lib');

console.log(randomNumber(1, 10)); // Outputs a random number between 1 and 10
console.log(capitalizeFirstLetter('hello')); // Outputs 'Hello'
console.log(reverseString('hello')); // Outputs 'olleh'
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Outputs [1, 2, 3, 4, 5]
console.log(deepClone({ a: 1, b: { c: 2 } })); // Outputs { a: 1, b: { c: 2 } }
console.log(mergeObjects({ a: 1 }, { b: 2 })); // Outputs { a: 1, b: 2 }
console.log(shuffleArray([1, 2, 3, 4, 5])); // Outputs shuffled array
console.log(isPalindrome('A man a plan a canal Panama')); // Outputs true
console.log(toQueryString({ name: 'John', age: 30 })); // Outputs 'name=John&age=30'
```

## Using with Express
To allow the user to input values via an HTML form and then display the results based on those inputs, we'll need to modify the HTML file to include an input form, and update the server to handle these inputs. Here’s how you can do it:

### Step-by-Step Instructions

1. **Update `script.js` to export functions**:

   ```javascript
   const {
       randomNumber,
       capitalizeFirstLetter,
       reverseString,
       removeDuplicates,
       deepClone,
       mergeObjects,
       shuffleArray,
       isPalindrome,
       toQueryString
   } = require('mathking_lib');

   // Export the functions to be used in the server
   module.exports = {
       randomNumber,
       capitalizeFirstLetter,
       reverseString,
       removeDuplicates,
       deepClone,
       mergeObjects,
       shuffleArray,
       isPalindrome,
       toQueryString
   };
   ```

2. **Update `server.js` to handle form input**:

   ```javascript
   const express = require('express');
   const path = require('path');
   const bodyParser = require('body-parser');
   const {
       randomNumber,
       capitalizeFirstLetter,
       reverseString,
       removeDuplicates,
       deepClone,
       mergeObjects,
       shuffleArray,
       isPalindrome,
       toQueryString
   } = require('./script');

   const app = express();

   // Serve static files from the 'public' directory
   app.use(express.static(path.join(__dirname, 'public')));
   app.use(bodyParser.urlencoded({ extended: true }));
   app.use(bodyParser.json());

   // Endpoint to process the form data
   app.post('/process', (req, res) => {
       const { inputType, inputValue } = req.body;
       let result;

       switch (inputType) {
           case 'randomNumber':
               const [min, max] = inputValue.split(',').map(Number);
               result = randomNumber(min, max);
               break;
           case 'capitalizeFirstLetter':
               result = capitalizeFirstLetter(inputValue);
               break;
           case 'reverseString':
               result = reverseString(inputValue);
               break;
           case 'removeDuplicates':
               const array = JSON.parse(inputValue);
               result = removeDuplicates(array);
               break;
           case 'deepClone':
               const obj = JSON.parse(inputValue);
               result = deepClone(obj);
               break;
           case 'mergeObjects':
               const [obj1, obj2] = inputValue.split('|').map(JSON.parse);
               result = mergeObjects(obj1, obj2);
               break;
           case 'shuffleArray':
               const arr = JSON.parse(inputValue);
               result = shuffleArray(arr);
               break;
           case 'isPalindrome':
               result = isPalindrome(inputValue);
               break;
           case 'toQueryString':
               const queryObj = JSON.parse(inputValue);
               result = toQueryString(queryObj);
               break;
           default:
               result = 'Invalid input type';
       }

       res.json({ result });
   });

   // Serve the HTML file
   app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname, 'public', 'index.html'));
   });

   app.listen(3000, () => {
       console.log('Server is running on http://localhost:3000');
   });
   ```

3. **Update the HTML file to include an input form (public/index.html)**:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Mathking Lib Demo</title>
       <style>
           body {
               font-family: Arial, sans-serif;
           }
           .container {
               max-width: 600px;
               margin: 0 auto;
               padding: 20px;
           }
           .output {
               margin-top: 20px;
               padding: 10px;
               border: 1px solid #ddd;
               border-radius: 5px;
               background-color: #f9f9f9;
           }
           .form-group {
               margin-bottom: 15px;
           }
           label {
               display: block;
               margin-bottom: 5px;
           }
           input, select {
               width: 100%;
               padding: 8px;
               margin: 0;
               box-sizing: border-box;
           }
           button {
               padding: 10px 20px;
               background-color: #007BFF;
               color: white;
               border: none;
               cursor: pointer;
           }
           button:hover {
               background-color: #0056b3;
           }
       </style>
   </head>
   <body>
       <div class="container">
           <h1>Mathking Lib Demo</h1>
           <form id="mathForm">
               <div class="form-group">
                   <label for="inputType">Select Function:</label>
                   <select id="inputType" name="inputType" required>
                       <option value="randomNumber">Random Number (min,max)</option>
                       <option value="capitalizeFirstLetter">Capitalize First Letter</option>
                       <option value="reverseString">Reverse String</option>
                       <option value="removeDuplicates">Remove Duplicates (array)</option>
                       <option value="deepClone">Deep Clone (object)</option>
                       <option value="mergeObjects">Merge Objects (obj1|obj2)</option>
                       <option value="shuffleArray">Shuffle Array (array)</option>
                       <option value="isPalindrome">Is Palindrome</option>
                       <option value="toQueryString">To Query String (object)</option>
                   </select>
               </div>
               <div class="form-group">
                   <label for="inputValue">Input Value:</label>
                   <input type="text" id="inputValue" name="inputValue" required>
               </div>
               <button type="submit">Submit</button>
           </form>
           <div class="output" id="output"></div>
       </div>
       <script>
           document.getElementById('mathForm').addEventListener('submit', async function (e) {
               e.preventDefault();
               const form = e.target;
               const formData = new FormData(form);
               const inputType = formData.get('inputType');
               const inputValue = formData.get('inputValue');

               const response = await fetch('/process', {
                   method: 'POST',
                   headers: {
                       'Content-Type': 'application/json'
                   },
                   body: JSON.stringify({ inputType, inputValue })
               });
               const data = await response.json();
               const outputElement = document.getElementById('output');
               outputElement.innerHTML = `<p><strong>Result:</strong> ${JSON.stringify(data.result)}</p>`;
           });
       </script>
   </body>
   </html>
   ```

4. **Run the server**:

   ```bash
   node server.js
   ```

5. **Open your browser and navigate to** `http://localhost:3000`.

### Explanation

- **`script.js`**: Now exports the individual functions from `mathking_lib`.
- **`server.js`**: Handles form submissions, processes the inputs using the appropriate `mathking_lib` function, and returns the result.
- **`public/index.html`**: Contains a form that allows users to select a function and input values. When the form is submitted, it sends the data to the server and displays the result on the page.

This setup allows users to input values through an HTML form, submit them to the server, and display the processed results on the page.

**RUN**
```sh
node script.js
```


### Initialization and Setup

1. **Initialize a New Project:**
   ```sh
   npm init -y
   ```

### Managing Dependencies

2. **Install a Dependency:**
   ```sh
   npm install <package-name>
   ```

3. **Install a Development Dependency:**
   ```sh
   npm install <package-name> --save-dev
   ```

4. **Uninstall a Dependency:**
   ```sh
   npm uninstall <package-name>
   ```

5. **Update Dependencies:**
   ```sh
   npm update
   ```

### Working with Packages

6. **Check Package Availability:**
   ```sh
   npm search <package-name>
   ```

7. **View Package Information:**
   ```sh
   npm view <package-name>
   ```

8. **List Installed Packages:**
   ```sh
   npm list
   ```

### Publishing Packages

9. **Login to npm:**
   ```sh
   npm login
   ```

10. **Check Current User:**
    ```sh
    npm whoami
    ```

11. **Publish a Package:**
    ```sh
    npm publish --access public
    ```

12. **Unpublish a Package:**
    ```sh
    npm unpublish <package-name> --force
    ```

### Versioning

13. **Bump Package Version:**
    ```sh
    npm version <update_type>
    ```
    Update types can be `patch`, `minor`, or `major`.

14. **Publish the Updated Version:**
    ```sh
    npm publish
    ```

### Linking Packages

15. **Create a Symlink to a Global Package:**
    ```sh
    npm link
    ```

16. **Link a Global Package as a Dependency:**
    ```sh
    npm link <package-name>
    ```

### Cache Management

17. **Clear npm Cache:**
    ```sh
    npm cache clean --force
    ```

### Auditing and Security

18. **Audit for Security Issues:**
    ```sh
    npm audit
    ```

19. **Fix Audited Issues:**
    ```sh
    npm audit fix
    ```

### Additional Useful Commands

20. **List Globally Installed Packages:**
    ```sh
    npm list -g --depth=0
    ```

21. **Logout from npm:**
    ```sh
    npm logout
    ```

22. **Add a Tag to a Specific Version:**
    ```sh
    npm dist-tag add <package-name>@<version> <tag>
    ```

23. **Remove a Tag from a Specific Version:**
    ```sh
    npm dist-tag rm <package-name> <tag>
    ```

24. **Access Package Registry Info:**
    ```sh
    npm info <package-name>
    ```

25. **Install a Specific Version of a Package:**
    ```sh
    npm install <package-name>@<version>
    ```

### Example Workflow

Here’s an example workflow using these commands:

1. **Initialize the project:**
   ```sh
   mkdir my-awesome-library
   cd my-awesome-library
   npm init -y
   ```

2. **Create the main library file (`index.js`) and write your code.**

3. **Install any necessary dependencies:**
   ```sh
   npm install lodash
   ```

4. **Check the package name availability:**
   ```sh
   npm search my-awesome-library
   ```

5. **Login to npm:**
   ```sh
   npm login
   ```

6. **Check the current user to confirm login:**
   ```sh
   npm whoami
   ```

7. **Publish your package:**
   ```sh
   npm publish --access public
   ```

8. **Bump the version when making updates:**
   ```sh
   npm version patch
   ```

9. **Publish the updated version:**
   ```sh
   npm publish
   ```

10. **View the package information:**
    ```sh
    npm view my-awesome-library
    ```

11. **Audit for security issues:**
    ```sh
    npm audit
    ```

12. **Clear npm cache if needed:**
    ```sh
    npm cache clean --force
    ```
13. **View Author Name**
 ```sh
    npm view <package-name> author
```
```sh
npm view <package-name>
```
***Viewing Full Package Information***
```sh
npm info <package-name>
```

By following these commands, you can effectively manage and publish your npm packages.
