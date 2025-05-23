# Dev-George

## Authorship & Attribution

**Author:** Laura Lemoine  
**Date:** 2025-04-28  

**Code Sources:** 
- BootstrapExamples - [Bootstrap 5 Login Modal](https://bootstrapexamples.com/@anonymous/bootstrap-5-login-modal)
- Dr. Cumbies JSON Instructions - [Jubilant Garbanzo Easy Read](https://github.com/barrycumbie/jubilant-garbanzo-easy-read)


## User Story

**As a** cis and data analytics student who is very passioante about my faith,  
**I want** an journal app,  
**So that** I can keep track of my Bible readings.

---

## Narrative

This app is an assignment for my college web development class. The aim is to take our first project and improve upon the design and functionality in order to showcase what we have learned and prepare for our projects course.

---
## Development Story
Starting with the basics of HTML, CSS, and Javascript, I was able to build my first webpage, albeit a very simple and rudamentry one. It started out on Codepen.io, with a lot of just clicking and seeing what every action did. Now, at the end of the course, I am further expanding upon my webpage and adding a bit of functionality using more advanced skills. I have graduated from Codepen.io to Visual Studio Code for my work, and I am now able to deploy my app using GitHub.

## Screenshot of Original App
![image](https://github.com/user-attachments/assets/fe8a1dd9-d601-41a5-a01a-5258da985a85)
```javascript
$(document).ready(function () {
  $("#saveReadingData").on("click", function () {
    let statusText = underConstruction("not ready");
    $("#saveReadingData").text(statusText).prop("disabled", true);
  });
  //function to pass a status (ready or not ready) and get back a message for user
  //rn, not ready
  function underConstruction(status) {
    return "not yet ready";
  }
});
```
The code above is for a button that was intended to save any new reading logs, however, it was not yet functional so when clicked it would display "not ready" back to the user.
## Screenshot of Inspiration App
![image](https://github.com/user-attachments/assets/7cc5df5e-b4ff-4e62-ab57-86be19b8aabe)
I really love how YouVersion has it's plans laid out. Above is a screenshot of their plan tracking design via browser, but it is honeslty a lot more user friendly on the app. I would love if my Bible app was able to implement their tracking design.

## Code Snippet of Inspiration App

```html
<a class="text-white bg-yv-red border-standard rounded-full inline-flex items-center w-full justify-center no-underline p-0.5 md:pli-2 md:plb-1.5 text-16 md:text-23 h-8" aria-label="Go to page 1" href="/users/LauraLemoine870/reading-plans/22465-bibleproject-the-crucified-king/subscription/1164369617/day/1">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.712 12.484a1.002 1.002 0 0 1 1.417-.001l2.648 2.654a.25.25 0 0 0 .353 0l6.895-6.894a1 1 0 0 1 1.414 1.414l-7.782 7.781a1 1 0 0 1-1.414 0L6.71 13.9a1.002 1.002 0 0 1 .002-1.416Z" fill="currentColor"></path>
  </svg>
</a>
```
The code above is an HTML code snippet from a YouVersion plan. This code creates a clickable button used to choose which day of the plan you want to see. It is then styled using CSS. Additionally the button contains an SVG icon, which appears inside the button as a check mark.
## Future App Ideas
[Link to future app ideas](https://github.com/llemoine1230/dev-george/issues/1)

