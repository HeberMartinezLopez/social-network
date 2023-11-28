# Social Media API

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

This API was made to allow users can share their thoughts, react to friends’ thoughts, and create a friend list.
The API was built using Express.js for routing, a MongoDB database, and the Mongoose ODM.
By creating this API, I have a starting point to create a social network app database.

## Table of Contents (Optional)

[Installation](#installation)

[Usage](#usage)

[License](#license)

## Installation

1. Run `npm install` in terminal to install dependencies.

## Usage

To use this app:

1. Run `npm start` in terminal to begin app.
2. Open Insomnia API Client app.

Users:

1. List of all users, create a GET request and enter `http://localhost:3001/api/users`
2. One single user, create a GET request and enter `http://localhost:3001/api/users/<userId>`
3. Create a new user, create a POST request and enter `http://localhost:3001/api/users`
   1. Select body JSON
   2. Enter curly brackets `{}`
   3. In curly brackets, enter `"username": "<enter username here>", "email": "enter email here","thoughts": [], "friends": []`
4. Update a user, create a PUT request and enter `http://localhost:3001/api/users/<userId>`
   1. Select body JSON
   2. Enter curly brackets `{}`
   3. In curly brackets, enter `"username": "<update username here>", "email": "update email here","thoughts": [], "friends": []`
5. Delete a user, create a DELETE request and enter `http://localhost:3001/api/users/<userId>`

Friends:

1. Add new friend, create a POST request and enter `http://localhost:3001/api/users/<userId>/friends/<friendId>`
2. Remove friend, create a DELETE request and enter `http://localhost:3001/api/users/<userId>/friends/<friendId>`

Thoughts:

1. List of all thoughts, create a GET request and enter `http://localhost:3001/api/thoughts`
2. One single thought, create a GET request and enter `http://localhost:3001/api/thoughts/<thoughtId>`
3. Create a new thought, create a POST and enter `http://localhost:3001/api/thoughts`
   1. Select body JSON
   2. Enter curly brackets `{}`
   3. In curly brackets, enter `"thoughtText": "<some text>", "username": "<username>"`
4. Update a thought, create a PUT request and enter `http://localhost:3001/api/thoughts<thoughtId>`
   1. Select body JSON
   2. Enter curly brackets `{}`
   3. In curly brackets, enter `"thoughtText": "<some text>", "username": "<username>"`
5. Delete a thought, create a DELETE request and enter `http://localhost:3001/api/thoughts<thoughtId>`

Reactions:

1. Add reaction, create a POST request and enter `http://localhost:3001/api/thoughts/<userId>/reactions`
2. Remove reaction, create a DELETE request and enter `http://localhost:3001/api/thoughts/<userId>/reactions/<reactionId>`

Linked below is a video walkthrough on how to use the app:

[https://drive.google.com/file/d/1fYVZZMbfldff8fCy75cB7614Au5qRwLB/view?usp=sharing](https://drive.google.com/file/d/1fYVZZMbfldff8fCy75cB7614Au5qRwLB/view?usp=sharing)

## License

Please refer to the LICENSE in the repo.