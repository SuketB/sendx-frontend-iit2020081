<h3 align="center">sendx-frontend-iit2020081</h3>
<p align="center">Visit <a href="https://imaginative-entremet-765ae3.netlify.app/">Here.</a></p>
<p align="center">Video Demo <a href="https://drive.google.com/file/d/1_YzTTRdPkY6FvZuOPX562QLAW4xdAY3D/view">Here.</a></p>



---

## Overview
This is the frontend application developed as the part of the evaluation conducted by Sendx. It allows user to build dynamic HTML templates.  

## Table of Contents

1. [Technologies](#technologies)
2. [Features](#features)
    - [Required Features](#required-features) 
    - [Good To Have](#good-to-have)
    - [Great To Have](#great-to-have)
      

## Technologies

* Frontend framework: VueJs
* Backend: NodeJS, ExpressJs
* Other major plugin/packages: Tailwind, Vuex, Vue email editor

## Features

### Required Features

1. **Navigation Bar**: Implemented
   - Developed an identical navigation bar as provided in the design.

2. **Design And Content Screen**: Implemented
   - Developed a design screen and sample templates to select from and the content screen where user can edit the choosen template.

3. **Screens For User Input**: Implemented
   - Developed behaviour input as well as success screen.

### Good To Have

1. **API Endpoint To Send User Details**: Implemented
   
   - Developed a simple server in NodeJS using ExpressJS and exposed an POST API route (/api/configuration) to recieve user details.
   - Integrated vuex to store all the generated html, behavioural and sucess input and send it to the exposed API

### Great To Have 

1. **Integrate Vue Email Editor**: Implemented 
   - Integrated vue-email-editor in the content screen and provided one actual HTML template to edit in the design screen.
   - Allows user to easily edit the HTML template and export the final HTML and ultimately send it over the exposed API.




<h4 align="center">Made with ❤️ By Suket Bhola</h4> 
