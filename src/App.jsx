import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import SearchBox from "./Components/SearchBox";

function App() {
  return (
    <div className="bg-vDBlue">
      <Header />
      <SearchBox/>
      <Movies/>
      <Footer/>
    </div>
  );
}

export default App;
