import React, { useState } from "react";
export const annotationDataContext = React.createContext();

const AnnotationDataContext = ({ children }) => {
  const [personAnnotation, setPersonAnnotation] = useState([[]]);
  const [orgAnnotation, setOrgAnnotation] = useState([[]]);
  const [selectedString, setSelectedString] = useState("");
  const [category, setCategory] = useState("person");
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  
  

  return (
    <annotationDataContext.Provider
      value={{
        personAnnotation: personAnnotation,
        setPersonAnnotation: setPersonAnnotation,
        orgAnnotation: orgAnnotation,
        setOrgAnnotation: setOrgAnnotation,
        selectedString: selectedString,
        setSelectedString: setSelectedString,
        category: category,
        setCategory: setCategory,
        arr1: arr1,
        setArr1: setArr1,
        arr2: arr2,
        setArr2: setArr2,
      }}
    >
      {children}
    </annotationDataContext.Provider>
  );
};

export default AnnotationDataContext;
