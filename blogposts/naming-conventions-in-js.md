---
title: "Naming conventions in JavaScript"
subtitle: "How to write cleaner code with better naming"
date: "August 24, 2023"
---

## Why follow naming convention?

Choosing meaningful and consistent names for variables, functions and classes in your codebase might seem like a minor concern, but it can make a significant difference in the long run.
Following so increases readability, quality and maintainability.

> “Any fool can write code that a computer can understand. Good programmers write code that humans can understand”— By Martin Fowler

## Esential naming conventions

- Choose descriptive names.

- Be consistent / make meaningful distinctions.

- Use pronounceable and searchable names.

- Replace magic numbers with named constants.

- Add prefix to boolean variables

## Choose descriptive names

Choose names that convey the purpose of the variable or function. It will take some effort to select appropriate names,
but it will end up saving more time on long run.

Think over the following two questions when naming.

- What does it do?
- How it is used?

Example:

let c; // Bad\
This names doesn't reveal anything. What does 'c' do and how it is used? It can be anything.

Try to name it more descriptive:

let counter; // Good\
Name counter reveals the purpose of the variable.

**Try not to name with only one letter, it's not a good practice.**

Only within the for loop, naming with one letter is acceptable, eg. for counter i,j,k letters.

## Be consistent / make meaningful distinctions

Use the same word consistently throughout the codebase.
For example if I have a function for retrieving initial data, we can name it **getInitialData()**, **fetchInitalData()**, **retrieveInitialData** etc.

There is no difference between them, that's why we need to decide which naming we will use throughout the codebase to be consistent.

## Use pronounceable and searchable names

Use names that are easy to search, this will save you a lot of time.
Bad examples are: one letter naming and magic numbers.

Example:

let s; // Bad

let sumOfItems; // Good

Additionally, avoid employing unpronounceable words like this one:

let pgCntHeight; // Bad

Stick to the rule: "If you cannot pronounce it, you should not name it that way".

let pageContentHeight; // Good

**Additional note, try to use longer names if they will be more descriptive, don't be lazy, couple of letters won't hurt you. 😊**

Example:

let getTRD; // Bad

let getTreatmentRegistryDetails; // Good

## Replace magic numbers with named constants

When utilizing constant values, specify them with searchable words, as seen in the example below.
So that other developer can understand better

Example:

if(pageSize < 20) // Bad

What is 20? Why do we compare it with 20?
That's why we need to extract that number to constant variable.

const MAX_PAGE_SIZE = 20;\
if(pageSize < MAX_PAGE_SIZE) // Good

## Add prefix to boolean variables

There is a convention to prefix is/has/can to your boolean variables.
As a result, it is clear that it is a Boolean value.

Example:

let logedIn; // Bad\
let responseValid; // Bad\
let continue; // Bad

Prefix with: is, has, can

let isLogedIn; // Good\
let isResponseValid; // Good\
let canContinue; // Good

## Conclusion

I am a big advocate that good naming can change a lot in development. Good naming can increase the readability of the code and help the developer understand the code more easily.\
**Developers spend most of their time reading their own code, as well as other people's code.**

Therefore, try to name variables, functions, classes using these few rules that I mentioned.

#### Reference

Clean Code book by Robert C Martin
