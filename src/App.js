import HomePage from "./pages/homepage/Homepage.component";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => (
  <main
    style={{
      margin: "0 1em",
      padding: "1em"
    }}
  >
    <h2>HATS PAGE</h2>
  </main>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
