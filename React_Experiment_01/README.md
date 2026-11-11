# EXPERIMENT 1: UNDERSTANDING REACT FILE STRUCTURE

**Name:** HANIEL REENA D R  
**Register Number:** 2305001008  
**Department:** CSE

## 1. AIM

To create a basic React application using Vite and understand the purpose of important files and folders in the React project structure.

## 2. ALGORITHM

1. Start the program.
2. Open VS Code and create a React project using Vite.
3. Select React as the framework and JavaScript as the variant.
4. Install the required packages and start the development server.
5. Identify important files such as index.html, main.jsx, App.jsx, and App.css.
6. Create a components folder inside src.
7. Create Student.jsx to display student information.
8. Create Course.jsx to display course information.
9. Create Faculty.jsx to display faculty information.
10. Import the Student, Course, and Faculty components into App.jsx.
11. Add CSS styles in App.css to display each section as a separate card.
12. Run the application using npm run dev.
13. Open the localhost URL in the browser and verify the output.
14. Stop the program.

## 3. PROJECT STRUCTURE

```text
Experiment_01/
├── index.html
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── components/
        ├── Student.jsx
        ├── Course.jsx
        └── Faculty.jsx
```

## 4. PROGRAMS

### Program 1: App.jsx

```jsx
import Student from './components/Student'
import Course from './components/Course'
import Faculty from './components/Faculty'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Student Information System</h1>
      <Student />
      <Course />
      <Faculty />
    </div>
  )
}

export default App
```

### Program 2: Student.jsx

**Location:** `src/components/Student.jsx`

```jsx
import '../App.css'

function Student() {
  return (
    <div className="student">
      <h2>Student Details</h2>
      <p>Name: HANIEL REENA D R</p>
      <p>Register Number: 2305001008</p>
      <p>Department: CSE</p>
    </div>
  )
}

export default Student
```

### Program 3: Course.jsx

**Location:** `src/components/Course.jsx`

```jsx
function Course() {
  return (
    <div className="course">
      <h2>Course Details</h2>
      <p>Course: Web Technology</p>
      <p>Semester: V</p>
      <p>Credits: 4</p>
    </div>
  )
}

export default Course
```

### Program 4: Faculty.jsx

**Location:** `src/components/Faculty.jsx`

```jsx
function Faculty() {
  return (
    <div className="faculty">
      <h2>Faculty Details</h2>
      <p>Name: Dr. Kumar</p>
      <p>Department: CSE</p>
      <p>Designation: Professor</p>
    </div>
  )
}

export default Faculty
```

### Program 5: App.css

**Location:** `src/App.css`

```css
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f7fb;
  color: #222;
}

.container {
  min-height: 100vh;
  text-align: center;
  padding: 40px 20px;
}

.container h1 {
  margin-bottom: 30px;
  font-size: 32px;
  color: #1e3a5f;
}

.student, .course, .faculty {
  width: 340px;
  margin: 20px auto;
  padding: 24px;
  background: white;
  border: 1px solid #dfe5ec;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  text-align: left;
}

.student h2, .course h2, .faculty h2 {
  margin-top: 0;
  margin-bottom: 16px;
  padding-bottom: 10px;
  color: #2563eb;
  border-bottom: 2px solid #e5e7eb;
}

.student p, .course p, .faculty p {
  margin: 10px 0;
  font-size: 16px;
  line-height: 1.6;
  color: #374151;
}
```

### Program 6: main.jsx

**Location:** `src/main.jsx`

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

### Program 7: index.css

**Location:** `src/index.css`

```css
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-width: 320px;
  min-height: 100%;
}
```

## 5. EXECUTION

1. Open the Experiment_01 folder in VS Code.
2. Open the terminal.
3. Install the dependencies:

```bash
npm install
```

4. Run the React application:

```bash
npm run dev
```

5. Open the localhost URL displayed in the terminal.
6. Verify the Student, Course, and Faculty details.

## 6. OUTPUT
<img width="816" height="463" alt="image" src="https://github.com/user-attachments/assets/5937a038-6e07-4f6e-9984-3abf2220ac0d" />


## 7. OBSERVATION

The application displays Student Details, Course Details, and Faculty Details in separate styled cards.

## 9. RESULT

Thus, the React Student Information System was successfully created using Vite, React components, and CSS.
