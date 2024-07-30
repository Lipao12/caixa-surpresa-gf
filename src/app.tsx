import { MoveUp } from "lucide-react";
import { useState } from "react";
import { Gifts, MainGift } from "./assets/gifts";
import SurpriseBox from "./components/SurpriseBox";
import SurpriseContent from "./components/SurpriseContent";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [surprises, setSurprises] = useState(Gifts);
  const [surprise, setSurprise] = useState<
    | {
        type: string;
        content: string;
        message?: string;
        desktopMessage?: string;
      }
    | null
    | undefined
  >();

  const handleOpenBox = () => {
    setSurprise(MainGift);
    setIsOpen(true);
  };

  const handleOpenBoxForGifts = async () => {
    let updatedSurprises = surprises;
    if (updatedSurprises.length === 0) {
      updatedSurprises = [...Gifts];
    }

    // Select random surprise
    const rand_const = Math.floor(Math.random() * updatedSurprises.length);
    const randomSurprise = updatedSurprises[rand_const];
    setSurprise(randomSurprise);

    // Remove the selected surprise from the array
    updatedSurprises = updatedSurprises.filter(
      (_, index) => index !== rand_const
    );
    setSurprises(updatedSurprises);

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
            <div>
              <div onClick={handleOpenBoxForGifts}>
                <h1 className="text-[20px] mr-2 ml-2 text-center underline cursor-pointer">
                  Feliz 2 meses da gente justos 🤍
                </h1>
              </div>
              <div className="flex items-center mt-2 text-gray-400 justify-end">
                <span className="text-[16px] text-gray-400 ml-2">
                  <MoveUp />
                  {""}
                  depois clique em mim
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
