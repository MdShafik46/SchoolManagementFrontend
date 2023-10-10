import React, { useState, useEffect } from 'react';
import '../Css/attendance.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    // Replace this URL with your API endpoint
    fetch(`http://localhost:5000/api/merged-data?date=${formattedDate}`)
      .then((response) => response.json())
      .then((data) => {
        // Access the shafikData array within the response
        const studentData = data.shafikData ? data.shafikData : [data];
        setStudents(studentData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [selectedDate]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Students Timesheet</h1>
      </header>
      <main>
        <div className="date-picker">
          <label>Select Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Check-In Time</th>
              <th>Check-Out Time</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student._id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.add}</td>
                <td>{student.sc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
