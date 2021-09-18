import React,{useState} from "react";


import Table from "./component/table.js";
import "./App.css";

function App() {
  const[show, setShow]= useState(false);
  const showuser = () => {
    setShow(true);
  };
  
  return (
    <>
        <section>
          <div class="navbars">
            <a href="#home" className="zippytext">Cyberweb</a>
            <a href="#users" className="getuser" onClick={showuser}>
              <button className="btn">Get Users</button>
            </a>
          </div>
          {show ? <Table></Table> : ""}
        </section>
    </>
  );
}

export default App;
