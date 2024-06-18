import React from "react";

const Container = ({ className, children }) => {
  return <div className={`max-w-7xl px-5 m-auto ${className}`}>{children}</div>;
};

export default Container;
