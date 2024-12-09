import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TeacherStatus() {
  const [approvedTeachers, setApprovedTeachers] = useState([]);
  const [rejectedTeachers, setRejectedTeachers] = useState([]);

  // Fetch approved teachers
  useEffect(() => {
    const fetchApprovedTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/superadmin/approved-teachers');
        setApprovedTeachers(response.data);
      } catch (error) {
        console.error('Error fetching approved teachers', error);
      }
    };

    const fetchRejectedTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/superadmin/rejected-teachers');
        setRejectedTeachers(response.data);
      } catch (error) {
        console.error('Error fetching rejected teachers', error);
      }
    };

    fetchApprovedTeachers();
    fetchRejectedTeachers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Teacher Request Status</h2>

      <div className="flex justify-around flex-wrap gap-8">
        {/* Approved Teachers */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
          <h3 className="text-xl font-semibold mb-4 text-green-600">Approved Teachers</h3>
          {approvedTeachers.length === 0 ? (
            <p className="text-gray-500">No approved teachers yet.</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {approvedTeachers.map((teacher) => (
                <li key={teacher._id} className="py-2">
                  <p className="text-lg font-medium">{teacher.name}</p>
                  <p className="text-gray-500">{teacher.email}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Rejected Teachers */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
          <h3 className="text-xl font-semibold mb-4 text-red-600">Rejected Teachers</h3>
          {rejectedTeachers.length === 0 ? (
            <p className="text-gray-500">No rejected teachers yet.</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {rejectedTeachers.map((teacher) => (
                <li key={teacher._id} className="py-2">
                  <p className="text-lg font-medium">{teacher.name}</p>
                  <p className="text-gray-500">{teacher.email}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeacherStatus;
