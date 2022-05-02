import Page from "pages/index";
import { BrowserRouter as SwitchRouter, Route, Routes } from "react-router-dom";
import Calendar from "components/calendar/Calendar";
import { GlobalStyled } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { fontSize } from "./theme/global";
import TagSelector from "components/widgets/tagSelector/TagSelector";
import SelectDay from "components/widgets/selectDay/SelectDay";
import { Counter } from "./features/counter/Counter";

export default function App() {
  return (
    <>
      <GlobalStyled />
      <ThemeProvider theme={fontSize}>
        <SwitchRouter>
          <Routes>
            <Route path="/" element={<Page.Login />} />
            <Route path="/schedule" element={<Page.Schedule />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/category" element={<TagSelector />} />
            <Route path="/days" element={<SelectDay />} />
            <Route path="/register" element={<Page.Register />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </SwitchRouter>
      </ThemeProvider>
    </>
  );
}
