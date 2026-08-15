import React from "react";

const Bca = ({ setPage }) => {
  return (
    <div
      style={{
        backgroundImage: "url('image2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        padding: "20px",
        boxSizing: "border-box"
      }}
    >

      {/* BACK BUTTON */}
      <button
        onClick={() => setPage("Home")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "8px 15px",
          background: "#0487A1",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        ← Back to Home
      </button>

      {/* AI BUTTON */}
      <button
        onClick={() => setPage("Aiandml")}
        style={{
          textAlign: "center",
          backgroundColor: "#D1ECEF",
          fontSize: "clamp(18px, 3vw, 30px)",
          marginBottom: "20px",
          borderRadius: "5px",
          minHeight: "40px",
          width: "min(600px, 90vw)",
          color: "#0B3C49",
          border: "1px solid #0487A1",
          WebkitTextStroke: "0.1px black",
          transition: "0.3s",
          cursor: "pointer",
          padding: "5px"
        }}
      >
        AI and ML
      </button>

      {/* CYBER BUTTON */}
      <button
        onClick={() => setPage("Cyber")}
        style={{
          textAlign: "center",
          backgroundColor: "#D1ECEF",
          fontSize: "clamp(18px, 3vw, 30px)",
          borderRadius: "5px",
          minHeight: "40px",
          width: "min(600px, 90vw)",
          color: "#0B3C49",
          border: "1px solid #0487A1",
          WebkitTextStroke: "0.1px black",
          transition: "0.3s",
          cursor: "pointer",
          padding: "5px"
        }}
      >
        Cyber Security
      </button>

    </div>
  );
};

export default Bca;