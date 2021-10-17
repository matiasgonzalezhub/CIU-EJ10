import React from "react";

const Footer = ({ fecha }) => {
  return (
    <footer className="text-left bg-dark bg-dark fixed-bottom">
      <div >
        <span className="text-muted"> Canestrari Año {fecha}</span>
      </div>
    </footer>
  );
};

export default Footer;
