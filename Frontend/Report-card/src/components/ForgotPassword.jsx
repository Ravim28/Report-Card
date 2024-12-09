// // ForgotPassword.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const ForgotPassword = ({ onCodeSent }) => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
//       setMessage(response.data.message);
//       if (response.status === 200) {
//         onCodeSent(email);
//       }
//     } catch (error) {
//       setMessage(error.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div>
//       <h2>Forgot Password</h2>
//       <input
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Send Verification Code</button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ForgotPassword;




import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = ({ onCodeSent }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      setMessage(response.data.message);
      if (response.status === 200) {
        onCodeSent(email);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Send Verification Code
        </button>
        {message && (
          <p className="mt-4 text-sm text-center text-gray-600">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;

