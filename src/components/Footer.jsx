import React from "react";

const Footer = ({ fecha }) => {
  return (
    <footer className="text-left bg-dark bg-dark fixed-bottom">
      <div>
        <span className="text-muted"> Copyright © {fecha} CANESTRARI</span>
      </div>
    </footer>
  );
};

export default Footer;
