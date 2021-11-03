import { React, useEffect, useState } from "react";
import "./App.css";

// axios 추가
import axios from "axios";
function App() {
  // 서버에서 받은 데이터를 console로 찍어서 확인한다.

  const [data, setData] = useState("");
  const [part, setPart] = useState();

  const getPart = () => {
    axios.get("/api/part").then(response => {
      //console.log(response.data);
      //setAdmin(response);
    });
  };

  const getTest = () => {
    axios.get("/api/test").then(response => {
      setData(response.data.test);
    });
  };

  useEffect(() => {
    getPart();
    getTest();
  });

  return <div className="App">{data}</div>;
}

export default App;
