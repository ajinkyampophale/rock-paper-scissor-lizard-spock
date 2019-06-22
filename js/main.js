const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const restart = document.getElementById('restart');
const results = document.getElementById('results');
const result_modal = document.getElementById('result_modal');
const scoreboard = {
    player: 0,
    computer: 0
};

function play(e) {

    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

function getComputerChoice() {

    const rand = Math.random();

    if (rand < 0.2) {
        return 'rock';
    }
    else if (rand <= 0.4) {
        return 'paper';
    }
    else if (rand <= 0.6) {
        return 'scissors';
    }
    else if (rand <= 0.8) {
        return 'lizard';
    }
    else {
        return 'spock';
    }
}

function getWinner(p, c) {

    if (p === c) {
        return 'draw';
    }
    else if (p === 'rock') {

        if (c === 'scissors') {
            return 'player';
        }
        else if (c === 'lizard') {
            return 'player';
        }
        else {
            return 'computer';
        }
    }
    else if (p === 'paper') {

        if (c === 'rock') {
            return 'player';
        }
        else if (c === 'spock') {
            return 'player';
        }
        else {
            return 'computer';
        }
    }
    else if (p === 'scissors') {

        if (c === 'paper') {
            return 'player';
        }
        else if (c === 'lizard') {
            return 'player';
        }
        else {
            return 'computer';
        }
    }
    else if (p === 'lizard') {

        if (c === 'spock') {
            return 'player';
        }
        else if (c === 'paper') {
            return 'player';
        }
        else {
            return 'computer';
        }
    }
    else if (p === 'spock') {

        if (c === 'scissors') {
            return 'player';
        }
        else if (c === 'rock') {
            return 'player';
        }
        else {
            return 'computer';
        }
    }

}

function showWinner(winner, computerChoice) {

    if (winner === 'player') {
        scoreboard.player++;

        results.innerHTML = `
            <h5 class="text-win">You Win</h5>
            <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;

    }
    else if (winner === 'computer') {
        scoreboard.computer++;

        results.innerHTML = `
            <h5 class="text-lose">You Lose</h5>
            <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    }
    else {
        results.innerHTML = `
            <h5>It's a Draw</h5>
            <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    }

    score.innerHTML = `<p class="col-sm-6 player-score">Player: ${scoreboard.player}</p>
    <p class="col-sm-6 computer-score">Computer: ${scoreboard.computer}</p>`;

    $("#result_modal").modal("show");

}


function restartGame() {

    restart.style.display = 'none';

    scoreboard.player = 0;
    scoreboard.computer = 0;

    score.innerHTML = `<p class="col-sm-6 player-score">Player: ${scoreboard.player}</p>
    <p class="col-sm-6 computer-score">Computer: ${scoreboard.computer}</p>`;

}


//Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
restart.addEventListener('click', restartGame);


