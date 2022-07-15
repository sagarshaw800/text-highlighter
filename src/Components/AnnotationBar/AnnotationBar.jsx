import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useContext, useEffect, useState } from "react";
import { annotationDataContext } from "../../Context/AnnotationDataContext";
import { sideBarOpenDataContext } from "../../Context/SideBarOpenDataContext";
import { selectedRecordDataContext } from "../../Context/SelectedRecordDataContext";

const AnnotationBar = () => {
  const { selected } = useContext(selectedRecordDataContext);
  const { annotationOpen } = useContext(sideBarOpenDataContext);
  const {
    arr1,
    arr2,
    setArr1,
    setArr2,
    personAnnotation,
    setPersonAnnotation,
    orgAnnotation,
    setOrgAnnotation,
    setCategory,
    category,
  } = useContext(annotationDataContext);

  const [open, setOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [deleteCat, setDeleteCat] = useState("");

  useEffect(() => {
    setArr1(personAnnotation[selected]);
    setArr2(orgAnnotation[selected]);
  }, [selected, orgAnnotation, personAnnotation, setArr1, setArr2]);

  const deleteItem1 = (index, cat) => {
    setOpen(!open);
    setDeleteIndex(index);
    setDeleteCat(cat);
  };
  const deleteItem2 = (index, cat) => {
    setOpen(!open);
    setDeleteIndex(index);
    setDeleteCat(cat);
  };

  const handleDelete = () =>{
    setOpen(false);
    if(deleteCat === 'person'){
      personAnnotation[selected].splice(deleteIndex, 1);
      setPersonAnnotation(personAnnotation);
    }
    else if(deleteCat === 'org'){
      orgAnnotation[selected].splice(deleteIndex, 1);
      setOrgAnnotation(orgAnnotation);
    }
    if(category === "person"){
      setCategory("org")
    }
    if(category === "org"){
      setCategory("person")
    }

  }

  return (
    <>
      <Modal
        open={open}
        // onClose={handleClose}
      >
        <Box
          sx={{
            width: "400px",
            height: "200px",
            bgcolor: "white",
            margin: "150px auto",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            border:'2px solid red',
            borderRadius:'5px',
          }}
        >
          <Typography variant="h6" component="h2">
            Are you sure you want to delete ?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width:'100%'
            }}
          >
            <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>Cancel</Button>
            <Button variant="outlined" color="error" onClick={()=>handleDelete()}>Delete</Button>
          </Box>
        </Box>
      </Modal>

      <Drawer
        variant="persistent"
        anchor="right"
        open={annotationOpen}
        sx={{
          [`& .MuiDrawer-paper`]: {
            width: "20%",
            paddingTop: "70px",
            zIndex: "1",
          },
        }}
      >
        <List>
          {arr1.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItem>
                <ListItemText primary={text + " - person"} />
              </ListItem>
              <ListItemButton onClick={() => deleteItem1(index, "person")}>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
          {arr2.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItem>
                <ListItemText primary={text + " - org"} />
              </ListItem>
              <ListItemButton onClick={() => deleteItem2(index, "org")}>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default AnnotationBar;
