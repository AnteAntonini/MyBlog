---
title: "Why does useEffect run two times?"
subtitle: "What is Strict Mode and how to remove it"
date: "August 22, 2023"
---

## Introduction

React's Strict Mode is a powerful tool for identifying and addressing potential problems in your application during **development**. Among its effects is the alteration of the behavior of certain React features, including useEffect. In this blog, we will delve into how Strict Mode influences the invocation of useEffect and how it can resolve the issue of unintended double execution.

## Understanding React Strict Mode

React Strict Mode is an optional feature that is intended for **development** environments. When enabled, it helps to highlight potential problems in your application by performing additional checks and warnings. These checks can uncover issues such as unsafe side effects, incorrect use of deprecated methods, and accidental state mutations.

In a standard React application, you might encounter situations where the useEffect hook appears to be invoked twice. This behavior, as mentioned earlier, can be attributed to various factors such as missing dependency arrays or changing references in dependencies. However, React's Strict Mode can modify this behavior.

## How Strict Mode Affects useEffect

React's Strict Mode intentionally "double-invokes" certain functions to help developers identify side effects and potential problems. This double invocation includes componentDidMount, componentDidUpdate, and, importantly, the functions within useEffect. Strict Mode performs this double invocation to highlight side effects that might have different outcomes between renders.

When Strict Mode is enabled, the double invocation of useEffect is not indicative of a problem in your code. Instead, it's a deliberate feature aimed at helping you identify potential issues and ensure that your code behaves consistently.

To clarify, Strict Mode is not causing the double invocation in the traditional sense; rather, it exposes the existing behavior by making it more visible during development. Once you understand this aspect of Strict Mode, you can be confident that your application's behavior in a production environment will not exhibit the same double invocation.

## How to disable React Strict Mode

In Vite, go to `src/main.jsx` and remove the <React.StrictMode> wrapper component from:

```js
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

to:

```js
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

In create-react-app you can go in your index.js file and remove the StrictMode higher order component, from:

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

to:

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
```

## Conclusion

React's Strict Mode is a valuable tool for catching potential problems and enforcing best practices during development. It alters the behavior of certain React features, including the useEffect hook, by intentionally invoking them twice to highlight side effects and inconsistencies. Understanding the role of Strict Mode in this scenario allows you to address any concerns related to double invocations of useEffect and ensure the stability and reliability of your application. As you continue to develop with React, embrace Strict Mode as a powerful ally in producing high-quality applications.
