import React from "react";
import "./Reason-To-Join.css";

const REASONS = [
  {
    title: "Enjoy on your TV",
    desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: "📺",
  },
  {
    title: "Download your shows to watch offline",
    desc: "Save your favorites easily and always have something to watch.",
    icon: "📥",
  },
  {
    title: "Watch everywhere",
    desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: "📱",
  },
  {
    title: "Create profiles for kids",
    desc: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon: "🧒",
  },
];

function ReasonToJoin() {
  return (
    <section className="reasons">
      <h2 className="reasons__title">More Reasons to Join</h2>
      <div className="reasons__cards">
        {REASONS.map((reason, idx) => (
          <div className="reasons__card" key={idx}>
            <h3 className="reasons__card-title">{reason.title}</h3>
            <p className="reasons__card-desc">{reason.desc}</p>
            <div className="reasons__card-icon">{reason.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReasonToJoin;
