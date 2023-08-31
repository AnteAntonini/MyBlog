---
title: "Best way to add fonts to your website"
subtitle: "How to add and optimize web fonts using @font-face and modern formats"
date: "August 31, 2023"
---

In the realm of web design, typography plays a pivotal role in enhancing user experience and setting the tone for your website's visual appeal. With the advancement of technology, integrating custom web fonts into your website has become simpler and more efficient. In this article, we'll explore the different font formats available, discuss how importing fonts relates to performance, and provide you with a concise guide on how to seamlessly add web fonts to your project.

## Understanding Font Formats

When it comes to web fonts, there are several font formats to consider. The most common ones include:

**TTF** (TrueType Font) and **OTF** (OpenType Font): These formats are common in desktop environments, but can also be used on the web. They offer good compatibility but might have larger file sizes compared to WOFF formats.

**WOFF** (Web Open Font Format): This format offers a compressed version of the font, making it efficient for web use. It supports multiple styles and can include metadata, making it a popular choice.

**WOFF2** (Web Open Font Format 2): An improved version of WOFF, WOFF2 provides even better compression, resulting in faster load times. It's widely supported by modern browsers.

## Balancing Font Importing and Performance

Introducing custom web fonts can impact your website's performance, as larger font files may increase loading times. However, the @font-face rule, a CSS at-rule, enables you to import fonts while optimizing performance. By following best practices like font subsetting and utilizing efficient font formats, you can maintain a balance between aesthetics and speed.

## Adding Web Fonts in Three Simple Steps

Now, let's walk through the process of adding a web font to your project using the @font-face rule.

**Step 1: Download the Font** \
Visit a reputable font repository like Google Fonts, Adobe Fonts, or Font Squirrel. Browse through the available fonts and choose the one that aligns with your website's style. Once you've made your selection, download the font files. Typically, these downloads will include various formats such as WOFF, WOFF2, TTF, or OTF.

**Step 2: Add the Font to Your Project** \
Create a folder within your project directory to store your downloaded fonts. Name it something meaningful like "fonts" to keep things organized. Place the downloaded font files within this folder.

**Step 3: Integrate the Font Using @font-face** \
In your project's CSS file, you can now integrate the downloaded font using the **@font-face** rule. This rule informs the browser about the font and its location. Here's an example:

```css
@font-face {
  font-family: "CustomFont";
  src: url("path/filename.woff2") format("woff2"),
       url("path/filename.woff") format("woff");
}

body {
  font-family: "CustomFont", sans-serif;
}
```

In this example, replace 'CustomFont' with a name of your choice and adjust the paths to match the location of your font files.

And that's it! With these three simple steps, you've successfully integrated a custom web font into your project using the **@font-face** rule.

## Optimizing Fonts for Older Browsers

Older versions of Internet Explorer (IE) and other outdated browsers might not fully support **WOFF** and **WOFF2** formats. To cater to these browsers, you can use additional font formats like **EOT** (Embedded OpenType) for IE versions 8 and 9. Here's an example of how to include **EOT** in your **@font-face** rule:

```css
@font-face {
font-family: 'CustomFont';
src: url('fonts/customfont.eot'); /_ EOT format for older IE _/
src: url('fonts/customfont.woff2') format('woff2'),
     url('fonts/customfont.woff') format('woff'),
     url('fonts/customfont.ttf') format('truetype'); 
}
```

By including these formats, you ensure that your custom font is accessible to users across a broader spectrum of browsers.
For more details check [Can I Use](https://caniuse.com/) for browser support

## Alternate Loading Methods

To optimize font loading and enhance performance, you can consider the following techniques:

**Preloading**: Use the <link> element with the preload attribute to hint the browser to fetch the font files early in the loading process, reducing perceived load times.

>⚠ Note: Although preload is quite effective at making fonts discoverable early in the page load process, it depletes browser resources that could otherwise be used to load other resources.


**Font Display**: The font-display property allows you to control how the text is displayed while the custom font is loading. Options like swap, fallback, and optional can help you prioritize speed or aesthetics based on your website's needs.

**Font Subset**: If you're using a font that supports multiple languages or characters, consider creating a subset containing only the characters you'll use on your website. This reduces file size and improves performance.

## Use fewer web fonts
A font that isn't requested in the first place is the quickest to deliver. System fonts and variable fonts are two approaches to reducing the number of web fonts on your site.

A system font is the default font used by a user's device's user interface. System fonts are typically different depending on the operating system and version. The font does not need to be downloaded because it is already installed. System fonts are especially useful for body text.


To use the system font in your CSS, use the **font-family system-ui**:

```css
font-family: system-ui
```

## Conclusion

Web fonts are a powerful tool to enhance your website's design, and with the **@font-face** rule and modern font formats like WOFF and WOFF2, the process has become more efficient and performance-friendly. However, it's crucial to consider compatibility with older browsers to ensure a consistent performance across various platforms.
By following these steps, you can strike the perfect balance between aesthetic appeal and optimal website performance.
