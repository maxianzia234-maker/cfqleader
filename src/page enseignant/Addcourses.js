import React, { useState } from "react";
import api from "../api";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const addCourse = async () => {
    if (!title || !description) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    try {
      setLoading(true);

      await api.post("/courses/add", {
        title,
        description,
        videoUrl,
        pdfUrl
      });

      alert("Cours ajouté avec succès");

      setTitle("");
      setDescription("");
      setVideoUrl("");
      setPdfUrl("");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'ajout du cours");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Ajouter un nouveau cours</h2>

      <input
        style={styles.input}
        placeholder="Titre du cours"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        style={styles.textarea}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        style={styles.input}
        placeholder="Lien vidéo YouTube"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />

      <input
        style={styles.input}
        placeholder="Lien PDF"
        value={pdfUrl}
        onChange={(e) => setPdfUrl(e.target.value)}
      />

      <button style={styles.button} onClick={addCourse}>
        {loading ? "Ajout..." : "Ajouter le cours"}
      </button>
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px"
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    height: "100px"
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};

export default AddCourse;