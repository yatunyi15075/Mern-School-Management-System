# MERN Stack School Management System

![YouTube Thumbnail](https://github.com/yatunyi15075/Mern-School-Management-System/blob/master/frontend/src/assets/YouTube_Thumbnail.png)

This is a School Management System built using the MERN (MongoDB, Express.js, React, Node.js) stack. The frontend is developed with React and Vite, with styling done using styled-components.

## Features

- **Admin Dashboard:** Administrators can manage student records, teacher information, courses, exams, assignments, track student attendance, add teachers, and view school performance metrics.
- **Student Dashboard:** Students have access to their own dashboard where they can view their class schedules, assignments, submit assignments, and track their academic progress.
- **Teachers Dashboard:** Teachers can manage class schedules, assign and grade exams and assignments, and view student performance metrics.

### Operations Include:
- **Adding Students:** Admins can add new student records, including personal details and academic information.
- **Class Management:** Admins can create and manage classes, assign teachers, and schedule classes.
- **Exam Management:** Teachers can create and manage exams, assign them to classes, and grade student submissions.
- **Assignment Management:** Teachers can create assignments, assign them to classes, and track student submissions.
- **Student Submission:** Students can submit assignments through the student dashboard.
- **Adding Teachers:** Admins can add new teachers to the system.
- **School Performance Metrics:** Admins can view various metrics related to the school's performance.

## Technologies Used

- **Frontend:** React, Vite, styled-components
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Deployment:** Not deployed yet

## Setup Instructions

1. **Clone the repository:**

git clone https://github.com/yatunyi15075/mern-school-management-system.git


2. **Install dependencies:**

cd mern-school-management-system
npm install


3. **Set up environment variables:**

- Create a `.env` file in the root directory.
- Define the following environment variables:

  ```
  PORT=4000
  MONGODB_URI=your_mongodb_connection_string
  SECRET_KEY=your_secret_key_for_jwt
  ```

4. **Run the development servers:**

- Start the frontend server:

  ```
  npm run dev
  ```

- Start the backend server:

  ```
  npm start
  ```

5. **Access the application:**

Open your browser and navigate to `http://localhost:5173` for the frontend and `http://localhost:4000` for the backend.

## Contributing

Contributions are welcome! Feel free to submit pull requests, bug reports, feature requests, or any suggestions to improve this project.

## License

This project is licensed under the [MIT License](LICENSE).
