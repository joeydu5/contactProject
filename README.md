1. For running the project, simply npm install & npm start the React code package.

2. Redux was used to manage the states.
   Reading 10 contacts from API, using Redux saga middleware to make a AJAX request, then dispatch the data to the Redux store.
   When adding new contact form information, the click handler will dispatch the states to the redux store and then re-render the contact page.

3. The contact page read the redux store content and then re-order the contacts list alphabetically before rendering to the Card components.

4. The Card component is displaying each contact person's name, it has a click event that will trigger contacts detail page for each person. When triggering the detail page, it sends this person's information object to the detail page component with Props.

5. There are four themes available to choose, click each button will trigger this theme and disable previous theme.

6. Due to the limit time, the Contacts functions such as Delete contacts, Faviorite list, displaying the location with Google Geocoding API haven't been accomplished.
