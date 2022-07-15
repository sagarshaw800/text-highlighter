import React, { useState } from "react";

export const textFilesDataContext = React.createContext();

const TextFilesDataContext = ({ children }) => {
  const [textFiles, setTextFiles] = useState([]);

  return (
    <textFilesDataContext.Provider
      value={{ textFiles: textFiles, setTextFiles: setTextFiles }}
    >
      {children}
    </textFilesDataContext.Provider>
  );
};

export default TextFilesDataContext;
