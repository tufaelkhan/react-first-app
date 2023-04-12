import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className='text-4xl text-center mb-14'>Blog page!!</h3>
            <div className='ml-10'>
                <h2 className='text-3xl mb-5'>When should you use context API?</h2>
                <p>Using Context Api we can pass data to multiple components with props drilling here are some use case of context api.Theme switching:If your app lets the user change its appearance (e.g. dark mode), you can put a context provider at the top of your app, and use that context in components that need to adjust their visual look.</p>
                <p>Theme switching:If you have a requirement to manage user authentication across your application, you can use the Context API to manage the user's authentication state. This way, you don't have to pass the authentication state down as a prop to each component.</p>
                <p>Routing: If you have a requirement to manage the current route of your application, you can use the Context API to manage the current route across your entire application. This way, you don't have to pass the current route down as a prop to each component.</p>
                <p>Managing stateAs your app grows, you might end up with a lot of state closer to the top of your app. Many distant components below may want to change it. It is common to use a reducer together with context to manage complex state and pass it down to distant components without too much hassle.</p>
                <h2 className='text-3xl mb-5 mt-5'>What is custom Hook?</h2>
                <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Custom hooks allow you to extract stateful logic from a component and reuse it in other components without duplicating code. Custom hooks work by using the built-in React hooks, such as useState, useEffect, and useContext. The custom hook can also accept arguments, just like a regular function. For example, let's say you have several components that need to fetch data from an API. You can create a custom hook called useFetch that uses the useState and useEffect hooks to fetch the data and manage the loading state. Then, you can use the useFetch hook in each component that needs to fetch data, instead of duplicating the code for fetching data in each component. Here's an example of a custom hook that fetches data:</p>
                <h2 className='text-3xl mb-5 mt-5'>What is useRef?</h2>
                <p>useRef is a hook that returns a mutable ref object. The ref object can be used to access a DOM element or a value that persists across component renders without triggering a re-render. The useRef hook takes an initial value as an argument and returns a ref object with a current property that points to the current value of the ref. You can update the value of the ref using the current property, and the component will not re-render. Here's an example of using useRef to access a DOM element:</p>
                <h2 className='text-3xl mb-5 mt-5'>What is useMemo?</h2>
                <p>useMemo is a react build in hook. it returns a memoized value. useMemo hook can be used to keep expensive, resource intensive functions from needlessly running. it use when should only use useMemo when you have expensive computations that need to be memoized. when useMemo use need two things calculation function. list of dependencies. </p>
                <p>calculation function value use when want to cach. it should be pure, should take no arguments, and should return a value of any type.</p>
                <p>dependencies list reactive values referenced inside of he calculate value code. reactive values include props, state, and all the variables and functions declared directly inside your component body.</p>
            </div>
        </div>
    );
};

export default Blog;