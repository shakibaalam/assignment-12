import React from 'react';

const Blog = () => {
    return (
        <div className='lg:mx-20 p-5'>
            <div className='my-5'>
                <h2 className='text-2xl font-bold text-blue-900 mb-4'>1. How will you improve the performance of a React Application?</h2>
                <p>Website performance should be fast for user .There are five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:

                    <li> Keeping component state local where necessary</li>
                    <li>Memoizing React components to prevent unnecessary re-renders</li>
                    <li>Code-splitting in React using dynamic import()</li>
                    <li>Windowing or list virtualization in React</li>
                    <li>Lazy loading images in React</li></p>
            </div>
            <div className='my-5'>
                <h2 className='text-2xl font-bold text-blue-900 mb-4'>2. What are the different ways to manage a state in a React application?</h2>
                <p>There are four different ways to manage a state in a React application.These are:
                    <li>Local (UI) state – Local state is data we manage in one or another component.</li>
                    <li>Global (UI) state – Global state is data we manage across multiple components.</li>
                    <li>Server state – Data that comes from an external server that must be integrated with our UI state.</li>
                    <li>URL state – Data that exists on our URLs, including the pathname and query parameters.</li>
                </p>
            </div>
            <div className='my-5'>
                <h2 className='text-2xl font-bold text-blue-900 mb-4'>3. How does prototypical inheritance work?</h2>
                <p>Prototype Inheritance is a feature of JavaScript that is used to add methods and features to objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, to get and set an [[prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set up using _proto_.</p>
            </div>
            <div className='my-5'>
                <h2 className='text-2xl font-bold text-blue-900 mb-4'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p>if we update the hook value like this: product = [...]; then it will show us an error because we declare/ destructuring the hook as constant (const); but if we use it as let then it will run or set its value. there is an issue. if we don't use setProducts to update the state then the component will not re-render. setProducts is done the asynchronous task. then it will merge the new value and replace the old value then re-render that component</p>
            </div>
            <div className='my-5'>
                <h2 className='text-2xl font-bold text-blue-900 mb-4'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>In order to discover a product by its name in an array, we will use array.find(). To get a truthy value, the callback function is called once for each index in the array. If so, find returns the element's value instantly. Unless this is the case, find returns an error. For every index in the array, callback function  is called, not only those that have been given values. If you use the callback function offered by find, you may change the array that it is called on. Before the initial callback function  activation, the items found by find are pre-set. Using Javascript's arr.find() function, you may obtain the value of the first member in an array that meets your criteria. If any of the array's items meet the criterion, the first one to meet it will print. Empty array items are not supported by this method, and it does not alter the original one.</p>
            </div>
            <div className='my-5'>
                <h2 className='text-2xl font-bold text-blue-900 mb-4'>6. What is a unit test? Why should write unit tests?</h2>
                <p>
                    Using JavaScript Unit Testing, a web page or web application module may be tested using JavaScript code. After that, it's included into the HTML as an inline event handler and tested in the browser to ensure that all of the needed features are available. These unit tests are then grouped together in a test suite for easy access. Unit testing in JavaScript is made easier by a variety of frameworks. The Unit.js library, for example, is a Javascript assertion library that runs on Node.js and the browser. For React and React Native web apps, Jest is a JavaScript-based open-source testing framework. With the Jest framework, this complexity may be greatly minimized. If you're using Mocha, Jasmine, Karma or protractor (a testing framework for Angular projects), you'll be able to use it with any of these frameworks. Node.js and browser-based test framework Mocha. Serial test execution in this framework simplifies asynchronous testing.
                </p>
            </div>
        </div>
    );
};

export default Blog;