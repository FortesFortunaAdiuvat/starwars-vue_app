# starwars-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Vue learning notes
- Vue files seen with the .vue extension have 3 main parts:
- - template section with <template></template> tags; contains HTML corresponding to the component described within the vue file
- - script section with <script></script> tags; contains the functionality of the component
- - style section with <style></style> tags; optional but can contain any specific css style for the component

- public folder contains files needed for display on the browser
- src (source) folder contains files that transcompile into what is displayed and where your JS and Vue files are stored, this is where the top level App.Vue and main.js files reside
- - components folder contains JS or Vue files that define the functionality of your application

#### Component creation
- create template, script, and style tags
- within script section, create the section that will export the default functionality of the component
```
export default {
    name: 'app',
    data(){

    },
    methods: {

    }
}
```
- anything in the data section can be dynamically variabalized and displayed using {{mustache}} interpoloation to render it in the template HTML section
- the method section will contain the functionality of the component, and can interact with objects/variables within the data function

#### Adding Router
- allows for navigation links within your app
- - creates possibility for apps within a single page app
- - npm install vue-router --save
- also contains functionality for
- - nested routes
- - programmatic navigation
- - HTML5 history mode to replace the default hash mode

#### Adding State
- npm install vuex --save
- 

#### TODO IDEAS:
- Add a back button which allows the user to revert their last switch character. That way, they can save a character they may have liked that they accidentally skipped over.
- Keep a history of all the characters that the user generates in the lifespan of the application.
- Allow the user to specify their own list of initial_ids rather than hard-coding the [1,13,14] array or list of ids
- Add another route for vehicles from the API
- Run npm run build to create a production version of the application. Then host it online!