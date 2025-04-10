import { MdError } from "react-icons/md";
import React from "react";

const Error = ({err}) => {
  return (
    <div className="flex pl-1 gap-1 items-center mt-4">
      <MdError />  
      <div className="text-red-700 -mt-1  tracking-wider font-medium">
      {err.split(".")[0]}
      </div>
    </div>
  );
};

export default Error;
