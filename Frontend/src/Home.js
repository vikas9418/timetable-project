import { useState } from "react";

function Home({ setPage }) {
  const [hoverBtn, setHoverBtn] = useState(null);

  const [formData, setFormData] = useState({
    course: "",
    day: "",
    lecture: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const map = {
      BA: "Ba",
      BBA: "Bba",
      "AI & ML": "Aiandml",
      "Cyber Security": "Cyber",
      BVOC: "Bvoc"
    };

    setPage({
      course: map[formData.course],
      day: formData.day,
      lecture: formData.lecture
    });
  };

  const goToPage = (pageName) => {
    setPage(pageName);
  };

  const styles = {
    body: {
      backgroundImage: "url('/noble.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      minHeight: "100vh"
    },

    navbar: {
      position: "sticky",
      top: "0",
      background: "rgba(255,0,0,0.9)",
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
      zIndex: "1000",
      backdropFilter: "blur(10px)",
      height: "60px"
    },

    navLinks: {
      display: "flex",
      gap: "20px"
    },

    link: {
      color: "white",
      textDecoration: "none",
      cursor: "pointer"
    },

    hero: {
      minHeight: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "50px",
      backdropFilter: "blur(10px)",
      background: "rgba(0,0,0,0.5)",
      color: "white",
      padding: "0px",
      flexWrap: "wrap"
    },

    heroLeft: {
      background: "rgba(255,255,255,0.95)",
      padding: "30px",
      borderRadius: "5px",
      width: "260px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      alignSelf: "flex-start",
      marginTop: "0px",
      marginLeft: "-175px",
      height:"320px"
    },

    heroRight: {
      textAlign: "center"
    },

    heroTitle: {
      fontSize: "70px",
      marginBottom: "60px",
      marginTop: "-80px",
      textTransform: "uppercase",
      letterSpacing: "3px",
      fontWeight: "700"
    },

    btnContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    },

    button: {
      margin: "15px",
      padding: "14px 45px",
      fontSize: "17px",
      borderRadius: "15px",
      border: "none",
      cursor: "pointer",
      background: "linear-gradient(45deg,#00e1ff,#0487A1)",
      color: "white",
      transition: "0.3s",
      width: "150px"
    },

    form: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    },

    select: {
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "14px"
    },

    submitBtn: {
      padding: "12px",
      background: "#0487A1",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "14px"
    },

    info: {
      background: "white",
      padding: "100px 20px",
      textAlign: "center"
    },

    footer: {
      background: "black",
      color: "white",
      padding: "60px 20px 20px 20px"
    },

    footerContainer: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap"
    },

    footerBox: {
      margin: "20px",
      minWidth: "200px"
    },

    footerBoxTitle: {
      marginBottom: "20px",
      borderBottom: "2px solid #00e1ff",
      display: "inline-block",
      paddingBottom: "5px"
    },

    copyright: {
      textAlign: "center",
      marginTop: "40px",
      paddingTop: "20px",
      borderTop: "1px solid gray",
      fontSize: "14px",
      color: "gray"
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.navbar}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img 
            src="/NU-final-01.png" 
            alt="logo" 
            style={{ height: "80px",margin:"-30px"}}
          />
          <h2 style={{ margin: "20px" }}>NOBLE UNIVERSITY</h2>
        </div>

        <div style={styles.navLinks}>
          <span style={styles.link}>Home</span>
          <span style={styles.link}>Courses</span>
          <span style={styles.link}>Form</span>
        </div>
      </div>

      <div style={styles.hero}>
        <div style={styles.heroLeft}>
          <h3 style={{ marginBottom: "15px", color: "#0487A1" }}>
            Quick Time Table
          </h3>

          <form style={styles.form} onSubmit={handleSubmit}>
            <select name="course" value={formData.course} onChange={handleChange} style={styles.select} required>
              <option value="">Select Course</option>
              <option>BA</option>
              <option>BBA</option>
              <option>AI & ML</option>
              <option>Cyber Security</option>
              <option>BVOC</option>
            </select>

            <select name="day" value={formData.day} onChange={handleChange} style={styles.select} required>
              <option value="">Select Day</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>

            <select name="lecture" value={formData.lecture} onChange={handleChange} style={styles.select} required>
              <option value="">Select Lecture</option>
              <option>Lecture 1</option>
              <option>Lecture 2</option>
              <option>Lecture 3</option>
              <option>Lecture 4</option>
              <option>Lecture 5</option>
            </select>

            <button type="submit" style={styles.submitBtn}>
              View
            </button>
          </form>
        </div>

        <div style={styles.heroRight}>
          <h1 style={styles.heroTitle}>Class Time Table</h1>
          <p>Select your department to view schedule</p>

          <div style={styles.btnContainer}>
            {["Ba", "Bba", "Bca", "Bvoc"].map((btn) => (
              <button
                key={btn}
                style={styles.button}
                onClick={() => goToPage(btn)}
              >
                {btn.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={styles.info}>
        <h2>Welcome to Noble University</h2>
        <p>Select your course, day and lecture to view timetable</p>
      </div>

      <div style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerBox}>
            <h3 style={styles.footerBoxTitle}>About</h3>
            <p>Noble University Time Table System 
                click to show your lecture
            </p>
          </div>

          <div style={styles.footerBox}>
            <h3 style={styles.footerBoxTitle}>Courses</h3>
            <p>BA</p>
            <p>BBA</p>
            <p>BCA</p>
            <p>BVOC</p>
          </div>

          <div style={styles.footerBox}>
            <h3 style={styles.footerBoxTitle}>Contact</h3>
            <p>Joshipara,Junagadh, Gujarat</p>
            <p>📞 +91 98224 299 961</p>
      
            <p></p>
          </div>
        </div>

        <div style={styles.copyright}>
          © 2026 Noble University | All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Home;