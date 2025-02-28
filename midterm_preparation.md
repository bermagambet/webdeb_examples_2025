# Midterm, the 1st of March

# Lectures are very important, check them out in our Teams!

# GitHub repos of other lecturers:

# Bobur agai: https://github.com/bobur554396/WD2025

# Aibek agai: https://github.com/Aibek21/WD2025

# Useful links:

https://roadmap.sh/
https://www.w3schools.com/html/
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://github.com/airbnb/css
https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/README.md
https://eloquentjavascript.net/
https://angular.dev/

# My recommendations, with TIMECODES:

40 minutes of HTML if you know nothing:
https://youtu.be/qz0aGYrrlhU?si=zVughUeBJv5XwhG-&t=1134

30 minutes of JS if you know nothing:
https://youtu.be/W6NZfCO5SIk?si=ZQ__bFUnnZx7dU5x&t=983

90 minutes of TS and Angular: (a lot of Angular, I know)
https://youtu.be/k5E2AVpwsko?si=32IdzGUiACWvz3P7&t=1957

Your midterm won't go beyond your lectures and practice lessons. If you completed all the labs by yourself - great! If you read all our lectures and understood them, also great! You will be able to pass this Midterm easily.

Each and every lab takes 1-1.5 hours to complete, so you have enough time to prepare for Midterm EVEN if you submitted 0 lab works.

# Thus, revise all the lab works you had during your course: labs 1 - 5.

# Lab 1 - the easiest one, guided tutorial.

Consists of various CSS/HTML stuff: attributes, tags and selectors.
Midterm will probably have questions regarding these stuff, so at least take a look.

1. https://www.khanacademy.org/computing/computer-programming/html-css - from “Intro to HTML”, to “More CSS Selectors”
2. https://www.w3schools.com/html/default.asp - from “HTML Home”, to “HTML Id”
3. https://www.udacity.com/course/intro-to-html-and-css--ud001 - all Lessons from 1 to 4

# Lab 2 - many of you used project made by other people, either from github or chatpgt. At least try to understand the code you have stolen

I doubt stuff from this lab will go into your Midterm, but existence of this lab is another reason to learn all the HTML/CSS stuff from Lab 1.

1. Create a login page for Facebook using html/html5 and css/css3.
2. Create a login page for Instagram using html/html5 and css/css3.
3. Create a Microsoft homepage (blocks on the following screen) using html/html5 and css/css3.

# Lab 3 - first JS one

This one goes deep into JS. Let's analyze what skillset is required to complete this particular lab:

First of all, it has DOM manipulations, so revise methods of DOM/HTML elements, like remove(), appendChild(), addEventListener(), getElementById() etc.

Then, you have to know how to connect JS and CSS code to your HTML. Revise in-line styling, adding styles/scripts in your _head_ tag, adding separate CSS/JS files.

In summary, I would recommend to sit and complete this lab again, from scratch. If you know how to do it - that's a very good indicator you will be able to get some points.

1. https://javascript.info/ - till section Data Types, inclusively (not 2.5 points, but section/раздел Data Types). Collect all the solutions in one folder and push it to your git repo

2. Create a simple to-do list app with all working actions.

2.1 Adding new item

2.2 Marking as “done” (checkbox)

2.3 Deleting item

# Lab 4 - Angular

Now it becomes a little bit harder.

First of all (!!!!!), COMPLETE THE TUTORIAL! You should know all the CLI commands: how to create a project, add a component/service, start a dev server.

Then, I know a lot of you got your projects from ChatGPT/opensource, so, I'd recommend to try make this lab from scratch. Without styling it takes an hour or two to implement all the features, we did it together during lecture.

In general, you should know how to: import components/modules, use directives (ngIf/ngFor), how to assign functions to event handlers, how to assign variables to @Input() properties, etc.

My advice: try to make ToDo List using Angular, it will be enough.

1. Complete the project from the tutorial: https://angular.dev/tutorials

2. Create a new Angular project

2.1. Implement the component “Products”, which shows the list of products.

2.2 Each product must have the following properties: image, name, description, rating.

2.3 Each product should be linked to a real item from kaspi.kz. Must be at least 10 products.

2.4 Buttons “Share” for each product, by clicking, the user should be redirected to Whatsapp or Telegram with the link to the product

2.5 Optional: Add product image gallery, minimum 3 images.

# Lab 5 - Angular 2

Again, we did something similar on our lecture. Revise ROUTING, @Input/@Output decorators, EventEmitters.

Do you know how to get a parameters from URL? If your answer is no, go to my github and check the implementation there.

REVISE services: how to create them, how use them, how to import HTTPCLIENT into them!!! Observables, you have to know how to use them, how to get the data from them!

Again, a quick and easy task for you - ToDo List using Angular. Make every task removable, and add a button to navigate to ToDo item's page using routes.

1. Continue your project.

1.1 You will have such a hierarchy: category => product_items

1.2 Create 4 categories where each of which has 5 products

1.3 Create 3 components: App, ProductList, ProductItem

1.4 The app component must show a list of categories. When any category is selected, products of this category should be rendered. To show this list, you have to use ProductList and ProductItem components.

1.5 ProductItem objects must be removable. Will have an extra one more field - likes, when clicking the “Like” button, the number of likes should be increased
