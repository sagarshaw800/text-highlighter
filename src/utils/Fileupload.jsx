import React, { useContext } from "react";
import { annotationDataContext } from "../Context/AnnotationDataContext";
import { textFilesDataContext } from "../Context/TextFilesDataContext";

const Fileupload = () => {
  const { textFiles, setTextFiles } = useContext(textFilesDataContext);
  const {
    personAnnotation,
    orgAnnotation,
    setPersonAnnotation,
    setOrgAnnotation,
  } = useContext(annotationDataContext);

  const onFileSelection = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      setTextFiles([...textFiles, text]);
      setPersonAnnotation([...personAnnotation, []]);
      setOrgAnnotation([...orgAnnotation, []]);
      // console.log(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <>
      <label
        style={{
          width: "150px",
          cursor: "pointer",
          border: "2px solid #9d4edd",
          padding: "5px 10px",
          borderRadius: "5px",
          textAlign: "center",
          margin: " 10px auto",
          fontFamily: "sans-serif",
        }}
      >
        Add text file
        <input
          type="file"
          style={{ display: "none" }}
          onChange={onFileSelection}
        />
      </label>
    </>
  );
};

export default Fileupload;
