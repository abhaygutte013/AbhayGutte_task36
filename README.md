# Schema Reference Assignment
## About

This project is made using Express.js, MongoDB and React.

In this project I learned how to connect two mongoose schemas using reference.

There are two schemas.

* User
* Post

One user can have many posts. The post stores the user id and then populate is used to show user details.

## Features

* Add new user
* Add new post
* Store data in MongoDB
* Get all posts
* Show user name and email with every post
* React frontend for adding and viewing data

## Technologies Used

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* Dotenv

### Frontend

* React
* Vite
* Axios

## Folder Structure

backend

* models
* routes
* server.js

frontend

* components
* App.jsx
* api.js

## Installation

Clone the project.

Go to backend folder:npm install

Create a `.env` file and add your MongoDB connection string.

MONGO_URI=your_mongodb_connection_string
PORT=5000

Run backend:npm run dev

Now open another terminal.

Go to frontend folder:npm install

Run frontend:npm run dev

## API Routes

### Add User

POST:/users

### Add Post

POST:/posts

### Get All Posts

GET:/posts

## What I Learned

* MongoDB connection using mongoose
* Creating schemas
* Schema reference using ObjectId
* Using populate()
* Express routes
* React forms
* Sending requests using axios

## Outputm
First add a user.
Then copy the user id.
Create a post using that user id.
Finally all posts are shown with user name and email.

