import React from "react";

function Footer() {
  return (
    <footer style={{ padding: "10px", background: "#eee", marginTop: "20px", textAlign: "center" }}>
      <p>&copy; {new Date().getFullYear()} Book Explorer</p>
    </footer>
  );
}

export default Footer;
