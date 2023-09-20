import { useState, useEffect } from "react";

const options = [
  { id: 0, name: "Piedra", emoji: "✊", beats: [2, 3] },
  { id: 1, name: "Papel", emoji: "✋", beats: [0] },
  { id: 2, name: "Tijera", emoji: "✌", beats: [1, 3] },
  { id: 3, name: "Lagarto", emoji: "🤏", beats: [1] },
  { id: 4, name: "Spock", emoji: "🖖", beats: [0, 3] },
];

const getResult = (userChoice, computerChoice) => {
 
  if (userChoice === computerChoice) {
    return 0;
  }

  if (options[userChoice].beats.includes(computerChoice)) {
    return 1;
  }

  return 2;
};

function OptionButton({option, handlePlay, disabled}){
  return(
    <button
      className="px-4 py-2 m-2 text-xl font-bold text-white bg-yellow-500 hover:bg-yellow-700 rounded-full"
      disabled={disabled}
      onClick={()=>handlePlay(option.id)}
      title={option.name}
    >
      {option.emoji}
    </button>
  )
}

function useChoices (){
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userMessage, setUserMessage] = useState(null);
  const [computerMessage, setComputerMessage] = useState(null);
  const [result, setResult] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //cuando cambia el valor de userChoice
  useEffect(() => {
    if (userChoice !== null) {
      setUserMessage(
        `Has elegido ${options[userChoice]?.emoji} - ${options[userChoice]?.name}`
      );
    }
  }, [userChoice]);

  //cuando cambia el valor de computerChoice
  useEffect(() => {
    if (computerChoice !== null) {
      setComputerMessage(
        `El ordenador a elegido ${options[computerChoice]?.emoji} - ${options[computerChoice]?.name}`
      );
    }
  }, [computerChoice]);


  const handlePlay = (choice) => {
    setUserChoice(choice);
    setDisabled(true);

    const ramdomChoice = Math.floor(Math.random() * 5);

    //simular delay en la eleccion del computer
    setTimeout(() => {
      setComputerChoice(ramdomChoice);
    }, 1500);

    //delay en calcular la respuesta
    setTimeout(() => {
      setResult(getResult(choice, ramdomChoice));
    }, 1500);

    clearTimeout();
  };

  const reset = ()=>{
    setUserChoice(null);
    setComputerChoice(null);
    setComputerMessage(null);
    setUserMessage(null);
    setResult(null);
    setDisabled(false);
  }

  //se devuelve objeto
  return{
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    result,
    disabled,
    handlePlay,
    reset,
  }

}

function Game() {

  //desestructuramos el objeto que devuelve la function
  const {
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    result,
    disabled,
    handlePlay,
    reset,
  } = useChoices();
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="rounded-lg p-4 bg-gray-500">
        <h1 className="text-3xl mb-4 text-center font-bold">¡A jugar!</h1>

        <div className="max-w-md mx-auto">
          {options.map((option) => (
            //botones para elegir 
           <OptionButton 
            key={option.id}
            option={option}
            handlePlay={handlePlay}
            disabled={disabled}
           />
          ))}

          {/* mensaje con la eleccion del usuario */}
          {userChoice !== null && <p className="text-xl mt-4">{userMessage}</p>}

          {/* mensaje con la eleccion del computador */}
          {computerChoice !== null && (
            <p className="text-xl mt-4">{computerMessage}</p>
          )}

          {/* mensaje con el resultado */}
          {result !== null && (
            <div className="mt-8">

              {/* si empate */}
              {result == 0 && <p className="text-xl mt-4">🤷‍♂️ Empate</p>}

              {/* gana usuario */}
              {result == 1 && (
                <p className="text-xl mt-4">
                  ✔ Has ganado con {options[userChoice]?.name} contra{" "}
                  {options[computerChoice]?.name}
                </p>
              )}

              {/* gana computador */}
              {result == 2 && (
                <p className="text-xl mt-4">
                  ❌ Has perdido con {options[userChoice]?.name} contra{" "}
                  {options[computerChoice]?.name}
                </p>
              )}

              {/* boton reinicio */}
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-black font-semibold p-3 mt-4" 
                onClick={reset}
              >
                Jugar de nuevo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Game;
