import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyTeamsCard from "./components/MyTeamsCard";
import TopFiveCard from "./components/TopFiveCard";
import PickedPlayerCard from "./components/PickedPlayerCard";
import TeamCreatePage from "./pages/TeamCreatePage";
import TeamProvider from "./context/TeamContext";
import MyTeamsProvider from "./context/MyTeamsContext";
import PlayerProvider from "./context/PlayerContext";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <MyTeamsProvider>
          <TeamProvider>
            <PlayerProvider>
              <Switch>
                <Route path="/" exact>
                  <div className="main-wrapper">
                    <MyTeamsCard />
                    <div className="right-side-wrapper">
                      <TopFiveCard />
                      <PickedPlayerCard />
                    </div>
                  </div>
                </Route>
                <Route path="/create">
                  <TeamCreatePage />
                </Route>
              </Switch>
            </PlayerProvider>
          </TeamProvider>
        </MyTeamsProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
