import { Header } from "../components/header/Header";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Videos } from "../components/videos/Videos";

export function Evento(){
  return(
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex flex-1">
        <Videos/>
        <Sidebar/>
      </main>
    </div>
  )
  
} 