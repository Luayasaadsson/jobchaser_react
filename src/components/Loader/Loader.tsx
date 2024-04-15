import React from "react";
import LoaderCss from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={LoaderCss.loader}>
      <div className={LoaderCss.spinner}></div>
    </div>
  );
};

export default Loader;
