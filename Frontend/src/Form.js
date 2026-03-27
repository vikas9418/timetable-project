import { useEffect, useState } from "react";

function Form({ course, day, lecture, setPage }) {
  const [apiSubject, setApiSubject] = useState("");
  const [loading, setLoading] = useState(true);

  // Safe Lecture Number extraction (e.g., "Lecture 1" -> "1")
  const lectureNumber = lecture && lecture.includes(" ") ? lecture.split(" ")[1] : lecture;

  useEffect(() => {
    if (!course || !day || !lectureNumber) return;

    setLoading(true);
  
fetch(`http://localhost:5000/timetable?course=${course.toUpperCase()}&day=${day}&lecture=${lectureNumber}`)
      .then((res) => res.json())
      .then((data) => {
        // Agar API array bhej rahi hai toh pehla element lo
        if (data && data.length > 0) {
          setApiSubject(data[0].subject);
        } else {
          setApiSubject("Subject Not Found");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("API Error:", err);
        setApiSubject("Error Loading Data");
        setLoading(false);
      });
  }, [course, day, lectureNumber]);

  const styles = {
    page: { minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg,#0c68da,#000000)" },
    card: { background: "white", padding: "40px", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.3)", textAlign: "center", width: "350px" },
    title: { marginBottom: "20px", color: "#0c68da" },
    day: { fontSize: "22px", fontWeight: "600", marginBottom: "10px" },
    lecture: { color: "gray", marginBottom: "20px" },
    subject: { fontSize: "20px", fontWeight: "bold", color: "#0487A1", marginBottom: "30px" },
    btn: { padding: "12px 25px", border: "none", borderRadius: "10px", background: "linear-gradient(45deg,#00e1ff,#0487A1)", color: "white", cursor: "pointer", fontSize: "15px" }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>{course} Time Table</h2>
        <div style={styles.day}>{day}</div>
        <div style={styles.lecture}>{lecture}</div>
        <div style={styles.subject}>
          {/* Ab data sirf API se aayega */}
          {loading ? "Loading..." : apiSubject}
        </div>
        <button style={styles.btn} onClick={() => setPage("Home")}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Form;