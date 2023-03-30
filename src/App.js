import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import Header from "./Header/Header";

function App() {
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   fetch("fakeData.json")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
