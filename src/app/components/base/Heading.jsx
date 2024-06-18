import React from "react";
import { cva } from "cva";

const Heading = ({ headingLevel = 1, sizes, children, className = "" }) => {
  const HeadingTag = `h${headingLevel}`;

  const headingStyles = cva("font-montserrat", {
    variants: {
      sizes: {
        H1: "text-h1",
        H2: "text-h2",
        H3: "text-h3",
        H4: "text-h4",
        H5: "text-h5",
        H6: "text-h6",
      },
    },
    defaultVariants: {
      sizes: "H1",
    },
  });

  const combinedStyles = `${headingStyles({ sizes })} ${className}`;

  return <HeadingTag className={combinedStyles}>{children}</HeadingTag>;
};

export default Heading;
