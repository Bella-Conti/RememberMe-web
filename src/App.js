// import Login from "./pages/Login";
// import Schedule from "./pages/Schedule";
import Calendar from "./components/calendar/Calendar";
import { CalendarColStyled } from "./components/calendar/calendar";
import { GlobalStyled } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { fontSize } from "./theme/global";

function App() {
  return (
    <>
      <GlobalStyled />
      <ThemeProvider theme={fontSize}>
        {/* <Schedule /> */}
        <Calendar />
      </ThemeProvider>
      {/* <CalendarColStyled variant="center" center>TESTE</CalendarColStyled> */}
    </>
  );
}

export default App;
