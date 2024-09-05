import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import './App.css';

function App() {
  const [showStudentList, setShowStudentList] = useState(false);

  const toggleStudentList = () => {
    setShowStudentList(!showStudentList);
  };

  return (
    <div className="App">
      <h1>Student Management System</h1>
      <StudentForm />
      <button onClick={toggleStudentList}>
        {showStudentList ? 'Hide Student List' : 'View Student List'}
      </button>
      {showStudentList && <StudentList />}
    </div>
  );
}

export default App;
