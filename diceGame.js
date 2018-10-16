function rollDie() {
    let die1 = document.getElementById("firstDie1");
    let status = document.getElementById("firstStatus");
    let d1 = Math.floor(Math.random() * prompt("How many sides does the die have?")) + 1;
    let diceTotal = d1;
    firstDie1.innerHTML = d1;
    firstStatus.innerHTML = "You rolled" + " " + d1 + ".";

    if (diceTotal == 1) {
        status.innerHTML += " ONE! Waterfall! Everyone starts chugging their drink. A player cannot stop drinking until the person to their right has stopped drinking."
    } else if (diceTotal == 2) {
        status.innerHTML += " TWO! Is for you! Pick someone to drink!"
    } else if (diceTotal == 3) {
        status.innerHTML += " THREE! Is for me! I drink!"
    } else if (diceTotal == 4) {
        status.innerHTML += " FOUR! Touch the floor! Last player to touch the floor must drink!"
    } else if (diceTotal == 5) {
        status.innerHTML += " FIVE! Is for guys! All guys drink!"
    } else if (diceTotal == 6) {
        status.innerHTML += " SIX! Is for me! I drink!"
    } else if (diceTotal == 7) {
        status.innerHTML += " SEVEN! Is for heaven! Last player to put hand in the air must drink!"
    } else if (diceTotal == 8) {
        status.innerHTML += " EIGHT! Pick a mate! Pick a player to drink with you every time you drink!"
    } else if (diceTotal == 9) {
        status.innerHTML += " NINE! Is for rhyme! The player who rolled must say a word. The other players have 10 seconds to say a word that rhymes with the original one. The first player who fails to think of a rhyme must drink."
    } else if (diceTotal == 10) {
        status.innerHTML += " TEN! Never have I ever! Everyone at the table must put up three fingers. The player who rolled the cards begins a game of “never have I ever,” and the other players lower a finger if they have done that activity. The first player to lower all their fingers must drink."
    } else if (diceTotal == 11) {
        status.innerHTML += " ELEVEN! Make a rule! I drink! The player who rolled can make a rule that will be followed for the rest of the game. Any player who breaks the rule must take a penalty drink. Another player can overturn the rule if they roll an ELEVEN."
    } else if (diceTotal == 12) {
        status.innerHTML += " TWELVE! Questioner! The player who rolled can ask questions. Whoever answers must drink. This continues until another player rolls a TWELVE."
    } else if (diceTotal >= 13 && diceTotal <= 20) {
        status.innerHTML += " THIRTEEN THROUGH TWENTY! TRUTH! Ask any one player a question and they must respond with the TRUTH! If they do not wish to answer, then they must drink!"
    }
}

function rollDice() {
    let die1 = document.getElementById("die1");
    let die2 = document.getElementById("die2");
    let status = document.getElementById("status");
    let d1 = Math.floor(Math.random() * prompt("How many sides does the die have?")) + 1;
    let d2 = Math.floor(Math.random() * prompt("How many sides does the die have?")) + 1;
    let diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "You rolled" + " " + diceTotal + ".";
    if (d1 == d2) {
        status.innerHTML += " DOUBLES! You get a free turn!!";
    } else if (diceTotal == 2) {
        status.innerHTML += " TWO! Is for you! Pick someone to drink!"
    } else if (diceTotal == 3) {
        status.innerHTML += " THREE! Is for me! I drink!"
    } else if (diceTotal == 4) {
        status.innerHTML += " FOUR! Touch the floor! Last player to touch the floor must drink!"
    } else if (diceTotal == 5) {
        status.innerHTML += " FIVE! Is for guys! All guys drink!"
    } else if (diceTotal == 6) {
        status.innerHTML += " SIX! Is for me! I drink!"
    } else if (diceTotal == 7) {
        status.innerHTML += " SEVEN! Is for heaven! Last player to put hand in the air must drink!"
    } else if (diceTotal == 8) {
        status.innerHTML += " EIGHT! Pick a mate! Pick a player to drink with you every time you drink!"
    } else if (diceTotal == 9) {
        status.innerHTML += " NINE! Is for rhyme! The player who rolled must say a word. The other players have 10 seconds to say a word that rhymes with the original one. The first player who fails to think of a rhyme must drink."
    } else if (diceTotal == 10) {
        status.innerHTML += " TEN! Never have I ever! Everyone at the table must put up three fingers. The player who rolled the cards begins a game of “never have I ever,” and the other players lower a finger if they have done that activity. The first player to lower all their fingers must drink."
    } else if (diceTotal == 11) {
        status.innerHTML += " ELEVEN! Make a rule! I drink! The player who rolled can make a rule that will be followed for the rest of the game. Any player who breaks the rule must take a penalty drink. Another player can overturn the rule if they roll an ELEVEN."
    } else if (diceTotal == 12) {
        status.innerHTML += " TWELVE! Questioner! The player who rolled can ask questions. Whoever answers must drink. This continues until another player rolls a TWELVE."
    } else if (diceTotal >= 13 && diceTotal <= 20) {
        status.innerHTML += " THIRTEEN THROUGH TWENTY! TRUTH! Ask any one player a question and they must respond with the TRUTH! If they do not wish to answer, then they must drink!"
    } else if (diceTotal >= 21 && diceTotal <= 30) {
        status.innerHTML += " TWENTY ONE THROUGH THIRTY! DARE! Ask any one player to do a DARE! If they do not wish to do the DARE, then they must drink!"
    } else if (diceTotal >= 31 && diceTotal <= 40) {
        status.innerHTML += " THIRTY ONE THROUGH FORTY! NO SWEAR! The player who rolled cannot SWEAR! If they do, they must drink until another person rolls a THIRTY ONE THROUGH FORTY!"
    }
}