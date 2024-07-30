import { useState } from "react";
import { Gifts } from "./assets/gifts";
import SurpriseBox from "./components/SurpriseBox";
import SurpriseContent from "./components/SurpriseContent";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [surprise, setSurprise] = useState<{
    type: string;
    content: string;
    message?: string;
  } | null>(null);

  const handleOpenBox = () => {
    const rand_const = Math.floor(Math.random() * Gifts.length);
    const randomSurprise = Gifts[13];
    setSurprise(randomSurprise);
    setIsOpen(true);
  };

  const closeBox = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center min-h-screen flex-col items-center">
      <div className="area z-0 bg-rose-light">
        <ul className="circles text-[50px]">
          <li>🤍</li>
          <li>🤍</li>
          <li>😻</li>
          <li>🤍</li>
          <li>🤍</li>
          <li>😻</li>
          <li>🤍</li>
          <li>🤍</li>
          <li>😻</li>
          <li>🤍</li>
          <li>🤍</li>
          <li>😻</li>
          <li>🤍</li>
          <li>🤍</li>
          <li>😻</li>
          <li>🤍</li>
          <li>🤍</li>
        </ul>
      </div>
      <div className="relative">
        {isOpen ? (
          <div
            onClick={closeBox}
            className="transition-opacity duration-500 opacity-0 fade-in space-y-10"
            onAnimationEnd={(e) =>
              e.currentTarget.classList.remove("opacity-0")
            }
          >
            <SurpriseContent content={surprise} />
          </div>
        ) : (
          <div
            className={`space-y-10 ${
              isOpen && "transition-opacity duration-500 opacity-100 fade-out"
            }`}
          >
            <h1 className="text-[20px] animate-bounce mr-2 ml-2 text-center">
              Ei meu bem, clique na caixinha de presente 😻
            </h1>
            <SurpriseBox onOpen={handleOpenBox} />
            <h1 className="text-[20px] mr-2 ml-2 text-center">
              Feliz 2 meses da gente justos 🤍
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
