import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyTeamsCard from "./components/MyTeamsCard";
import TopFiveCard from "./components/TopFiveCard";
import PickedPlayerCard from "./components/PickedPlayerCard";

function App() {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <MyTeamsCard />
        <div className="right-side-wrapper">
          <TopFiveCard />
          <PickedPlayerCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
