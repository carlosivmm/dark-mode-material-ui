import { Paper } from "@material-ui/core";
import React from "react";

const PaperComponent = ({ children }) => {
  return (
    <Paper
      variant="elevation"
      elevation={10}
      className="flex md:w-1/6 h-24 justify-center rounded-xl items-center m-4"
    >
      {children}
    </Paper>
  );
};

export default PaperComponent;
