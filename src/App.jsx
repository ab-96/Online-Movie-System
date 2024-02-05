import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useState } from "react";
import Movies from "./Components/Movies";
import SearchBox from "./Components/SearchBox";

function App() {
  const [search, setSearchTerm] = useState("");

  const userInputs = (input) => {
    setSearchTerm(input);
    console.log(search);
  };
  return (
    <div className="bg-vDBlue ">
      <Header />
      <SearchBox getSearch={userInputs} />
      <Movies searchTerm={search} />
      <Footer />
    </div>
  );
}

export default App;
