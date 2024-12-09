


// main
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png'; // Adjust the path to your logo file

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.removeItem('role'); // Clear user role
    navigate('/'); // Redirect to the landing page
  };

  // Redirect logged-in users away from login/register pages
  useEffect(() => {
    if (role && (location.pathname === '/login' || location.pathname === '/register')) {
      // Redirect based on user role
      if (role === 'SuperAdmin') navigate('/superadmin-dashboard');
      else if (role === 'Teacher') navigate('/teacher-dashboard');
      else if (role === 'Student') navigate('/student-dashboard');
    }

    // Disable browser back button after login
    // if (role) {
    //   window.history.pushState(null, '', window.location.href);
    //   window.onpopstate = () => {
    //     window.history.pushState(null, '', window.location.href);
    //   };
    // }

    // return () => {
    //   window.onpopstate = null; // Cleanup the listener
    // };
  }, [role, location.pathname, navigate]);

  return (
    <nav className="bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo} // Use the imported logo
          alt="Report Card Generator Logo"
          className="h-12 cursor-pointer"
          // onClick={() => navigate('/')}
        />

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {!role ? (
            <>
              <li>
                <button
                  onClick={() => navigate('/login')}
                  className="hover:text-gray-200 transition duration-300"
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/register')}
                  className="hover:text-gray-200 transition duration-300"
                >
                  Register
                </button>
              </li>
            </>
          ) : (
            <>
              {role === 'SuperAdmin' && (
                <li>
                  <button
                    // onClick={() => navigate('/superadmin-dashboard')}
                    className="hover:text-gray-200 font-medium transition duration-300"
                  >
                    Super Admin Dashboard
                  </button>
                </li>
              )}
              {role === 'Teacher' && (
                <li>
                  <button
                    // onClick={() => navigate('/teacher-dashboard')}
                    className="hover:text-gray-200 font-medium transition duration-300"
                  >
                    Teacher Dashboard
                  </button>
                </li>
              )}
              {role === 'Student' && (
                <li>
                  <button
                    // onClick={() => navigate('/student-dashboard')}
                    className="hover:text-gray-200 font-medium transition duration-300"
                  >
                    Student Dashboard
                  </button>
                </li>
              )}
            </>
          )}
        </ul>

        <div className="flex items-center space-x-6">
          {/* Logout Button */}
          {role && (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-5 py-2 rounded-lg text-white hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



// import React, { useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import logo from '../assets/a5MfLJOhTEWxmOyj4-uQKg-Photoroom.png'; // Adjust the path to your logo file

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const role = 'Teacher'; // Default role defined as 'Teacher'

//   const handleLogout = () => {
//     navigate('/'); // Redirect to the landing page
//   };

//   useEffect(() => {
//     // Redirect logged-in users away from login/register pages
//     if (location.pathname === '/login' || location.pathname === '/register') {
//       if (role === 'SuperAdmin') navigate('/superadmin-dashboard');
//       else if (role === 'Teacher') navigate('/teacher-dashboard');
//       else if (role === 'Student') navigate('/student-dashboard');
//     }

//     // Disable back navigation to the login/register pages
//     window.history.pushState(null, '', window.location.href);
//     window.onpopstate = () => {
//       window.history.pushState(null, '', window.location.href);
//     };

//     return () => {
//       window.onpopstate = null; // Cleanup on component unmount
//     };
//   }, [role, location.pathname, navigate]);

//   return (
//     <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <img
//           src={logo} // Use the imported logo
//           alt="Report Card Generator Logo"
//           className="h-12 cursor-pointer"
//         />

//         {/* Navigation Links */}
//         <ul className="flex space-x-8">
//           {role === 'Teacher' ? (
//             <li>
//               <button
//                 className="hover:text-gray-200 font-medium transition duration-300"
//                 onClick={() => navigate('/teacher-dashboard')}
//               >
//                 Teacher Dashboard
//               </button>
//             </li>
//           ) : (
//             <>
//               <li>
//                 <button
//                   onClick={() => navigate('/login')}
//                   className="hover:text-gray-200 transition duration-300"
//                 >
//                   Login
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => navigate('/register')}
//                   className="hover:text-gray-200 transition duration-300"
//                 >
//                   Register
//                 </button>
//               </li>
//             </>
//           )}
//         </ul>

//         <div className="flex items-center space-x-6">
//           {/* Logout Button */}
//           {role && (
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 px-5 py-2 rounded-lg text-white hover:bg-red-600 transition duration-300"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
