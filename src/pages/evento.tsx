import { useParams } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Videos } from "../components/videos/Videos";


export function Evento(){
  const  {slug}  = useParams<{slug: string}>()
  return(
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex flex-1">
          {slug 
            ? <Videos lessonSlug={slug}/> 
            : <div className="flex-1"></div>}
          <Sidebar />

      </main>
    </div>
  )
  
} 