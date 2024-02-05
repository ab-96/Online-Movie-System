import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useState } from "react";
import Movies from "./Components/Movies";
import SearchBox from "./Components/SearchBox";
import Filter from "./Components/Filter";

function App() {
  const [search, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("");

  const userInputs = (input) => {
    setSearchTerm(input);
    console.log(search);
  };

  const getSelectedGenre = (selection) => {
    setGenre(selection)
  }


  return (
    <div className="bg-vDBlue ">
      <Header />
      <SearchBox getSearch={userInputs} getGenre={getSelectedGenre}  genre={genre}/>
      <Movies searchTerm={search} genre={genre}/>
      <Footer />
    </div>
  );
}

export default App;
