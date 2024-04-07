let you_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".ele");

const msg = document.querySelector("#msg_box");
const msg2 = document.querySelector("#msg_box2");

const you_points = document.querySelector("#you_points");
const comp_points = document.querySelector("#comp_points");

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const you_choice = choice.getAttribute("id");
        // console.log("choice was clicked",you_choice);
        play_game(you_choice);
    });
});

const play_game = (you_choice) => {
    // console.log("your choice ", you_choice);
    const comp_choice = gen_comp_choice();
    // console.log('comp choice', comp_choice);

    if (you_choice === comp_choice) {
        draw_game();
    } else {
        let you_win = true;
        if (you_choice === "rock") {
            you_win = comp_choice === "paper" ? false : true;
        } else if (you_choice === "paper") {
            you_win = comp_choice === "scissor" ? false : true;
        } else {
            you_win = comp_choice === "rock" ? false : true;
        }
        show_winner(you_win);
    }
}

const gen_comp_choice = () => {
    let options = ["rock", "paper", "scissor"];
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
}

const draw_game = () => {
    // console.log("game draw");
    msg2.innerText="game draw";
    msg.style.backgroundColor="green";
}

const show_winner = (you_win) => {
    if (you_win) {
        you_score++;
        you_points.innerText=you_score;
        msg2.innerText="you won";
        msg.style.backgroundColor="gold";
        // console.log("you win");
    } else {
        comp_score++;
        comp_points.innerText=comp_score;
        msg2.innerText="you lose";
        msg.style.backgroundColor="red";
        // console.log("you lose");
    }
}