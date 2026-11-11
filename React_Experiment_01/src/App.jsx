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
