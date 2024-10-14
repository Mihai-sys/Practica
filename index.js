class Game {
    constructor() {
        this.numberToGuess = Math.floor(Math.random() * 11);

    }

    startGame() {
        console.log("Game started");
        this.setup();
    }

    setup() {
        const input = `<label for="guess">
        Introduceti un numar intre 0 si 10!
        </label>
        <input id="guess" "type=number">
        <button id= "check-answer">Verificaraspuns</button>`;
        const container = document.createElement("div");
        container.innerHTML = input;
        const gameContainer = document.querySelector(".game-container");
        gameContainer.appendChild(container);
        this.setupCheckButton;
    }

}

setupCheckButton() {
    const btn = document.getElementById("check-answer");
    const input = document.getElementById("guess");
    const valueAsInt = parseInt(input.value);
    btn.addEventListener("click", () => this.checkAnswer(input.value));
}

checkAnswer(answer) {
   const result = document.getElementById("result");
    if (answer === this.numberToGuess){
        
        result.textContent = "Ai ghicit";
        result.className = "success";
    }else{
        console.log("Mai incearca!");
        result.textContent = "Mai incearca!";
    }

}

const startGameBtn = document.querySelector(".game-container > button");
startGameBtn.addEventListener("click", () =>{
    const game = new Game();
    game.startGame();
    console.log(game);
    
})