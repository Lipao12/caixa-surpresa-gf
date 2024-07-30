import { MoveUp } from "lucide-react";
import { useState } from "react";
import { Gifts, MainGift } from "./assets/gifts";
import SurpriseBox from "./components/SurpriseBox";
import SurpriseContent from "./components/SurpriseContent";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTheMain, setIsTheMain] = useState(false);
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
    setIsTheMain(true);
  };

  const handleOpenBoxForGifts = async () => {
    let updatedSurprises = surprises;
    if (updatedSurprises.length === 0) {
      updatedSurprises = [
        {
          type: "message",
          content:
            "Criatividade acabou, meu bem. 😳🙄😶\n Se quiser ver as mensagens de novo tu tem que atualizar a página.\n Ahh, só mais uma coisa, espero que tenha percebido algumas frases de música que utilizei (sem ser nas músicas) e a referência as falas daquele cara esquisito de Gossip 😉 \n É noix, minha gata! 🤍",
        },
      ];
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
    setIsTheMain(false);
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
      {isOpen && (
        <button
          type="button"
          onClick={closeBox}
          className="absolute top-0 left-0 mt-4 ml-4 text-white bg-gray-800 rounded-full px-3 py-1 hover:bg-gray-700 transition duration-200"
        >
          Voltar
        </button>
      )}
      <div className="relative">
        {isOpen ? (
          <div
            onClick={isTheMain ? () => {} : handleOpenBoxForGifts}
            className="transition-opacity duration-500 opacity-0 fade-in space-y-10"
            onAnimationEnd={(e) =>
              e.currentTarget.classList.remove("opacity-0")
            }
          >
            <SurpriseContent content={surprise} />
            {surprises.length + 1 === Gifts.length && (
              <span className="absolute bottom-2 right-2 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              </span>
            )}
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
