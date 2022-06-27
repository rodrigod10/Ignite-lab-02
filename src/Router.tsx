import { Route, Routes } from "react-router-dom";
import { Evento } from "./pages/event/evento";
import { Subscriber } from "./pages/subscribe/subscribe";

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<Subscriber/>} />
      <Route path="/event" element={<Evento/>} /> 
      <Route path="/event/lessons/:slug" element={<Evento/>} />
    </Routes>
  )
}