import { useState } from "react";
import SurpriseBox from "./components/SurpriseBox";
import SurpriseContent from "./components/SurpriseContent";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [surprise, setSurprise] = useState<string | null>(null);

  const surprises = [
    "Você é incrível!",
    "https://via.placeholder.com/150",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp",
  ];

  const handleOpenBox = () => {
    const randomSurprise =
      surprises[Math.floor(Math.random() * surprises.length)];
    setSurprise(randomSurprise);
    setIsOpen(true);
  };

  return (
    <div className="flex justify-center min-h-screen flex-col items-center ">
      <div className="area z-0 bg-rose-light">
        <ul className="circles">
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
      <div className="">
        {isOpen ? (
          <>
            <SurpriseContent content={surprise} />
          </>
        ) : (
          <div className="space-y-10">
            <h1 className="text-[20px]">
              Ei meu bem, clique na caixinha de presente 🤍🤍
            </h1>
            <SurpriseBox onOpen={handleOpenBox} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
