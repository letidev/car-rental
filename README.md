## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run start-server`

Starts the JSON server.

## Overview of the project

This project implements car rental business logic.

### Functionality

As entities there are `users`, `cars` and `rents`. The users have two roles - admin and user and each can access different pages and do different things in the system. There are role guards that restrict the pages that can be accessed by the user, the admin and unauthenticated in people.

### Users

Users car register with email and password. There is a constraint for unique emails. Once
a user has registered, they can browse all of the cars in the company. They can browse their past rents and make a new car rental.

The users can edit their profile details and change their password.

### Cars

Cars can only be created and edited from the admin account. Each car has some basic information and a photo (currently it's a random photo from [picsum.photos](https://picsum.photos)).

### Rents

Rents can only be created by users. A user must pick a `Rent From` and `Rent To` dates. When they pick a car, the ongoing and future rents of that car are displayed to the user. They are not allowed to pick dates that interfere with already taken dates.

There is also business logic for discounts:

- if a car is rented from 3 or more days - 5% discount
- if a car is rented from 5 or more days - 7% discount
- if a car is rented from 10 or more days - 10% discount
- if the user has made at least 3 rents in the past 60 days, they are designated as a VIP customer and get a 15% discount

### The admin

The admin can create and edit cars. They can also "delete" them and they are no longer aligible for rent but their details show up in past rents.

The admin can edit users but only their name and email. The admin can also mark a user as inactive. When that is done, if the said user is currently logged in, upon next page change, they are logged out and redirected to the login page. This is achieved with a custom hook that verifies from the DB the status of the user.
