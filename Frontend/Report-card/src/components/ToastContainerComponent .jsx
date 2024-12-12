// ToastContainerComponent.js
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainerComponent = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      progress={undefined}
    />
  );
};

export default ToastContainerComponent;
