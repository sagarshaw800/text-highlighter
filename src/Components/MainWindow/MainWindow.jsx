import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import Highlighter from "react-highlight-words";
import { annotationDataContext } from "../../Context/AnnotationDataContext";
import { selectedRecordDataContext } from "../../Context/SelectedRecordDataContext";
import { textFilesDataContext } from "../../Context/TextFilesDataContext";

const MainWindow = () => {
  const { textFiles } = useContext(textFilesDataContext);
  const { selected } = useContext(selectedRecordDataContext);
  const { setSelectedString, personAnnotation, orgAnnotation, category } =
    useContext(annotationDataContext);

  const handleMouseUp = async () => {
    setSelectedString(window.getSelection().toString());
  };

  return (
    <Box
      sx={{
        padding: "40px 20px 20px 20px",
        width: "60%",
        margin: "0 auto",
      }}
    >
      <Typography sx={{ padding: "20px" }} onMouseUp={handleMouseUp}>
        {(textFiles[selected] !== undefined) ? (
          <Highlighter
            searchWords={
              category === "person" ? personAnnotation[selected] : orgAnnotation[selected]
            }
            textToHighlight={textFiles[selected]}
            // autoEscape={true}
          />
        ) : (
          textFiles[selected]
        )}
      </Typography>
    </Box>
  );
};

export default MainWindow;
