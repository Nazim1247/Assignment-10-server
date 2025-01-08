# Sports Equipment Online Store - Server Side

## live site URL.

### https://my-assignment-10-7291e.web.app/

## Overview
The server-side application for the "Sports Equipment Online Store" handles backend functionality, including API endpoints, database interactions, and user authentication. This application is built using **Node.js** and provides a robust and scalable backend solution for managing the online store.

## Features
- User authentication and authorization (JWT-based).
- RESTful APIs for managing sports equipment.
- Role-based access for admin and users.
- Secure interaction with a NoSQL database (e.g., MongoDB).
- Error handling and validation for requests.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building the API.
- **MongoDB**: Database for storing data (e.g., sports equipment, users).
- **JWT**: JSON Web Token for secure authentication.
- **Dotenv**: Manage environment variables.
- **Cors**: Enable Cross-Origin Resource Sharing.

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sports-equipment-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   CLIENT_URL=http://localhost:3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. The server will run on `http://localhost:5000`.

## API Endpoints

### Auth Routes
- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Login and get a token.

### Equipment Routes
- **GET** `/api/equipment`: Get all sports equipment.
- **POST** `/api/equipment`: Add new equipment (Admin only).
- **PUT** `/api/equipment/:id`: Update equipment details (Admin only).
- **DELETE** `/api/equipment/:id`: Delete equipment (Admin only).

### User Routes
- **GET** `/api/users/profile`: Get user profile.
- **PUT** `/api/users/profile`: Update user profile.

## Folder Structure
```
server/
├── controllers/    # Logic for handling API requests
├── middleware/     # Middleware (e.g., auth, error handling)
├── models/         # MongoDB schemas and models
├── routes/         # API routes
├── utils/          # Utility functions (e.g., token generation)
├── .env            # Environment variables
├── server.js       # Entry point of the server
└── package.json    # Dependencies and scripts
```

## Scripts
- **`npm start`**: Starts the server.
- **`npm run dev`**: Starts the server in development mode using nodemon.

## Contributing
1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push to the branch.
5. Create a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute or reach out for suggestions and improvements!
