
import './css/index.css';
import Home from "./pages/Home";
import { Route } from "react-router-dom"
const App = () => {
  return (
    <div>
      <Route path="/" component={Home} exact />
    </div>
  )
};

export default App;
