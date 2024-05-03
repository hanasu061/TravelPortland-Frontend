# Portland Travel Guide

In this project, we developed a web application to help travelers discover things to see and do in Portland, Maine.

## Iteration 3 - Final Version

Iteration 3 contains a complete version of this project. 

### Team Members and Contributions
1. Xichen Liu - ensure that our database is running properly on MongoDB Atlas and the deployed backend application on Google Gloud App Engine is the latest version
2. Sihan Bai - update components on the specific attraction/restaurant page (PUT/DELETE methods and change the layout) and modify the layout and style of the Homepage
3. Qian Yin - modify components on VISIT/EAT page (search/sort element and page navigation button) and change the style of navigation bar (Login/Logout component)

### Demo
#### Frontend
The client side implements everything users see and interact with. The Homepage gives a short introduction to Portland, ME. The VISIT/EAT page contain a list of attractions/restaurants. Users can click on LEARN MORE to check the detail of a attraction/restaurant. The ADVISING page allows users to submit a sugguestion form. 
- HOME: Users could see the lighthouse of Portland and use slide to see the introduction about Portland.
    - Overflow: the slider to read the introduction
- VISIT/EAT: Users can explore a list of attractions/restaurants and search/sort items based on their needs.
- A specific attraction/restaurant: Users could click arrows to slide more pictures of specific attraction and restaurant. 
  After logging in, they can also add, edit and delete reviews.
    - CardGroup: to manage the cards together 
    - Button: to add, edit or delete the review
    - Col & Row: easier to manage many elements 

- ADVISING: Users can submit a form if they have any sugguested location(attraction/restaurant).
    - install the react-toastify package to validate users' input
    - install the emailjs to receive a form
- Footer Contact Us: Users can find our contact information.
    - install react-social-icons to show the social network's icon
<table>
  <tr>
    <td>HOME - Homepage</td>
    <td>Thank you message after successfully submitting a advising form</td>
  </tr>
  <tr>
    <td><img src="/public/images/home3.png"></td>
    <td><img src="/public/images/message3.png"></td>
  </tr>
  <tr>
    <td>VISIT - Attraction list</td>
    <td>A specific attraction</td>
  </tr>
  <tr>
    <td><img src="/public/images/visits4.png"></td>
    <td><img src="/public/images/attraction2.png"></td>
  </tr>
  <tr>
    <td>EAT - Restaurant list</td>
    <td>A specific restaurant</td>
  </tr>
  <tr>
    <td><img src="/public/images/eats4.png"></td>
    <td><img src="/public/images/restaurant2.png"></td>
  </tr>
    <tr>
    <td>Add Review</td>
    <td>Detail page after adding review</td>
  </tr>
  <tr>
    <td><img src="/public/images/addreview2.png"></td>
    <td><img src="/public/images/afteraddreview2.png"></td>
  </tr>
  <tr>
    <td>ADVISING - Advising form</td>
    <td>Form input validation</td>
  </tr>
  <tr>
    <td><img src="/public/images/advising3.png"></td>
    <td><img src="/public/images/error2.png"></td>
  </tr>
  <tr>
    <td>Email received after submission</td>
    <td>Page navigation exception handling</td>
  </tr>
  <tr>
    <td><img src="/public/images/email.png"></td>
    <td><img src="/public/images/pagenavexception.png"></td>
  </tr>
  <tr>
    <td>Logout confirm</td>
    <td>VISIT search exception handling</td>
  </tr>
  <tr>
    <td><img src="/public/images/logoutconfirm.png"></td>
    <td><img src="/public/images/listexception.png"></td>
  </tr>
 </table>

#### Backend
In the server side, the database on MongoDB Atlas uses three collections (restaurants, attraction, and reviews) to store data separately. Also, the server side implements GET, POST, PUT, and DELETE methods for retrieving resources from the server or sending data to the server. 
- Database on MongoDB Atlas
    - visits collection: attraction information (id, name, address, description, posters, and website link) and other important data (page, entries/page, and total results)
    - eats collection: restaurant information (id, name, address, description, poster, and website link) and other important data (page, entries/page, and total results)
    - reviews collection: user review information (id, user name, user id, date, score, review text, facility_id)
- Backend code for three collections
    - GET methods: retrieve data from the server
    - POST methods: store new review data to the database
    - PUT methods: update review data in the database
    - DELETE methods: delete review data in the database
<table>
  <tr>
    <td>Attraction data</td>
     <td>Restaurant data</td>
  </tr>
  <tr>
    <td><img src="/public/images/visitsdata2.png"></td>
    <td><img src="/public/images/eatsdata2.png"></td>
  </tr>
  <tr>
  <td>Attraction Review data</td>
     <td>Restaurant Review data</td>
  </tr>
  <tr>
    <td><img src="/public/images/visitreview.png"></td>
    <td><img src="/public/images/eatreview.png"></td>
  </tr>
  <tr>
  <td>Attraction Review data update after changing review text</td>
     <td>Restaurant Review data update after changing review text</td>
  </tr>
  <tr>
    <td><img src="/public/images/visitsdata3.png"></td>
    <td><img src=""></td>
  </tr>
 </table>

