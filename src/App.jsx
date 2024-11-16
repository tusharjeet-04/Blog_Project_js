import React from "react";
import "./App.css";
import Routefile from "./Routefile";
import { DataProvider } from "./Components/DataContext";


const App = () => {
  return (
    <>
      <DataProvider>
        <Routefile/>
      </DataProvider>
    </>
  );
};

export default App;