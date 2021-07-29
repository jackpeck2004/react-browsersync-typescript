import "./styles/main.scss";
import { ReactSVG } from "react-svg";
import logo from "./assets/react-logo.svg";

export const App = () => {
  return (
    <div className="App">
      <ReactSVG src={logo} />
      <h1>React Typescript Webpack Starter</h1>
    </div>
  );
};
