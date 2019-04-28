#Notes on essential Vue.js functionality

### Vue CLI 3
  - Docs: https://cli.vuejs.org/guide/
  - install with npm
    ` npm i -g @vue/cli `
  - Create a Project
    ` vue create my-project `
    ` vue ui`

## Understanding VueJS, Syntax, and the Essentials
  - This lesson will cover key concepts to understand how Vue works. This foundational knowledge will allow you to explore applications developed in Vue

### Establish Vue Instance
  - A Vue instance accepts an options object that allows us to manipulate HTML and add reactivity through various Vue features

### Directives and v-if
  - As seen in essentials/directives/index.html
  - - v-if is a directive attribute that allows for conditional rendering
  - - v-bind is fundamental for dynamic reactivity in single page applications
  - - the instance of the app can be directly accessed via the inspect panel in DevTools and setting variables manually

### V-for and List Renderings
  - As seen in essentials/lists/index.html
  - - v-for can be used within the list element to render many object.properties, and then conditionally filter and render them using a v-if
  - v-for is great for creating dynamic lists

### V-on for Clicking
  - As seen in essentials/buttons/index.html
  - - v-on:click can also be written with shorthand as @click, and is a hallmark for dynamic interactivity in VueJS
  - - The method referred to by @click then calls the proper method, which executes functionality and alerts for the data bound to the instance of the current object using the this keyword and the dot object syntax
  - v-on allows interactivity by binding instance methods to the click handler of elements

### Components
  - As seen in essentials/components/index.html
  - - data must be an object when within a component
  - - Use backticks within the template to write the template on multiple lines
  - - parents can give components data through props
  - - must use v-bind to be able to override the default and expected type
  - components in Vue encapsulate HTML with Vue interactivity and create reusable code

### V-model and Computed Properties
  - models allow the user to update state in the view component utilizing something like an input field
  - computed properties will take user input, perform some calculation, and then return some output to the user
  - As seen in essentials/computed/index.html
  - - Using the v-model directive, the user is able to input text which is then lowercased and redisplayed via the {{}} data binding
  - v-models map data to pieces of HTML to allow two-way data binding
  - Computed properties use complex logic to return modified pieces of data

### Lifecycle Hooks
  - These special functions execute at certain times before, during, and after the DOM loads
  - created() lifecycle hook function will execute before the DOM is loaded
  - mounted() lifecycle hook function will execute one the component has been rendered on the DOM
  - updated() lifecycle hook function will trigger once the component has been updated, this is how to keep track of users changing the state of the application as it runs
  - As seen in essentials/hooks/index.html
  - - created() life
  - Lifecycle hooks like created, mounted, and updated allow vue instances to run specific code throughout its lifespan

- Vue files seen with the .vue extension have 3 main parts:
- - template section with <template></template> tags; contains HTML corresponding to the component described within the vue file
- - script section with <script></script> tags; contains the functionality of the component
- - style section with <style></style> tags; optional but can contain any specific css style for the component

- vue-router makes building applications with multiple routes (or url paths) very easy to do
- With this, you can have multiple Single Page Applications behind different links on your website/application


