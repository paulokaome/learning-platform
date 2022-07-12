import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<Subscribe/>}/>
      <Route path="/events" element={<Event/>}/>
      <Route path="/events/lesson/:slug" element={<Event/>}/>
    </Routes>
  )
}