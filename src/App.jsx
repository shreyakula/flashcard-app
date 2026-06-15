import { useState } from "react";
import Flashcard from "./Flashcard";

const cards = [
  { question: "What does CPU stand for?", answer: "Central Processing Unit" },
  { question: "What is the time complexity of binary search?", answer: "O(log n)" },
  { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
  { question: "What is a closure in JavaScript?", answer: "A function that retains access to its outer scope even after the outer function returns" },
  { question: "What does RAM stand for?", answer: "Random Access Memory" },
  { question: "What is the base case in recursion?", answer: "The condition that stops the recursive calls" },
  { question: "What does API stand for?", answer: "Application Programming Interface" },
  { question: "What is Big O notation used for?", answer: "Describing the worst-case time or space complexity of an algorithm" },
  { question: "What is a primary key in a database?", answer: "A unique identifier for each record in a table" },
  { question: "What does DNS stand for?", answer: "Domain Name System" },
];

function getRandomIndex(currentIndex, total) {
  let next;
  do { next = Math.floor(Math.random() * total); } while (next === currentIndex && total > 1);
  return next;
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardKey, setCardKey] = useState(0);

  function handleNext() {
    const next = getRandomIndex(currentIndex, cards.length);
    setCurrentIndex(next);
    setCardKey(k => k + 1);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#7c6fad", fontFamily: "'Lora', serif", fontWeight: 600, marginBottom: "0.4rem" }}>
          Study Tool
        </p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(1.8rem, 5vw, 2.4rem)", color: "#1e1b3a", marginBottom: "0.4rem", letterSpacing: "-0.01em" }}>
          CS Flashcards
        </h1>
        <p style={{ fontSize: "13px", color: "#5a5680", lineHeight: 1.6, maxWidth: "32ch", margin: "0 auto 0.75rem", fontFamily: "'DM Sans', sans-serif" }}>
          Core computer science concepts — from data structures to web fundamentals.
        </p>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: "5px",
          background: "rgba(255,255,255,0.6)",
          border: "0.5px solid rgba(255,255,255,0.9)",
          borderRadius: "99px", padding: "3px 12px",
          fontSize: "11px", color: "#6b6490", fontFamily: "'DM Sans', sans-serif",
        }}>
          🗂 {cards.length} cards in this set
        </span>
      </div>

      {/* Card */}
      <Flashcard key={cardKey} card={cards[currentIndex]} />

      {/* Dots */}
      <div style={{ display: "flex", gap: "5px", marginBottom: "1.5rem" }}>
        {cards.map((_, i) => (
          <div key={i} style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: i === currentIndex ? "#7c6fad" : "rgba(120,100,200,0.25)",
            transform: i === currentIndex ? "scale(1.35)" : "scale(1)",
            transition: "background 0.2s, transform 0.2s",
          }} />
        ))}
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => document.dispatchEvent(new CustomEvent('flip'))}
          style={{
            cursor: "pointer", borderRadius: "99px", padding: "9px 20px",
            fontSize: "13px", fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
            background: "rgba(255,255,255,0.65)",
            border: "0.5px solid rgba(255,255,255,0.9)",
            color: "#3d3660",
          }}
        >
          ↺ Flip
        </button>
        <button
          onClick={handleNext}
          style={{
            cursor: "pointer", borderRadius: "99px", padding: "9px 22px",
            fontSize: "13px", fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
            background: "#7c6fad", color: "#fff", border: "none",
          }}
        >
          Next card →
        </button>
      </div>
    </div>
  );
}

export default App;
