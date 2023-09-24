import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import './Error.css'; // Import your custom CSS for styling

const Error = () => {


//   const handle404Error = () => {
//     toast.error(
//       <div>
//         <span style={{ fontSize: '24px' }}>404</span>
//         <p>Page Not Found!</p>
//       </div>,
//       {
//         position: toast.POSITION.TOP_CENTER,
//       }
//     );
//   };

  return (

    <div className="lost-error-page">
      <div className="lost-header">
        <h1>404</h1>
        <p>We have to go back!</p>
      </div>
      <div className="lost-content">
        <p>The page you are looking for is lost on the Island.</p>
        <p>Maybe it's in the hatch? Or with the Others?</p>
        <p>Don't worry; we'll find it.</p>
      </div>
      <div className="lost-button">
        <Link to="/">Go Back to Safety</Link>
      </div>
      <div className="lost-image">
      <img src="https://tenor.com/91SK.gif" alt="lost gif" />
       </div>
    </div>

    


    // <div>
    //   <h1>Something went wrong!</h1>
    //   <button onClick={handle404Error}>Trigger 404 Error</button>
    //   <ToastContainer />
    // </div>
  );
};

export default Error;
