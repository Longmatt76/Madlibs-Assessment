### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
 
  React is a frontend framework/library for JavaScript that packages a ton of functionality for building reusable UI components. Its basic approach is that instead of manipulating the DOM directly it listens for changes to specified DOM objects and rerenders only those objects in the actual DOM when changes are detected which leads to better performance. It can be used for any project that requires an interactive frontend.  


- What is Babel?
 
  Babel is a transpiler that converts modern JS code into code that is compatible with React and all browsers.


- What is JSX?
 
  JSX is a JavaScript syntax extension that allows for the writing of HTML in JavaScript/React.


- How is a Component created in React?
 
  In the past I believe they were class based but with modern versions of React components are created by simply writing a JavaScript function.


- What are some differences between state and props?
 
  Props are read only and cannot be modified whereas state can change. Props are passed down to a component from its parent component whereas state is managed from within the component in which it's created. Changes to state trigger rerenders of the component whereas props are immutable, they can't change and they don't affect rerenders.  


- What does "downward data flow" refer to in React?
 
  Downward data flow in React refers to the passing of data via props downwards from a parent component to a child component. You can only transfer data in React from a parent to a child and not vice versa which means child components can't modify the data on their own however you can pass functions down that allow child components to modify the data.


- What is a controlled component?


  A controlled component is a component who's state is controlled by React state. Such as a form input whose own internal state has been taken over by React.


- What is an uncontrolled component?


  An uncontrolled component is a component that maintains its own internal state without React.


- What is the purpose of the `key` prop when rendering a list of components?


  Keys help React identify which items have changed.


- Why is using an array index a poor choice for a `key` prop when rendering a list of components?


  Because if the array is altered the indexes will change.


- Describe useEffect.  What use cases is it used for in React components?


  You can wrap code in useEffect to specify when you want that code to run. UseEffect accepts a callback for its first argument and an array for its second argument. What you put in that array determines when the code in the callback will run. Add an empty array and it will only run after the initial render of the component but adding values to the array (from props or state) tell useEffect to only run the code when those specific values change. Common use cases for useEffect are API calls, timers and subscribe/unsubscribe events.  


- What does useRef do?  Does a change to a ref value cause a rerender of a component?


  UseRef allows you to create a mutable reference to a value or DOM element that persists across renders and can be changed without causing a rerender of the component.


- When would you use a ref? When wouldn't you use one?
 
  You would use it when you need to directly manipulate the DOM, like with HTML video/audio controls or when you need a value to persist across renders that can be changed without causing a rerender. You wouldn't use it in basically every other case.  


- What is a custom hook in React? When would you want to write one?


  A custom hook is a reusable function that typically uses built in React hooks. You would use them when you have the same basic logic that needs to be used by multiple components. Instead of writing the same logic time and time again you could just create a custom hook and extract the logic into it, then just import and run the custom hook in each component that needs it.  


