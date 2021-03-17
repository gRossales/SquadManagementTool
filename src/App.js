import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo-wrapper">
            <span className="material-icons">delete</span>
            <h3>Squad Management Tool</h3>
          </div>
          <div className="user-wrapper">
            <p>John Doe</p>
            <span className="material-icons">circle</span>
          </div>
        </div>
      </header>
      <div className="main-wrapper">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">My Teams</h2>
            <span>+</span>
          </div>
          <div className="card-body">
            <div className="card-row-title">
              <p>Name</p>
              <p>Description</p>
            </div>
            <div className="card-row">
              <p>Barcelona</p>
              <p>Barceona Squad</p>
            </div>
          </div>
        </div>
        <div className="right-side-wrapper">
          <div className="card">
            <h2 className="card-title">Top 5</h2>
            <div className="card-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              sequi.
            </div>
          </div>
          <div className="card colored">Picked Players</div>
        </div>
      </div>
      <footer>
        <p>2020 - All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
