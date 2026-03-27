import React from "react";

const Bca = ({ setPage }) => {  // ✅ Changed: function App → const Bca + setPage
  return (
    <div style={{
      backgroundImage: "url('image2.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    }}>
      
      {/* BACK BUTTON - ADD KARO */}
      <button 
        onClick={() => setPage("Home")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "10px 20px",
          background: "#0487A1",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        ← Back to Home
      </button>

      {/* AI BUTTON - onClick ADD KARO */}
      <button 
        onClick={() => setPage("Aiandml")}  // ✅ YE LINE ADD KI
        style={{
          textAlign: "center",
          backgroundColor: "#D1ECEF",
          fontSize: "30px",
          marginBottom: "20px",
          borderRadius: "5px",
          height: "40px",
          width: "600px",
          color: "#0B3C49",
          border: "1px solid #0487A1",
          WebkitTextStroke: "0.1px black",
          transition: "0.3s",
          cursor: "pointer"
        }}
      >
        AI and ML
      </button>

      {/* CYBER BUTTON - onClick ADD KARO */}
      <button 
        onClick={() => setPage("Cyber")}  // ✅ YE LINE ADD KI
        style={{
          textAlign: "center",
          backgroundColor: "#D1ECEF",
          fontSize: "30px",
          borderRadius: "5px",
          height: "40px",
          width: "600px",
          color: "#0B3C49",
          border: "1px solid #0487A1",
          WebkitTextStroke: "0.1px black",
          transition: "0.3s",
          cursor: "pointer"
        }}
      >
        Cyber Security
      </button>
    </div>
  );
};

export default Bca;  // ✅ Changed: export default App → Bca
