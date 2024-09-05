import React, { useState } from 'react';

function StudentForm() {
  const [student, setStudent] = useState({ name: '', email: '', course: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
      });
      if (response.ok) {
        alert('Student added successfully');
        setStudent({ name: '', email: '', course: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={student.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="course"
        value={student.course}
        onChange={handleChange}
        placeholder="Course"
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
