
<img height="900" src="https://i.ibb.co/Mx9Lnkkm/B10A11.png" alt="Marathon Council Screenshot" />

# Marathon Council

Welcome to the Marathon Council website! This project is designed to help users manage and participate in marathons. Below, you'll find information about the technologies used and the key features of the project.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database for storing marathon and user data.
- **JWT (JSON Web Tokens)**: For secure user authentication and authorization.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Router**: For handling routing in the React application.
- **React Helmet**: For managing changes to the document head, including dynamic titles.
- **react-countdown-circle-timer**: For displaying countdown timers.

## Key Features

1. **User Authentication and Authorization**: Secure user login and registration using JWT for authentication and authorization.
2. **Marathon Management**: Users can create, update, and delete marathons. They can also view a list of all marathons they have created.
3. **Countdown Timer**: Display a countdown timer on the marathon details page, showing the days, hours, and minutes left until the marathon starts.
4. **Dynamic Titles**: The website title changes dynamically based on the current route using React Helmet.
5. **Sorting and Searching**: Users can sort marathons based on the created date and search for marathons by title.

## How to Run the Project Locally

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/marathon-council.git
   cd marathon-council
   ```

2. **Install Dependencies**:
   Navigate to both the frontend and backend directories and install the required dependencies.
   
   Frontend:
   ```bash
   cd frontend
   npm install
   ```

   Backend:
   ```bash
   cd backend
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the `backend` directory and add the following environment variables:
   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Backend Server**:
   ```bash
   cd backend
   npm start
   ```

   The backend server will start running on `http://localhost:5000`.

5. **Run the Frontend Server**:
   Open a new terminal window and navigate to the `frontend` directory:
   ```bash
   cd frontend
   npm start
   ```

   The frontend server will start running on `http://localhost:3000`.

6. **Access the Application**:
   Open your web browser and go to `http://localhost:3000` to see the application in action.
