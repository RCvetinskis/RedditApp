import React from "react";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div className={errorMessage ? `alert alert-error p-2 rounded  ` : "p-2"}>
      {errorMessage}
    </div>
  );
};

export default ErrorMessage;
