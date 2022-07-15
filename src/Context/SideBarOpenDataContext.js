import React, { useState } from "react";
export const sideBarOpenDataContext = React.createContext();

const SideBarOpenDataContext = ({ children }) => {
  const [recordsOpen, setRecordsOpen] = useState(true);
  const [annotationOpen, setAnnotationOpen] = useState(true);

  return (
    <sideBarOpenDataContext.Provider
      value={{
        recordsOpen: recordsOpen,
        setRecordsOpen: setRecordsOpen,
        annotationOpen: annotationOpen,
        setAnnotationOpen: setAnnotationOpen,
      }}
    >
      {children}
    </sideBarOpenDataContext.Provider>
  );
};

export default SideBarOpenDataContext;
