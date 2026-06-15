import { useState, useEffect } from "react";

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const handler = () => setFlipped(f => !f);
    document.addEventListener('flip', handler);
    return () => document.removeEventListener('flip', handler);
  }, []);

  const faceBase = {
    position: "absolute", inset: 0,
    backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
    borderRadius: "20px",
    display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center",
    padding: "2rem", gap: "0.65rem",
    border: "0.5px solid rgba(255,255,255,0.95)",
    boxShadow: "0 8px 32px rgba(120,100,200,0.12), 0 1.5px 4px rgba(0,0,0,0.05)",
  };

  return (
    <div
      onClick={() => setFlipped(f => !f)}
      style={{ width: "min(460px, 88vw)", height: "250px", cursor: "pointer", perspective: "1000px", marginBottom: "1.5rem" }}
    >
      <div style={{
        width: "100%", height: "100%",
        position: "relative", transformStyle: "preserve-3d",
        transition: "transform 0.52s cubic-bezier(0.23, 1, 0.32, 1)",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}>
        {/* Front */}
        <div style={{ ...faceBase, background: "rgba(255,255,255,0.72)", backdropFilter: "blur(16px)" }}>
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9b8ec4", fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
            Question
          </span>
          <p style={{ fontSize: "16px", fontWeight: 600, color: "#1e1b3a", textAlign: "center", lineHeight: 1.6, maxWidth: "32ch", fontFamily: "'Lora', serif" }}>
            {card.question}
          </p>
          <span style={{ fontSize: "11px", color: "#aaa8c4", marginTop: "0.2rem", fontFamily: "'DM Sans', sans-serif" }}>click to flip</span>
        </div>

        {/* Back */}
        <div style={{ ...faceBase, background: "rgba(255,255,255,0.82)", backdropFilter: "blur(16px)", transform: "rotateY(180deg)" }}>
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3a9e7a", fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
            Answer
          </span>
          <p style={{ fontSize: "16px", fontWeight: 600, color: "#1e1b3a", textAlign: "center", lineHeight: 1.6, maxWidth: "32ch", fontFamily: "'Lora', serif" }}>
            {card.answer}
          </p>
          <span style={{ fontSize: "11px", color: "#aaa8c4", marginTop: "0.2rem", fontFamily: "'DM Sans', sans-serif" }}>click to flip back</span>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
