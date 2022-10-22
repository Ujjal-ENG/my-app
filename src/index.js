import React from "react";
import { createRoot } from "react-dom/client";

const index = 0;



setInterval(() => {
  const element = (
    <h1 className="heading" tabIndex={index}>
      <span className="text">Hello {new Date().toLocaleTimeString()}</span>
    </h1>
  );
  root.render(element);
}, 1000);

const container = document.getElementById("root");
const root = createRoot(container);