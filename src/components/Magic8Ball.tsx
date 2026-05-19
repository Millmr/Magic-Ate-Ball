import { useState, useCallback } from 'react';
import './Magic8Ball.css';

const ANSWERS = [
  "Mexican",
  "Chinese",
  "McDonalds",
  "Hooters",
  "Olive Garden",
  "Japanese",
  "Vietnamese",
  "Korean",
  "American",
  "French",
  "Greek",
  "KPot",
  "Taco Bell",
];

export default function Magic8Ball() {
  const [isShaking, setIsShaking] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);

  const shakeBall = useCallback(() => {
    if (isShaking) return;

    setIsShaking(true);
    setAnswer(null); // Hide current answer while shaking

    // Randomize the answer
    const randomIndex = Math.floor(Math.random() * ANSWERS.length);
    const newAnswer = ANSWERS[randomIndex];

    // Wait for the shake animation to finish before showing the answer
    setTimeout(() => {
      setIsShaking(false);
      setAnswer(newAnswer);
    }, 600); // 600ms matches the animation duration
  }, [isShaking]);

  return (
    <div
      className={`magic-8-ball ${isShaking ? 'shaking' : ''}`}
      onClick={shakeBall}
      role="button"
      aria-label="Magic Ate Ball"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          shakeBall();
        }
      }}
    >
      <div className="window">
        {/* The classic '8' shown before an answer is generated */}
        <div className={`number-8 ${answer ? 'hidden' : ''}`}>
          8
        </div>

        {/* The answer triangle */}
        <div className={`triangle-container ${answer ? 'visible' : ''}`}>
          <div className="triangle">
            <span className="triangle-text">{answer}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
