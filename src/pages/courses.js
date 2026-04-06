import React, { useEffect, useState } from "react";
import api from "../api";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await api.get("/courses");
      setCourses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Nos cours en ligne</h1>

      {courses.map((course) => (
        <div
          key={course._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px"
          }}
        >
          <h2>{course.title}</h2>
          <p>{course.description}</p>

          <video width="400" controls>
            <source src={course.videoUrl} type="video/mp4" />
          </video>

          <br />
          <a href={course.pdfUrl} target="_blank" rel="noreferrer">
            Télécharger le PDF
          </a>
        </div>
      ))}
    </div>
  );
}

export default Courses;