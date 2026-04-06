import React from "react";

function Dashboard() {
  return (
    <div>
      <h1>Bienvenue sur le Dashboard</h1>
    </div>
  );
}

export default Dashboard;
const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "/";
}