import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import React, { useContext } from "react";
import { textFilesDataContext } from "../../Context/TextFilesDataContext";
import { selectedRecordDataContext } from "../../Context/SelectedRecordDataContext";
import Fileupload from "../../utils/Fileupload";
import { sideBarOpenDataContext } from "../../Context/SideBarOpenDataContext";
// import { annotationDataContext } from "../../Context/AnnotationDataContext";

const RecordsBar = () => {
  const { textFiles } = useContext(textFilesDataContext);
  const { selected, setSelected } = useContext(selectedRecordDataContext);
  const { recordsOpen } = useContext(sideBarOpenDataContext);
  // const { setArr1, setArr2, personAnnotation, orgAnnotation } = useContext(annotationDataContext);
  return (
    <>
      <Drawer
        variant="persistent"
        anchor="left"
        open={recordsOpen}
        sx={{
          [`& .MuiDrawer-paper`]: {
            width: "20%",
            paddingTop: "70px",
            zIndex: "1",
          },
        }}
      >
        <Fileupload />
        <List sx={{ overflowY: "scroll" }}>
          {textFiles.map((text, index) => (
            <ListItemButton
              key={text}
              selected={selected === index}
              onClick={() => {
                setSelected(index);
              }}
            >
              <ListItemText primary={text.substr(0, 20) + " ..."}/>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default RecordsBar;
