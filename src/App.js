import "./App.css";
import AnnotationBar from "./Components/AnnotationBar/AnnotationBar";
import MainWindow from "./Components/MainWindow/MainWindow";
import NavBar from "./Components/NavBar/NavBar";
import RecordsBar from "./Components/RecordsBar/RecordsBar";
import AnnotationDataContext from "./Context/AnnotationDataContext";
import SelectedRecordDataContext from "./Context/SelectedRecordDataContext";
import SideBarOpenDataContext from "./Context/SideBarOpenDataContext";
import TextFilesDataContext from "./Context/TextFilesDataContext";

function App() {
  return (
    <AnnotationDataContext>
      <SelectedRecordDataContext>
        <TextFilesDataContext>
          <SideBarOpenDataContext>
            <NavBar />
            <RecordsBar />
            <MainWindow />
            <AnnotationBar />
          </SideBarOpenDataContext>
        </TextFilesDataContext>
      </SelectedRecordDataContext>
    </AnnotationDataContext>
  );
}

export default App;
