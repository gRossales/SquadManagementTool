import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyTeamsCard from "./components/MyTeamsCard";
import TopFiveCard from "./components/TopFiveCard";
import PickedPlayerCard from "./components/PickedPlayerCard";
import Card from "./components/Card";

function App() {
  return (
    <Router>
      <Header />
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
          <Card title="Create your team">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            voluptatibus eum quae, quasi sit nemo quas eius doloribus possimus,
            nesciunt cupiditate explicabo nulla? A aspernatur vel aperiam
            laborum, pariatur incidunt!
          </Card>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
