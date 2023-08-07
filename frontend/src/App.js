import React from "react";
import { Route, Routes } from "react-router-dom";
import Listemployee from "./components/Listemp";
import CreateEmploye from "./components/CreateEmploye";
import UpdateEmployee from "./components/UpdateEmployee";
import Header from './components/Header'
import Footer from "./components/Footer";
function App() {
  return (
    <><Header />
     <React.Fragment>
      <main>
        <Routes>

          <Route path='/' element={<Listemployee />}></Route>
          <Route path="/add" element={<CreateEmploye />}></Route>
          <Route path="/update/:id" element={<UpdateEmployee />}></Route>

        </Routes>
     
      </main>
      <Footer/>
    </React.Fragment></>
   
     

  );
}

export default App;
