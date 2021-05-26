import "./App.css";
import HomeHeading from "./components/HomeHeading";
import Info from "./components/Info.js";
import Footer from "./components/Footer.js";
import Nav from "./components/Nav.js";
import Basics from "./components/Basics.js";
import Buying from "./components/Buying.js";
import Other from "./components/Other.js";
import Ask from "./components/Ask.js";

function App() {
  return (
    <div id="app">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <Nav />
      <HomeHeading />
      <div className="container-fluid">
        <div className="row">
          <Basics />
          <Buying />
        </div>
        <div className="row">
          <Other />
          <Ask />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
