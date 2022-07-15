import {
  AppBar,
  Box,
  Button,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useContext } from "react";
import { sideBarOpenDataContext } from "../../Context/SideBarOpenDataContext";
import { annotationDataContext } from "../../Context/AnnotationDataContext";
import { selectedRecordDataContext } from "../../Context/SelectedRecordDataContext";

const NavBar = () => {
  const { recordsOpen, setRecordsOpen, annotationOpen, setAnnotationOpen } =
    useContext(sideBarOpenDataContext);
  const { selected } = useContext(selectedRecordDataContext);

  const {
    selectedString,
    setCategory,
    category,
    personAnnotation,
    orgAnnotation,
    setPersonAnnotation,
    setOrgAnnotation,
    setArr1,
    setArr2,
  } = useContext(annotationDataContext);

  const handleAddAnnotation = () => {
    if (selectedString !== "") {
      if (category === "person") {
        personAnnotation[selected].push(selectedString);
        setPersonAnnotation(personAnnotation);
      } else {
        orgAnnotation[selected].push(selectedString);
        setOrgAnnotation(orgAnnotation);
      }
    }
  };


  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          bgcolor: "#9d4edd",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "15%",
            margin: "0 20px",
          }}
        >
          <Typography>Records</Typography>
          <IconButton
            sx={{ color: "white" }}
            onClick={() => setRecordsOpen(!recordsOpen)}
          >
            {recordsOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        <ToggleButtonGroup
          color="primary"
          value={category}
          exclusive
          sx={{ bgcolor: "white" }}
          onChange={(e, newCategory) => setCategory(newCategory)}
        >
          <ToggleButton value="person">Person</ToggleButton>
          <ToggleButton value="org">Org</ToggleButton>
        </ToggleButtonGroup>
        <Button
          variant="outlined"
          disableFocusRipple
          sx={{
            bgcolor: "white",
            "&:hover": {
              backgroundColor: "white",
              boxShadow: "none",
            },
          }}
          onClick={handleAddAnnotation}
        >
          Add the selected part to {category}
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "15%",
            margin: "0 20px",
          }}
        >
          <Typography>Annotations</Typography>
          <IconButton
            sx={{ color: "white" }}
            onClick={() => setAnnotationOpen(!annotationOpen)}
          >
            {annotationOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
