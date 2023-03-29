import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import { supabaseClient } from "../backend/client";
import Footer from "./views/components/Footer";
import NavBar from "./views/NavBar/NavBar";
import Sidebar from "./views/sidebar/Sidebar";
export default function Layout() {
  const [userData, setUserDate] = useState(null)
    useEffect(() => {
    const fechear=async()=>{
      const uuid= (await supabaseClient.auth.getSession()).data.session.user.id
      const resultado=await supabaseClient.from('UserData').select().eq('uuid',uuid)
      setUserDate(resultado.data[0])
      }
       fechear()
    }, [])


    
  return (
    <main className="relative  w-screen overflow-x-hidden">
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <NavBar userData={userData} />

      <Sidebar />
      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet context={userData} />
      <Footer />
    </main>
  );
}
