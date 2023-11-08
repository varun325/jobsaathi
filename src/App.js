import "./App.css";
import Home from "./components/Home";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Form from "./components/Form";
import DrawerAppBar from "./components/AppBar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnhancedTable from "./components/Table";
function App() {
  return (
    <>
      <Router>
        <DrawerAppBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home>
                <Form />
              </Home>
            }
          ></Route>
          <Route exact path="/spreadsheet" element={<EnhancedTable></EnhancedTable>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
