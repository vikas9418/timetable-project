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
      minHeight: "100vh",
      overflowX: "hidden"
    },

    /* ================= NAVBAR ================= */

    navbar: {
      position: "sticky",
      top: "0",
      background: "rgba(255,0,0,0.9)",
      padding: "12px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
      zIndex: "1000",
      backdropFilter: "blur(10px)",
      height: "62px",
      boxSizing: "border-box"
    },

    navLinks: {
      display: "flex",
      gap: "25px",
      alignItems: "center"
    },

    link: {
      color: "white",
      textDecoration: "none",
      cursor: "pointer",
      fontSize: "17px"
    },

    /* ================= HERO ================= */

    hero: {
      minHeight: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "50px",
      backdropFilter: "blur(10px)",
      background: "rgba(0,0,0,0.5)",
      color: "white",
      padding: "20px",
      flexWrap: "wrap",
      boxSizing: "border-box"
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
      height: "320px",
      boxSizing: "border-box"
    },

    heroRight: {
      textAlign: "center",
      maxWidth: "800px",
      width: "100%"
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
      justifyContent: "center",
      maxWidth: "700px",
      margin: "0 auto"
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
      width: "150px",
      boxSizing: "border-box"
    },

    /* ================= FORM ================= */

    form: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    },

    select: {
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "14px",
      width: "100%",
      boxSizing: "border-box"
    },

    submitBtn: {
      padding: "12px",
      background: "#0487A1",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "14px",
      width: "100%"
    },

    /* ================= INFO ================= */

    info: {
      background: "white",
      padding: "100px 20px",
      textAlign: "center",
      boxSizing: "border-box"
    },

    /* ================= FOOTER ================= */

    footer: {
      background: "black",
      color: "white",
      padding: "60px 20px 20px 20px",
      boxSizing: "border-box"
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
    <>
      {/* ================= MOBILE CSS ================= */}

      <style>
        {`
          @media (max-width: 768px) {

            .mobile-navbar {
              padding: 10px 15px !important;
              height: auto !important;
              min-height: 62px;
            }

            .mobile-logo {
              height: 50px !important;
              margin: -8px !important;
            }

            .mobile-university {
              font-size: 16px !important;
              margin: 8px !important;
              white-space: nowrap;
            }

            .mobile-navlinks {
              gap: 8px !important;
            }

            .mobile-navlink {
              font-size: 13px !important;
            }

            .mobile-hero {
              min-height: auto !important;
              padding: 35px 15px !important;
              gap: 35px !important;
              flex-direction: column !important;
            }

            .mobile-hero-left {
              width: 100% !important;
              max-width: 330px !important;
              margin: 0 !important;
              height: auto !important;
              padding: 25px !important;
              align-self: center !important;
            }

            .mobile-hero-right {
              width: 100% !important;
              max-width: 100% !important;
            }

            .mobile-title {
              font-size: 36px !important;
              line-height: 1.15 !important;
              letter-spacing: 1px !important;
              margin-top: 0 !important;
              margin-bottom: 25px !important;
            }

            .mobile-subtitle {
              font-size: 14px !important;
              margin-bottom: 20px !important;
            }

            .mobile-buttons {
              width: 100% !important;
              max-width: 360px !important;
            }

            .mobile-button {
              width: 140px !important;
              padding: 12px 10px !important;
              margin: 8px !important;
              font-size: 15px !important;
            }

            .mobile-info {
              padding: 60px 15px !important;
            }

            .mobile-info h2 {
              font-size: 24px !important;
            }

            .mobile-info p {
              font-size: 14px !important;
            }

            .mobile-footer {
              padding: 40px 15px 20px !important;
            }

            .mobile-footer-container {
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
            }

            .mobile-footer-box {
              margin: 15px !important;
            }

          }

          @media (max-width: 400px) {

            .mobile-university {
              font-size: 14px !important;
            }

            .mobile-navlink {
              font-size: 12px !important;
            }

            .mobile-title {
              font-size: 31px !important;
            }

            .mobile-button {
              width: 130px !important;
              margin: 6px !important;
            }

          }
        `}
      </style>

      <div style={styles.body}>

        {/* ================= NAVBAR ================= */}

        <div
          style={styles.navbar}
          className="mobile-navbar"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <img
              src="/NU-final-01.png"
              alt="logo"
              style={{
                height: "68px",
                margin: "-18px"
              }}
              className="mobile-logo"
            />

            <h2
              style={{
                margin: "15px",
                fontSize: "24px",
                fontWeight: "600"
              }}
              className="mobile-university"
            >
              NOBLE UNIVERSITY
            </h2>
          </div>

          <div
            style={styles.navLinks}
            className="mobile-navlinks"
          >
            <span
              style={styles.link}
              className="mobile-navlink"
            >
              Home
            </span>

            <span
              style={styles.link}
              className="mobile-navlink"
            >
              Courses
            </span>

            <span
              style={styles.link}
              className="mobile-navlink"
            >
              Form
            </span>
          </div>
        </div>

        {/* ================= HERO ================= */}

        <div
          style={styles.hero}
          className="mobile-hero"
        >

          {/* LEFT FORM */}

          <div
            style={styles.heroLeft}
            className="mobile-hero-left"
          >
            <h3
              style={{
                marginBottom: "15px",
                color: "#0487A1"
              }}
            >
              Quick Time Table
            </h3>

            <form
              style={styles.form}
              onSubmit={handleSubmit}
            >

              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                style={styles.select}
                required
              >
                <option value="">
                  Select Course
                </option>

                <option>BA</option>
                <option>BBA</option>
                <option>AI & ML</option>
                <option>Cyber Security</option>
                <option>BVOC</option>
              </select>

              <select
                name="day"
                value={formData.day}
                onChange={handleChange}
                style={styles.select}
                required
              >
                <option value="">
                  Select Day
                </option>

                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </select>

              <select
                name="lecture"
                value={formData.lecture}
                onChange={handleChange}
                style={styles.select}
                required
              >
                <option value="">
                  Select Lecture
                </option>

                <option>Lecture 1</option>
                <option>Lecture 2</option>
                <option>Lecture 3</option>
                <option>Lecture 4</option>
                <option>Lecture 5</option>
              </select>

              <button
                type="submit"
                style={styles.submitBtn}
              >
                View
              </button>

            </form>
          </div>

          {/* RIGHT SIDE */}

          <div
            style={styles.heroRight}
            className="mobile-hero-right"
          >

            <h1
              style={styles.heroTitle}
              className="mobile-title"
            >
              Class Time Table
            </h1>

            <p className="mobile-subtitle">
              Select your department to view schedule
            </p>

            <div
              style={styles.btnContainer}
              className="mobile-buttons"
            >

              {["Ba", "Bba", "Bca", "Bvoc"].map((btn) => (

                <button
                  key={btn}

                  style={{
                    ...styles.button,
                    transform:
                      hoverBtn === btn
                        ? "scale(1.05)"
                        : "scale(1)"
                  }}

                  className="mobile-button"

                  onMouseEnter={() =>
                    setHoverBtn(btn)
                  }

                  onMouseLeave={() =>
                    setHoverBtn(null)
                  }

                  onClick={() =>
                    goToPage(btn)
                  }
                >
                  {btn.toUpperCase()}
                </button>

              ))}

            </div>

          </div>
        </div>

        {/* ================= INFO ================= */}

        <div
          style={styles.info}
          className="mobile-info"
        >
          <h2>
            Welcome to Noble University
          </h2>

          <p>
            Select your course, day and lecture to view timetable
          </p>
        </div>

        {/* ================= FOOTER ================= */}

        <div
          style={styles.footer}
          className="mobile-footer"
        >

          <div
            style={styles.footerContainer}
            className="mobile-footer-container"
          >

            <div
              style={styles.footerBox}
              className="mobile-footer-box"
            >
              <h3 style={styles.footerBoxTitle}>
                About
              </h3>

              <p>
                Noble University Time Table System
                <br />
                click to show your lecture
              </p>
            </div>

            <div
              style={styles.footerBox}
              className="mobile-footer-box"
            >
              <h3 style={styles.footerBoxTitle}>
                Courses
              </h3>

              <p>BA</p>
              <p>BBA</p>
              <p>BCA</p>
              <p>BVOC</p>
            </div>

            <div
              style={styles.footerBox}
              className="mobile-footer-box"
            >
              <h3 style={styles.footerBoxTitle}>
                Contact
              </h3>

              <p>
                Joshipara, Junagadh, Gujarat
              </p>

              <p>
                📞 +91 98224 299 961
              </p>
            </div>

          </div>

          <div style={styles.copyright}>
            © 2026 Noble University | All Rights Reserved
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;