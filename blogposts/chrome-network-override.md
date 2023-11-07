---
title: "Override headers and responses in Chrome DevTools"
subtitle: "How to override headers and responses inside Chrome DevTools"
date: "November 06, 2023"
---

## Introduction

Google Chrome's DevTools is an indispensable tool for web developers, offering a wide range of features to assist in debugging and optimizing web applications. One particularly powerful feature is the Overrides panel, which enables developers to override HTTP headers and even modify response content. In this blog post, we'll explore how to leverage the Chrome DevTools Overrides to manipulate headers and responses, making it an essential tool for testing, debugging, and optimizing web applications.

Why Use Overrides?
Before we dive into the specifics of Chrome DevTools Overrides, it's important to understand why you might want to use this feature:

Testing Different Scenarios: Overrides are particularly useful when you need to test how your web application behaves under various network conditions or when dealing with different types of server responses.

Front-end Development: Front-end developers can use Overrides to mock or manipulate responses, allowing them to work on different parts of the application without having to rely on the backend.

Optimization: By manipulating responses, you can experiment with different optimizations for your website, such as minification, compression, or image resizing, to find the best performance improvements.

## Accessing Chrome DevTools Overrides
To access the Overrides panel in Chrome DevTools, follow these steps:

Open Chrome and navigate to the webpage you want to work with.

Open Chrome DevTools by pressing F12 or by selecting "Inspect" from the context menu.

In DevTools, navigate to the "Sources" tab.

On the left sidebar, you'll find an "Overrides" section. Click on it to open the Overrides panel.

Now that you have access to the Overrides panel, let's explore how you can manipulate headers and responses.

## Overriding Headers
### Use Case 1: Modifying User-Agent
In the Overrides panel, ensure that "Enable Local Overrides" is enabled.

Choose a folder where you want to save your local overrides.

Click "Save" to create an empty folder for your overrides.

Inside the folder, create an HTML file that represents the page you want to test.

To modify HTTP headers within the <head> section of your HTML file, including the User-Agent string, which can be useful for testing how your website responds to different browsers or devices, follow these steps:

Right-click on the HTML file and select "Edit as HTML."

In the HTML editor, you can add or modify the necessary HTTP headers.

### Use Case 2: Modifying Request Headers
Open the Network panel in DevTools.

Find a network request and override request headers by following these steps:

Right-click on the network request.

Select "Override Headers" to customize the request headers as needed.

## Modifying Responses
### Use Case 1: Modifying HTML Content
In the Overrides panel, create a new folder as before.

Inside the folder, create an HTML file representing the page you want to modify.

To edit the HTML content, follow these steps:

Right-click on the HTML file and select "Override Content."

You can now edit the HTML content to make changes to the webpage. This is useful for experimenting with design changes or testing different text variations.

### Use Case 2: Modifying JSON or JavaScript Responses
To modify JSON or JavaScript responses, capture a network request's response as a HAR file as mentioned earlier.

Inside the HAR file, locate the response content that you want to modify. It may be a JSON object or JavaScript code.

Make the desired changes and save the HAR file.

Import the modified HAR file back into the Overrides panel.

## How to Remove Overrides in Chrome DevTools
Once you've utilized Chrome DevTools Overrides to manipulate headers and responses, you might also want to remove these overrides at some point. Here's how you can do that:

Removing Overrides in the Overrides Panel
Open Chrome DevTools and navigate to the "Overrides" panel as previously explained.

In the Overrides panel, you'll see a list of your saved override folders.

To remove an override, simply right-click on the folder you want to delete.

Select "Delete" from the context menu.

Confirm the deletion when prompted.

This will remove the override folder and revert your webpage to its original state without any header or response modifications.

## Disabling Overrides in the Network Panel
In the Network panel, you might have imported a HAR file to create overrides. To remove these overrides, follow these steps:

Open the Network panel in DevTools.

Locate the network request with the applied HAR overrides.

Right-click on the request and select "Clear browser cache."

This action will clear any overrides applied to that specific request. If you have multiple overrides, you will need to repeat this process for each affected request.

## Resetting Local Overrides
If you've used the "Edit as HTML" feature to modify content or headers, you can reset them to their original state:

In the Overrides panel, locate the HTML file you've been editing.

Right-click on the file and select "Revert to the original."

This will remove any changes you've made to that specific HTML file, effectively resetting it to its original state.

## Final Thoughts

Chrome DevTools Overrides is a powerful tool for web developers, allowing them to manipulate headers and responses for testing and debugging purposes. Whether you're simulating different network conditions, optimizing your website, or working on front-end development, Overrides can significantly streamline your workflow and help you find and fix issues more efficiently. Remember to use this feature responsibly, as it's intended for development and testing, not for malicious purposes. Happy coding!