### Note

---

## Iteration 2

### Team Members and Contributions
1. Xichen Liu - add more posters to the database and update the review component by adding user ratings in the backend code
2. Sihan Bai - modify the home page, add arrow to slide posters and blocks besides arrow and add reviews and rating in the detail page
3. Qian Yin - update the logo in navigation bar, the card layout, the page navigation button, and contact links in the frontend

### Progress
#### Frontend
In the client side, the main functionality of our application is complete. 
- HOME page
    - Modify the map and replace the poster to my photo 
- VISIT/EAT detail page
    - Create arrows to slide the posters
    - Add review 
- VISIT/EAT page
    - Add the sorting option - allows users to sort lists alphabetically
    - Update card style (adding title, subtitle, and footer)
    - Modify the page navigation button (avoiding navigating empty pages)
- ADVISING page
    - Update the style of the form and the message
- Contact Us component
    - Change the text button to the icon
<table>
  <tr>
    <td>HOME - Homepage</td>
    <td>Thank you message after successfully submitting a advising form</td>
  </tr>
  <tr>
    <td><img src="/public/images/home2.png"></td>
    <td><img src="/public/images/message2.png"></td>
  </tr>
  <tr>
    <td>VISIT - Attraction list</td>
    <td>A specific attraction</td>
  </tr>
  <tr>
    <td><img src="/public/images/visits2.png"></td>
    <td><img src="/public/images/attraction2.png"></td>
  </tr>
  <tr>
    <td>EAT - Restaurant list</td>
    <td>A specific restaurant</td>
  </tr>
  <tr>
    <td><img src="/public/images/eats2.png"></td>
    <td><img src="/public/images/restaurant2.png"></td>
  </tr>
    <tr>
    <td>Add Review</td>
    <td>Detail page after adding review</td>
  </tr>
  <tr>
    <td><img src="/public/images/addreview.png"></td>
    <td><img src="/public/images/afteraddreview.png"></td>
  </tr>
  <tr>
    <td>ADVISING - Advising form</td>
    <td>Form input validation</td>
  </tr>
  <tr>
    <td><img src="/public/images/advising2.png"></td>
    <td><img src="/public/images/error.png"></td>
  </tr>
 </table>

#### Backend
In the server side, the mongoDB database is modified and the backend code is complete after modifying review requests. 
- eats collection
    - add more posters
- visits collection
    - add more posters
- reviews collection
    - allow users to add reviews and ratings
<table>
  <tr>
    <td>Attraction data</td>
     <td>Restaurant data</td>
  </tr>
  <tr>
    <td><img src="/public/images/visitsdata2.png"></td>
    <td><img src="/public/images/eatsdata2.png"></td>
  </tr>
 </table>

### Issue
#### Frontend
1. Modify the layout and style of VISIT/EAT cards
2. Edit and delete reviews

---

## Iteration 1

### Team Members and Contributions
1. Xichen Liu - built the server side and set up the database with MongoDB Altas
2. Sihan Bai - implemented Home page, the page of a specific attraction, and the page of a specific attraction/restaurant (client side)
3. Qian Yin - implemented attraction list page, restaurant list page, and advising page (client side)

### Progress
#### Frontend
In the client side, the overall structure of the website is complete.
- HOME - gives a short introduction and a map
- VISIT/EAT - provides a list of attractions/restaurants
    - Filter option - allows users to search items by their names
    - Link to specific attractions/restaurants - includes more details and reviews
- ADVISING - allows users to make suggestions about attractions/restaurants
    - Input validation - use one 3rd party library called toastify to give error messages
    - Link to a thank you message after submitting the form
<table>
  <tr>
    <td>HOME - Homepage</td>
    <td>Thank you message after successfully submitting a advising form</td>
  </tr>
  <tr>
    <td><img src="/public/images/home.png"></td>
    <td><img src="/public/images/message.png"></td>
  </tr>
  <tr>
    <td>VISIT - Attraction list</td>
    <td>A specific attraction</td>
  </tr>
  <tr>
    <td><img src="/public/images/visits.png"></td>
    <td><img src="/public/images/visit.png"></td>
  </tr>
  <tr>
    <td>EAT - Restaurant list</td>
    <td>A specific restaurant</td>
  </tr>
  <tr>
    <td><img src="/public/images/eats.png"></td>
    <td><img src="/public/images/eat.png"></td>
  </tr>
  <tr>
    <td>ADVISING - Advising form</td>
    <td>Form input validation</td>
  </tr>
  <tr>
    <td><img src="/public/images/advising.png"></td>
    <td><img src="/public/images/error.png"></td>
  </tr>
 </table>

#### Backend
<table>
  <tr>
    <td>Attraction data</td>
     <td>Restaurant data</td>
  </tr>
  <tr>
    <td><img src="/public/images/visitsdata.png"></td>
    <td><img src="/public/images/eatsdata.png"></td>
  </tr>
 </table>

### Issue
#### Frontend
1. Page styles need to be modified.
2. Images need to be updated.
3. AddReview component need to be implemented properly. 
#### Backend
1. Images need to be added into database.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
