import React from "react";
import Errorimg from '../../assets/Error.png'

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <img src={Errorimg} style={{marginTop:'-80px', width:'400px'}} />
      <div className="text-9xl font-bold text-gray-800" style={{fontSize:'150px', color:'#ff6f68'}}>404</div>
      <h2 className="text-2xl font-semibold mt-2">Oops! Page Not Found</h2>
      <p className="text-gray-600 mt-2 max-w-lg">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className=" btn btn-warning m-6  text-blue-500 hover:underline" style={{marginBottom:'100px'}}>
        Return to Homepage
      </Link>
      
    </div>
  );
};

export default ErrorPage;
