# Lab Assignment 3 - JavaScript Frameworks

## Project Overview
This project is a demonstration of modern JavaScript (ES6) concepts, Node.js, and Express.js. It includes:
- Setting up an Express.js server
- Using Nodemon for development
- Creating and handling JSON data
- Implementing CRUD operations using Express.js

## Folder Structure
```
assign3/
│── data/
│   ├── data.json  # JSON file with at least 6 objects
│── js_file1.js    # Express server with a simple GET method
│── js_file2.js    # Displays JSON content in the browser
│── js_file3.js    # Implements CRUD operations with Express
│── package.json   # Project dependencies and scripts
│── package-lock.json
│── README.md      # Project documentation
```

## Setup Instructions
### 1. Clone the Repository
```sh
git clone https://github.com/RabinDulal/labassignment3.git
cd labassignment3
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Running the Application
#### Start the Server with Nodemon
```sh
npm start
```
Or manually run:
```sh
node js_file1.js
```

### 4. API Endpoints
| Method | Route            | Description                  |
|--------|-----------------|------------------------------|
| GET    | `/`             | Displays group names        |
| GET    | `/data`         | Shows JSON file contents    |
| POST   | `/add`          | Adds a new entry            |
| PUT    | `/update/:id`   | Updates an entry by ID      |
| DELETE | `/delete/:id`   | Deletes an entry by ID      |

## Usage with Postman
To test the POST, PUT, and DELETE requests, use [Postman](https://www.postman.com/) to send requests to the running server.

## Contribution
Feel free to fork this repository and contribute!

## License
This project is for educational purposes only. No official license applies.
