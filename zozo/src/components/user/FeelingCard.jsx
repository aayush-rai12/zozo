import React, { useState } from "react";
import "./FeelingCard.css";

function FeelingCard() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [feelings, setFeelings] = useState("");
  const [errors, setErrors] = useState({ mood: "", feelings: "" });
  const [cards, setCards] = useState([]); // State to store cards

  const moodColors = {
    happy: "#FFC300",
    sad: "#6495ED",
    angry: "#FF4500",
    relaxed: "#90EE90",
    excited: "#FF8C00",
    love: "#FF69B4",
  };

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setErrors((prev) => ({ ...prev, mood: "" })); // Clear mood error on selection
  };

  const handleFeelingsChange = (e) => {
    setFeelings(e.target.value);
    setErrors((prev) => ({ ...prev, feelings: "" })); // Clear feelings error on input
  };

  // Encapsulated card creation logic
  const createCard = (feelings, mood, color) => {
    setCards((prev) => [...prev, { feelings, mood, color }]);
  };

  const userFeelings = () => {
    const newErrors = { mood: "", feelings: "" };

    if (!feelings.trim()) {
      newErrors.feelings = "Please enter your feelings.";
    }
    if (!selectedMood) {
      newErrors.mood = "Please select a mood.";
    }

    setErrors(newErrors);

    if (newErrors.feelings || newErrors.mood) {
      return; // Stop execution if there are errors
    }

    // Use createCard function to add a new card
    createCard(feelings, selectedMood, moodColors[selectedMood]);

    // Reset input fields
    setFeelings("");
    setSelectedMood(null);
  };

  const startHeartRain = (index) => {
    const card = document.querySelector(`.card-${index}`);
    const numberOfHearts = 40;

    for (let i = 0; i < numberOfHearts; i++) {
      let heart = document.createElement("span");
      heart.classList.add("heart");
      heart.innerHTML = "❤️";

      heart.style.left = `${Math.random() * 100}%`;
      const delay = Math.random() * 2;
      heart.style.animationDelay = `${delay}s`;
      heart.style.animationDuration = `${2 + Math.random() * 1}s`;

      card.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, (2 + Math.random() * 1) * 1000);
    }
  };

  return (
    <div className="feel_bg-gradient">
      <div className="feel_card">
        <h5 className="feel_card-title">Share Your Feeling</h5>

        {/* Textarea with Floating Label */}
        <div className="feel_form-floating">
          <textarea
            className="feel_form-control"
            placeholder=""
            id="feel_feeling"
            style={{ height: "100px" }}
            value={feelings}
            onChange={handleFeelingsChange}
          ></textarea>
          <label htmlFor="feel_feeling">Enter your feelings here</label>
          {errors.feelings && <span className="error-text">{errors.feelings}</span>}
        </div>

        {/* Mood-based Emojis with Themes */}
        <div className="feel_mood-section my-4">
          <p className="feel_mood-title text-muted">Select Mood</p>
          <div className="feel_mood-buttons">
            {Object.keys(moodColors).map((mood) => (
              <button
                key={mood}
                className="feel_mood-button"
                style={{
                  backgroundColor: selectedMood === mood ? moodColors[mood] : "#f8f9fa",
                }}
                onClick={() => handleMoodSelect(mood)}
              >
                {mood === "happy" && "😊"}
                {mood === "sad" && "😢"}
                {mood === "angry" && "😡"}
                {mood === "relaxed" && "😌"}
                {mood === "excited" && "🤩"}
                {mood === "love" && "❤️"}
              </button>
            ))}
          </div>
          {errors.mood && <span className="error-text">{errors.mood}</span>}
        </div>

        {/* Save Button */}
        <button type="button" className="feel_btn-save" onClick={userFeelings}>
          Save
        </button>
      </div>
      
      {/* Dynamically Render Cards */}
      <div className="cards-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`share_feeling_card card-${index}`}
            style={{ backgroundColor: card.color }}
          >
            <div className="feeling_card_header">{card.mood}</div>
            <div className="share_feelings">
              <p className="feeling_text">{card.feelings}</p>
            </div>
            <button className="like-button" onClick={() => startHeartRain(index)}>
              Like
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeelingCard;
