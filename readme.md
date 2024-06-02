## How to use my package

***install the dependencies***
```sh
npm i mathking_lib
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
