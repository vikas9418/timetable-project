import { useEffect, useState } from "react";

import Home from "./Home";
import Ba from "./Ba";
import Bba from "./Bba";
import Bca from "./Bca";
import Bvoc from "./Bvoc";
import Cyber from "./Cyber";
import Aiandml from "./Aiandml";
import Form from "./Form";

function App() {

  const getPageFromURL = () => {
    const path = window.location.pathname.toLowerCase();

    if (path === "/ba") return "Ba";
    if (path === "/bba") return "Bba";
    if (path === "/bca") return "Bca";
    if (path === "/bvoc") return "Bvoc";
    if (path === "/cyber") return "Cyber";
    if (path === "/aiandml") return "Aiandml";

    return "Home";
  };


  const [page, setPage] = useState(getPageFromURL());


  useEffect(() => {

    const handleBackForward = () => {

      const path = window.location.pathname.toLowerCase();

      if (path === "/ba") {
        setPage("Ba");
      }
      else if (path === "/bba") {
        setPage("Bba");
      }
      else if (path === "/bca") {
        setPage("Bca");
      }
      else if (path === "/bvoc") {
        setPage("Bvoc");
      }
      else if (path === "/cyber") {
        setPage("Cyber");
      }
      else if (path === "/aiandml") {
        setPage("Aiandml");
      }
      else {
        setPage("Home");
      }

    };


    window.addEventListener("popstate", handleBackForward);


    return () => {
      window.removeEventListener("popstate", handleBackForward);
    };

  }, []);


  const navigate = (newPage) => {

    setPage(newPage);

    let newPath = "/";

    if (newPage === "Ba") {
      newPath = "/BA";
    }
    else if (newPage === "Bba") {
      newPath = "/BBA";
    }
    else if (newPage === "Bca") {
      newPath = "/BCA";
    }
    else if (newPage === "Bvoc") {
      newPath = "/Bvoc";
    }
    else if (newPage === "Cyber") {
      newPath = "/Cyber";
    }
    else if (newPage === "Aiandml") {
      newPath = "/Aiandml";
    }


    window.history.pushState(
      { page: newPage },
      "",
      newPath
    );

  };


  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>

      {typeof page === "object" && (
        <Form
          course={page.course}
          day={page.day}
          lecture={page.lecture}
          setPage={navigate}
        />
      )}

      {page === "Home" && (
        <Home setPage={navigate} />
      )}

      {page === "Ba" && (
        <Ba setPage={navigate} />
      )}

      {page === "Bba" && (
        <Bba setPage={navigate} />
      )}

      {page === "Bca" && (
        <Bca setPage={navigate} />
      )}

      {page === "Bvoc" && (
        <Bvoc setPage={navigate} />
      )}

      {page === "Cyber" && (
        <Cyber setPage={navigate} />
      )}

      {page === "Aiandml" && (
        <Aiandml setPage={navigate} />
      )}

    </div>
  );
}

export default App;