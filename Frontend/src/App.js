import { useState } from "react";
import Home from "./Home";
import Ba from "./Ba";
import Bba from "./Bba";
import Bca from "./Bca";
import Bvoc from "./Bvoc";
import Cyber from "./Cyber";
import Aiandml from "./Aiandml";
import Form from "./Form";  

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div>

      {/* FORM SE AANE WALA PAGE */}
      {typeof page === "object" && (
        <Form
          course={page.course}
          day={page.day}          // ✅ new add
          lecture={page.lecture}
          setPage={setPage}
        />
      )}

      {page === "Home" && <Home setPage={setPage} />}
      {page === "Ba" && <Ba setPage={setPage} />}
      {page === "Bba" && <Bba setPage={setPage} />}
      {page === "Bca" && <Bca setPage={setPage} />}
      {page === "Bvoc" && <Bvoc setPage={setPage} />}
      {page === "Cyber" && <Cyber setPage={setPage} />}     
      {page === "Aiandml" && <Aiandml setPage={setPage} />} 

    </div>
  );
}

export default App;