
"use strict";

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const ring = document.querySelector(".ring");
const toggle = document.querySelector(".ring-toggle");

if (ring && toggle) {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const setRunning = (run) => {
    ring.style.animationPlayState = run ? "running" : "paused";
    toggle.textContent = run ? "Pause motion" : "Play motion";
  };
  setRunning(!reduce);
  toggle.addEventListener("click", () => {
    setRunning(ring.style.animationPlayState === "paused");
  });
}
