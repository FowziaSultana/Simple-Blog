import React from "react";
import "./BlogQA.css";

const BlogQA = () => {
  return (
    <div
      className="accordion accordion-flush text-start"
      id="accordionFlushExample"
    >
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Differences between Props and state.
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Props and state are both used for managing data in React, but there
            are some key differences between them:
            <ol>
              <li>
                Props are passed down from a parent component to a child
                component, while state is managed within a component itself.
              </li>
              <li>
                Props are read-only and cannot be modified by the child
                component, while state can be changed by the component itself.
              </li>
              <li>
                When a prop is updated, it is updated in the parent component
                and then passed down to the child component. When state is
                updated, it triggers a re-render of the component and any child
                components that depend on that state.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            How does useState work?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            The useState hook in React is used for managing state in functional
            components. It works by allowing developers to declare a state
            variable and a function that updates that variable. When the state
            variable is updated, React will re-render the component and any
            child components that depend on that state. The useState hook also
            returns the current state value, so developers can access and
            manipulate it as needed. Essentially, useState enables developers to
            add state to functional components, which were previously stateless.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Purpose of useEffect other than fetching data.
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            The useEffect hook in React is used for handling side effects such
            as updating the DOM, logging to the console, and setting up event
            listeners. It allows developers to specify what should happen after
            a component renders, such as subscribing to a data source or setting
            up a timer. useEffect can also be used to clean up after a component
            is removed from the DOM, by unsubscribing from a data source or
            clearing a timer. Essentially, useEffect enables developers to
            manage the lifecycle of a component and its associated side effects,
            in a declarative and efficient manner
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            How Does React work?
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            React is a JavaScript library for building user interfaces. It works
            by allowing developers to create UIs using reusable components.
            React creates a virtual representation of the UI called the Virtual
            DOM, which is an in-memory representation of the actual DOM. When a
            user interacts with the UI, React updates the Virtual DOM with the
            changes and compares the new Virtual DOM with the previous version
            to determine the minimal set of changes needed to update the actual
            DOM. React also provides a way to manage data and state using props
            and state, and has powerful lifecycle methods to control the
            behavior of components.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogQA;
