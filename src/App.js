import "./styles.css";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./site-settings/site-theme/default";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}
