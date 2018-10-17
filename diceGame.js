function rollDie(numberOfSides) {
    let outcome = Math.floor(Math.random() * numberOfSides) + 1;
    return outcome;
}
function runGame() {
    rollDie();
    gameLogic();
    gameResults();

}


function gameLogic() {
    let die1 = document.getElementById("die1");
    let die2 = document.getElementById("die2");
    let firstStatus = document.getElementById("firstStatus");
    let status = document.getElementById("status");
    let text;
    let numberSidedDie = prompt("Pick a 4, 6, 8, 10, 12, 20 sided die.");

    switch (numberSidedDie) {
        case "4":
            text = "4 Sided!";
            break;
        case "6":
            text = "6 Sided!";
            break;
        case "8":
            text = "8 Sided!";
            break;
        case "10":
            text = "10 Sided!";
            break;
        case "12":
            text = "12 Sided!";
            break;
        case "20":
            text = "20 Sided!";
            break;
        default:
            numberSidedDie = 0;
            text = "Invalid entry! Please pick a 4, 6, 8, 10, 12, 20 sided die.";
            break;
    }
    alert(text);
    let d1 = rollDie(numberSidedDie)
    let d2 = rollDie(numberSidedDie)
    let diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "You rolled" + " " + diceTotal + ".";
    firstDie1.innerHTML = d1;
    firstStatus.innerHTML = "You rolled" + " " + d1 + ".";

    gameResults(d1, d2, diceTotal, status, firstStatus);

}
function gameResults(d1, d2, diceTotal, status, firstStatus) {
    if (d1 == d2) {
        status.innerHTML += " DOUBLES! You don't have to drink! Go again!";
    } else if (diceTotal == 1) {
        firstStatus.innerHTML += " ONE! Waterfall! Everyone starts chugging their drink. A player cannot stop drinking until the person to their right has stopped drinking."
        status.innerHTML += " ONE! Waterfall! Everyone starts chugging their drink. A player cannot stop drinking until the person to their right has stopped drinking."
    } else if (diceTotal == 2) {
        firstStatus.innerHTML += " TWO! Is for you! Pick someone to drink!"
        status.innerHTML += " TWO! Is for you! Pick someone to drink!"
    } else if (diceTotal == 3) {
        firstStatus.innerHTML += " THREE! Is for me! I drink!"
        status.innerHTML += " THREE! Is for me! I drink!"
    } else if (diceTotal == 4) {
        firstStatus.innerHTML += " FOUR! Touch the floor! Last player to touch the floor must drink!"
        status.innerHTML += " FOUR! Touch the floor! Last player to touch the floor must drink!"
    } else if (diceTotal == 5) {
        firstStatus.innerHTML += " FIVE! Is for guys! All guys drink!"
        status.innerHTML += " FIVE! Is for guys! All guys drink!"
    } else if (diceTotal == 6) {
        firstStatus.innerHTML += " SIX! Is for me! I drink!"
        status.innerHTML += " SIX! Is for me! I drink!"
    } else if (diceTotal == 7) {
        firstStatus.innerHTML += " SEVEN! Is for heaven! Last player to put hand in the air must drink!"
        status.innerHTML += " SEVEN! Is for heaven! Last player to put hand in the air must drink!"
    } else if (diceTotal == 8) {
        firstStatus.innerHTML += " EIGHT! Pick a mate! Pick a player to drink with you every time you drink!"
        status.innerHTML += " EIGHT! Pick a mate! Pick a player to drink with you every time you drink!"
    } else if (diceTotal == 9) {
        firstStatus.innerHTML += " NINE! Is for rhyme! The player who rolled must say a word. The other players have 10 seconds to say a word that rhymes with the original one. The first player who fails to think of a rhyme must drink."
        status.innerHTML += " NINE! Is for rhyme! The player who rolled must say a word. The other players have 10 seconds to say a word that rhymes with the original one. The first player who fails to think of a rhyme must drink."
    } else if (diceTotal == 10) {
        firstStatus.innerHTML += " TEN! Never have I ever! Everyone at the table must put up three fingers. The player who rolled the cards begins a game of “never have I ever,” and the other players lower a finger if they have done that activity. The first player to lower all their fingers must drink."
        status.innerHTML += " TEN! Never have I ever! Everyone at the table must put up three fingers. The player who rolled the cards begins a game of “never have I ever,” and the other players lower a finger if they have done that activity. The first player to lower all their fingers must drink."
    } else if (diceTotal == 11) {
        firstStatus.innerHTML += " ELEVEN! Make a rule! I drink! The player who rolled can make a rule that will be followed for the rest of the game. Any player who breaks the rule must take a penalty drink. Another player can overturn the rule if they roll an ELEVEN."
        status.innerHTML += " ELEVEN! Make a rule! I drink! The player who rolled can make a rule that will be followed for the rest of the game. Any player who breaks the rule must take a penalty drink. Another player can overturn the rule if they roll an ELEVEN."
    } else if (diceTotal == 12) {
        firstStatus.innerHTML += " TWELVE! Questioner! The player who rolled can ask questions. Whoever answers must drink. This continues until another player rolls a TWELVE."
        status.innerHTML += " TWELVE! Questioner! The player who rolled can ask questions. Whoever answers must drink. This continues until another player rolls a TWELVE."
    } else if (diceTotal >= 13 && diceTotal <= 20) {
        firstStatus.innerHTML += " THIRTEEN THROUGH TWENTY! TRUTH! Ask any one player a question and they must respond with the TRUTH! If they do not wish to answer, then they must drink!"
        status.innerHTML += " THIRTEEN THROUGH TWENTY! TRUTH! Ask any one player a question and they must respond with the TRUTH! If they do not wish to answer, then they must drink!"
    } else if (diceTotal >= 21 && diceTotal <= 30) {
        status.innerHTML += " TWENTY ONE THROUGH THIRTY! DARE! Ask any one player to do a DARE! If they do not wish to do the DARE, then they must drink!"
    } else if (diceTotal >= 31 && diceTotal <= 40) {
        status.innerHTML += " THIRTY ONE THROUGH FORTY! NO SWEAR! The player who rolled cannot SWEAR! If they do, they must drink until another person rolls a THIRTY ONE THROUGH FORTY!"
    }
}