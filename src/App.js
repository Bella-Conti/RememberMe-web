import Schedule from "./pages/Schedule";
import { BrowserRouter as SwitchRouter, Route, Routes } from "react-router-dom";
import Calendar from "./components/calendar/Calendar";
import { CalendarColStyled } from "./components/calendar/calendar";
import { GlobalStyled } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { fontSize } from "./theme/global";
import TagSelector from "./components/widgets/tagSelector/TagSelector";
import SelectDay from "./components/widgets/selectDay/SelectDay";
import ScheduleCard from "./templates/schedule-card/ScheduleCard";
import Register from "./pages/Register";
import { Counter } from "./features/counter/counter";



export default function App() {
  return (
    <>
    <Counter />
      {/* <GlobalStyled />
      <ThemeProvider theme={fontSize}>
        <SwitchRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/schedule" element={<Schedule />} />
            <Route exact path="/calendar" element={<Calendar />} />
            <Route exact path="/category" element={<TagSelector />} />
            <Route exact path="/days" element={<SelectDay />} />
            <Route exact path="/register" element={<Register />} />

          </Routes>
        </SwitchRouter>
      </ThemeProvider> */}
    </>
  );
}

// import Login from "./pages/Login";
// import Schedule from "./pages/Schedule";
// import { BrowserRouter as SwitchRouter, Route, Routes } from "react-router-dom";
// import Calendar from "./components/calendar/Calendar";
// import { CalendarColStyled } from "./components/calendar/calendar-styled";
// import { GlobalStyled } from "./GlobalStyle";
// import { ThemeProvider } from "styled-components";
// import { fontSize } from "./theme/global";
// import TagSelector from "./components/widgets/tagSelector/TagSelector";
// import SelectDay from "./components/widgets/selectDay/SelectDay";
// import ScheduleCard from "./templates/schedule-card/ScheduleCard";
// import Register from "./pages/Register";


// function App() {
//   return (
//     <>
//       <GlobalStyled />
//       <ThemeProvider theme={fontSize}>
//         <SwitchRouter>
//           <Routes>
//             <Route exact path="/" element={<Login />} />
//             <Route exact path="/schedule" element={<Schedule />} />
//             <Route exact path="/calendar" element={<Calendar />} />
//             <Route exact path="/category" element={<TagSelector />} />
//             <Route exact path="/days" element={<SelectDay />} />
//             <Route exact path="/register" element={<Register />} />

//           </Routes>
//         </SwitchRouter>
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;
