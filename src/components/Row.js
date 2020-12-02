import React from "react";

const Row = ({ children }) => {
  return (
    <div className="flex h-full w-full md:flex-row flex-col justify-center">
      {children}
    </div>
  );
};

export default Row;
