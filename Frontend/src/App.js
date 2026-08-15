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

  const [page, setPage] = useState(
    window.history.state?.page || "Home"
  );

  useEffect(() => {

    if (!window.history.state) {
      window.history.replaceState(
        { page: "Home" },
        "",
        window.location.href
      );
    }

    const handleBackForward = (event) => {

      if (event.state?.page) {
        setPage(event.state.page);
      } else {
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

    window.history.pushState(
      { page: newPage },
      "",
      window.location.href
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