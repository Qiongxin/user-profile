Here is the instructions on how to run the app locally on VS code:

1. Download code from https://github.com/Qiongxin/user-profile

2. Open file on VS code and inside terminal, run:

    ### `npm i`

3.  Inside the terminal window, in the project directory, you can run:

    ### `npm start`

    Runs the app in the development mode.
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


4.  Open a new terminal window, cd to src directory and run:

    ### `nodemon server.js`

    if nodemon is not installed, run:

    ### `node server.js`

    Open [http://localhost:3001](http://localhost:3001) to view data fetched from mongodb in your browser.


User Management App instructions:

1. Press "Click me to get user profiles" button and enter user profile section (It can be changed to login page).
2. Press add user button and add with new user's name, age and email address, you can also cancel it.
3. Press edit button to edit name, age or email address of the user, it has cancellation option.
4. Press delete button on the user you want to delete.