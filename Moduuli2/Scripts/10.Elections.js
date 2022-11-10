const CANDIDATENUMBER = parseInt(prompt("Ehdokkaiden määrä"));

const CANDIDATELIST = []

for (let candidate = 1; candidate <= CANDIDATENUMBER; candidate++) {
    let candidateName = prompt("Syötä " + candidate + ".:n ehdokkaan nimi");
    CANDIDATELIST.push({name: candidateName, votes: 0});
}

const VOTERNUMBER = parseInt(prompt("Äänestysten määrä"));

for (let voter = 1; voter <= VOTERNUMBER; voter++) {
    let vote = prompt("Äänestä");

    for (let candidate = 0; candidate < CANDIDATELIST.length; candidate++) {
        if (vote == CANDIDATELIST[candidate].name) {
            CANDIDATELIST[candidate].votes += 1;
        }
    }
}

const VOITTAJAIDLISTA = CANDIDATELIST.map(id => {return id.votes});
const VOITTAJAVOTES = Math.max.call(...VOITTAJAIDLISTA);

const WINNERLIST = [];

for (let candidate = 0; candidate < CANDIDATELIST.length; candidate++) {
    if (CANDIDATELIST[candidate].votes == VOITTAJAVOTES) {
        WINNERLIST.push(CANDIDATELIST[candidate]);
    }
}

let winners = "";

for (let winner = 0; winner < WINNERLIST.length; winner++) {
    if (winner == 0) {
        winners += WINNERLIST[winner].name;
    } else if (winner == WINNERLIST.length - 1) {
        winners += " ja " + WINNERLIST[winner].name;
    } else if (winner > 0) {winners += ", " + WINNERLIST[winner].name;
    }
}

console.log("Äänestyksen voittaja(t): " + winners);

for (let candidate = 0; candidate < CANDIDATELIST.length; candidate++) {
    console.log(CANDIDATELIST[candidate].name + ": " + CANDIDATELIST[candidate].votes + " votes");
}