let x = Math.round((Math.random() * 6));
let comp = Math.round((Math.random() * 6));
let player = Math.round((Math.random() * 6));
let greenmove, i, redi, greengo = false, redgo = false, comproll = 0, playerroll, fivecorner = false;
console.log(x);
// let moveLeftj = [0, 90, 150, 210, 270, 330, 330, 330, 330, 330, 330, 385, 455, 455, 455, 455];
// let changePos = [0, 212, 212, 212, 212, 172, 130, 87, 45, 5, -40, -40, -40, 5, 45, 87];

let green = [{ up: 212, left: 0 }, { up: 212, left: 90 }, { up: 212, left: 150 }, { up: 212, left: 210 }, { up: 212, left: 270 }, { up: 172, left: 330 }, { up: 130, left: 330 }, { up: 87, left: 330 }, { up: 45, left: 330 }, { up: 5, left: 330 }, { up: -40, left: 330 }, { up: -40, left: 385 }, { up: -40, left: 450 }, { up: 5, left: 450 }, { up: 45, left: 450 }, { up: 87, left: 450 }, { up: 129, left: 450 }, { up: 171, left: 450 }, { up: 213, left: 510 }, { up: 213, left: 570 }, { up: 213, left: 630 }, { up: 213, left: 690 }, { up: 213, left: 750 }, { up: 213, left: 810 }, { up: 255, left: 810 }, { up: 297, left: 810 }, { up: 297, left: 750 }, { up: 297, left: 690 }, { up: 297, left: 630 }, { up: 297, left: 570 }, { up: 297, left: 510 }, { up: 339, left: 450 }, { up: 381, left: 450 }, { up: 423, left: 450 }, { up: 465, left: 450 }, { up: 507, left: 450 }, { up: 549, left: 450 }, { up: 549, left: 390 }, { up: 549, left: 330 }, { up: 507, left: 330 }, { up: 465, left: 330 }, { up: 423, left: 330 }, { up: 381, left: 330 }, { up: 339, left: 330 }, { up: 297, left: 270 }, { up: 297, left: 210 }, { up: 297, left: 150 }, { up: 297, left: 90 }, { up: 297, left: 30 }, { up: 297, left: -30 }, { up: 255, left: -30 }, { up: 255, left: 30 }, { up: 255, left: 90 }, { up: 255, left: 150 }, { up: 255, left: 210 }, { up: 255, left: 270 }, { up: 255, left: 330 }]


let moveredDown = [0, 45, 87, 129, 171, 213, 220, 220, 265, 265, 265, 255, 300];
let changeredPos = [0, -140, -140, -140, -140, -80, -20, 30, 90, 150, 210, 210, 210];
let compumove = 0, moveleft = 0, movedown = 0, moveup = 0, moveright = 0, componeout = false, iplayit1 = false, iplayit2 = false, getplayerRoll = 0, getcompRoll = 0;
let rolldie = false, movement = 0, initialred = 0, initialdown = 0;
let green1 = document.getElementById('green1');
let red1 = document.getElementById('red1');
let die = document.getElementById('die');
let movebyIt = false, tendirect = false, greaterten = false, beforefive = false, afterfive = false, goingTen = false, onTen = false, twelvecorner = false; goingSeth = false;

//choose who start first
Choosewho();


function Choosewho() {
    console.log(comp, player);
    if (comp >= 3) {
        console.log("Computer starts the game");
        setTimeout(() => {
            computer();
        }, 3000);
    }
    else if (player >= 3) {
        console.log("Player starts the game");
        setTimeout(() => {
            player1();
        }, 3000);
    }
    else if (comp == player) {
        console.log("Computer starts the game");
        setTimeout(() => {
            computer();
        }, 3000);
    }
    else if (comp < 3 && player < 3) {
        console.log("Computer starts the game");
        setTimeout(() => {
            computer();
        }, 3000);

    }
}
//roll dice
function ComprollDice() {
    die.style.transform = "rotate(360deg)"
    setTimeout(() => {
        die.style.transform = "rotate(0deg)"
    }, 1000);
    comproll = (Math.floor(Math.random() * 6)) + 1;
    console.log(comproll, "Comproll");
    console.log(`Computer rolls ${comproll}`);
}

function PlayerrollDice() {
    playerroll = (Math.floor(Math.random() * 6)) + 1;
    console.log(playerroll, "Player");
}
console.log(green1.screenX);
function computer() {
    compumove++
    ComprollDice();
    getcompRoll = getcompRoll+comproll;
    console.log(getcompRoll);
    setTimeout(() => {
        //game starts and I have six, take one card out
        if (compumove == 1 && comproll != 6) {
            getcompRoll = 0;
            initialdown = initialdown + (212);
            green1.style.marginTop = `${initialdown}px`;
            setTimeout(() => {
                console.log("Player it is your turn to play")
                componeout = true;
            }, 5000);
        }
        //if i have played six and i play again, move card front
        else if (compumove > 1 && comproll != 6 && componeout == true) {
            //check whether card moves within 1 and 4
            if (getcompRoll < 5) {
                console.log("I AM LESS THAN FIVE CORNER");
                green1.style.marginLeft = `${green[getcompRoll].left}px`
                green1.style.marginTop = `${green[getcompRoll].up}px`
                setTimeout(() => {
                    console.log("Player it is your turn to play")
                    movebyIt = true;
                }, 4000);
            }
            //you're going to five either from  home or anywhere less than 5
            if ((fivecorner == false) && (getcompRoll == 5) && (movebyIt == false || movebyIt == true)) {
                console.log("FIVE ALONE");
                green1.style.marginLeft = `${green[4].left}px`
                green1.style.marginTop = `${green[4].up}px`
                setTimeout(() => {
                    green1.style.marginLeft = `${green[5].left}px`
                    green1.style.marginTop = `${green[5].up}px`
                    setTimeout(() => {
                        console.log("Player it is your turn to play")
                        fivecorner = true;
                    }, 3000);
                }, 500);
            }

            if ((fivecorner == false) && (movebyIt == true) && (getcompRoll > 5 && getcompRoll <= 10)) {
                console.log("I AM GOING TO TEN FROM LESS THAN 5");
                green1.style.marginLeft = `${green[4].left}px`
                green1.style.marginTop = `${green[4].up}px`
                setTimeout(() => {
                    green1.style.marginLeft = `${green[5].left}px`
                    green1.style.marginTop = `${green[5].up}px`
                    setTimeout(() => {
                        green1.style.marginLeft = `${green[getcompRoll].left}px`
                        green1.style.marginTop = `${green[getcompRoll].up}px`
                        setTimeout(() => {
                            console.log("Player it is your turn to play")
                        }, 3000);
                    }, 500);
                }, 500);
            }

            // i am leaving 5 but i have not gotten to ten
            if (goingTen == false && (getcompRoll > 5 && getcompRoll <= 10) && fivecorner == true) {
                console.log("GOING TEN");
                green1.style.marginLeft = `${green[getcompRoll].left}px`
                green1.style.marginTop = `${green[getcompRoll].up}px`
                setTimeout(() => {
                    console.log("Player it is your turn to play");
                    goingTen = true;
                }, 3000);
            }

            // i have started counting to ten but i have not reached ten
            if (goingTen == true && (getcompRoll > 5 && getcompRoll <= 10)) {
                console.log(" I AM STILL GOING TO TEN");
                green1.style.marginLeft = `${green[getcompRoll].left}px`
                green1.style.marginTop = `${green[getcompRoll].up}px`
                setTimeout(() => {
                    console.log("Player it is your turn to play")
                }, 3000);
            }


            //i am going to above six from home
            if ((movebyIt==false) && (fivecorner==false) && (getcompRoll>5 && getcompRoll<=10)) {
                console.log(" I AM GOING TO ABOVE SIX FROM HOME");
                green1.style.marginLeft = `${green[4].left}px`
                green1.style.marginTop = `${green[4].up}px`
                setTimeout(() => {
                    green1.style.marginLeft = `${green[5].left}px`
                    green1.style.marginTop = `${green[5].up}px` 
                    setTimeout(() => {
                        green1.style.marginLeft = `${green[getcompRoll].left}px`
                green1.style.marginTop = `${green[getcompRoll].up}px`
                goingTen=true;
                    }, 1000);
                }, 1000);
            }

            //get this done later
            if (getcompRoll == 10) {
                onTen = true;
                console.log("ON TEN");
            }

            if (getcompRoll > 10 && getcompRoll < 13) {
                twelvecorner = true;
                console.log("I AM GOING TO TWELVE CORNER");
            }
            if (getcompRoll > 12 && getcompRoll < 18) {
                goingSeth = true;
                console.log("I AM GOING TO SEVENTEEN");
            }



            //if i am going less than 4..
            // if (getcompRoll <= 4) {
            //     console.log("i am going to less than and eqaul to 4");
            //     green1.style.marginLeft = `${green[getcompRoll].left}px`
            //     green1.style.marginTop = `${green[getcompRoll].up}px`
            //     setTimeout(() => {
            //         console.log("Player it is your turn to play")
            //     }, 4000);
            // }
            //if i play 10 directly from home, move this way.
            // if (movebyIt == false && fivecorner == false && getcompRoll == 10) {
            //     tendirect = true;
            //     console.log("I am going to ten from home");
            //     green1.style.marginLeft = `${green[4].left}px`;
            //     green1.style.marginTop = `${green[4].up}px`;
            //     setTimeout(() => {
            //         green1.style.marginLeft = `${green[5].left}px`;
            //         green1.style.marginTop = `${green[5].up}px`;
            //         setTimeout(() => {
            //             green1.style.marginLeft = `${green[10].left}px`;
            //             green1.style.marginTop = `${green[10].up}px`;
            //         }, 1000);
            //     }, 1000);
            // }
            //if i am going to 5 from anywhere less than 5
            // if (movebyIt == true && getcompRoll == 5) {
            //     console.log("i am leaving here, going to 5");
            //     green1.style.marginLeft = `${green[4].left}px`;
            //     green1.style.marginTop = `${green[4].up}px`;
            //     setTimeout(() => {
            //         green1.style.marginLeft = `${green[5].left}px`;
            //         green1.style.marginTop = `${green[5].up}px`;
            //         setTimeout(() => {
            //             console.log("Player it is your turn to play")
            //         }, 4000);
            //     }, 1000);
            // }
            // if (getcompRoll <= 4) {
            //     beforefive = true;
            //     console.log("errrr");
            // }
            // if (getcompRoll == 5) {
            //     fivecorner = true;
            //     console.log("fivecorner");
            // }
            // if (getcompRoll > 5) {
            //     afterfive = true;
            //     console.log("after five");
            // }
            //if i play less than 4 at first and i am going between 4 and 10...
            // if (movebyIt == true && afterfive == true && getcompRoll <= 6 && getcompRoll <= 10 && tendirect == false && fivecorner == false) {
            //     greaterten = true;
            //     console.log("I am leaving here, going to between here and 10");
            //     setTimeout(() => {
            //         green1.style.marginLeft = `${green[4].left}px`;
            //         green1.style.marginTop = `${green[4].up}px`;
            //         setTimeout(() => {
            //             green1.style.marginLeft = `${green[5].left}px`;
            //             green1.style.marginTop = `${green[5].up}px`;
            //             setTimeout(() => {
            //                 green1.style.marginLeft = `${green[getcompRoll].left}px`;
            //                 green1.style.marginTop = `${green[getcompRoll].up}px`;
            //                 setTimeout(() => {
            //                     console.log("Player it is your turn to play")
            //                 }, 4000);
            //             }, 1200);
            //         }, 1100);
            //     }, 1000);
            // }
            // if i have moved to 5 and i am moving between 6 and 10
            // if (movebyIt == true && fivecorner==true && getcompRoll >6 && getcompRoll <= 10 && tendirect == false && afterfive == true) {
            //     console.log("I am leaving 6, going to between here and 10")
            //     greaterten = true;
            //     green1.style.marginLeft = `${green[getcompRoll].left}px`;
            //     green1.style.marginTop = `${green[getcompRoll].up}px`;
            //     setTimeout(() => {
            //         console.log("Player it is your turn to play")
            //     }, 4000);
            // }
            //if i am going to 5 directly from home
            // if (movebyIt == false && getcompRoll == 5) {
            //     console.log("i am going to 5 directly from home");
            //     green1.style.marginLeft = `${green[4].left}px`;
            //     green1.style.marginTop = `${green[4].up}px`;
            //     setTimeout(() => {
            //         green1.style.marginLeft = `${green[5].left}px`;
            //         green1.style.marginTop = `${green[5].up}px`;
            //         setTimeout(() => {
            //             console.log("Player it is your turn to play")
            //         }, 4000);
            //     }, 1000);
            // }
            //if i have reached 5 and i am going to between 5 and 10
            // if (movebyIt == false && fivecorner == true && getcompRoll >=5 || getcompRoll == 10 && tendirect == false && afterfive==true) {
            //     greaterten = true;
            //     console.log("i am leaving 5 exactly, going to between 5 and 10");
            //     setTimeout(() => {
            //         green1.style.marginLeft = `${green[getcompRoll].left}px`;
            //         green1.style.marginTop = `${green[getcompRoll].up}px`;
            //         setTimeout(() => {
            //             console.log("Player it is your turn to play")
            //         }, 4000);
            //     }, 1000);
            // }
            //if i have not reached 5 and i want to go to between 5 and 10
            // else if (movebyIt == false && fivecorner == false && getcompRoll >= 6 && getcompRoll <= 10 && tendirect == false && afterfive==true) {
            //     greaterten = true;
            //     console.log("I am leaving here and i am going to anywhere between here and 10");
            //     green1.style.marginLeft = `${green[4].left}px`;
            //     green1.style.marginTop = `${green[4].up}px`;
            //     setTimeout(() => {
            //         green1.style.marginLeft = `${green[5].left}px`;
            //         green1.style.marginTop = `${green[5].up}px`;
            //         setTimeout(() => {
            //             green1.style.marginLeft = `${green[getcompRoll].left}px`;
            //             green1.style.marginTop = `${green[getcompRoll].up}px`;
            //             setTimeout(() => {
            //                 console.log("Player it is your turn to play")
            //             }, 4000);
            //         }, 1100);
            //     }, 1000);
            // }

            //if i want to go 11 or 12 from home
            // else if (movebyIt == false && fivecorner == false && getcompRoll > 10 && getcompRoll < 13) {
            //     console.log("beyond ten and not up to 13");
            //     console.log(green1.style.screenX);
            //     setTimeout(() => {
            //         green1.style.marginLeft = `${green[4].left}px`;
            //         green1.style.marginTop = `${green[4].up}px`;
            //         setTimeout(() => {
            //             green1.style.marginLeft = `${green[5].left}px`;
            //             green1.style.marginTop = `${green[5].up}px`;
            //             setTimeout(() => {
            //                 green1.style.marginLeft = `${green[10].left}px`;
            //                 green1.style.marginTop = `${green[10].up}px`;
            //                 setTimeout(() => {
            //                     green1.style.marginLeft = `${green[getcompRoll].left}px`;
            //                     green1.style.marginTop = `${green[getcompRoll].up}px`;
            //                     setTimeout(() => {
            //                         console.log("Player it is your turn to play")
            //                     }, 4000);
            //                 }, 1000);
            //             }, 1000);
            //         }, 1000);
            //     }, 1000);
            // }

            //if i want to go 11 and 12 from number not up to 4;
            // else if (movebyIt == true && beforefive == true && fivecorner == false && getcompRoll > 10 && getcompRoll < 13) {
            //     console.log("i am going up to 13 from", getcompRoll);
            //     console.log(green1.style.screenX);
            //     setTimeout(() => {
            //         green1.style.marginLeft = `${green[4].left}px`;
            //         green1.style.marginTop = `${green[4].up}px`;
            //         setTimeout(() => {
            //             green1.style.marginLeft = `${green[5].left}px`;
            //             green1.style.marginTop = `${green[5].up}px`;
            //             setTimeout(() => {
            //                 green1.style.marginLeft = `${green[10].left}px`;
            //                 green1.style.marginTop = `${green[10].up}px`;
            //                 setTimeout(() => {
            //                     green1.style.marginLeft = `${green[getcompRoll].left}px`;
            //                     green1.style.marginTop = `${green[getcompRoll].up}px`;
            //                     setTimeout(() => {
            //                         console.log("Player it is your turn to play")
            //                     }, 4000);
            //                 }, 1000);
            //             }, 1000);
            //         }, 1000);
            //     }, 1000);
            // }
            //if i want to go 11 and 12 from 5;
            // else if (fivecorner == true && getcompRoll > 10 && getcompRoll < 13) {
            //     console.log("i am going up to number not up to 13 from", getcompRoll);
            //     console.log(green1.style.screenX);
            //     setTimeout(() => {
            //         green1.style.marginLeft = `${green[10].left}px`;
            //         green1.style.marginTop = `${green[10].up}px`;
            //         setTimeout(() => {
            //             green1.style.marginLeft = `${green[getcompRoll].left}px`;
            //             green1.style.marginTop = `${green[getcompRoll].up}px`;
            //             setTimeout(() => {
            //                 console.log("Player it is your turn to play")
            //             }, 4000);
            //         }, 1000);
            //     }, 1000);
            // }

            // else{
            //     green1.style.marginLeft = `${green[getcompRoll].left}px`
            //     green1.style.marginTop = `${green[getcompRoll].up}px`
            //     setTimeout(() => {
            //         console.log("Player it is your turn to play")

            //     }, 4000);
            // }
            // if (getcompRoll <= 4) {
            //     moveleft = (moveLeftarray[getcompRoll]);
            //     console.log(moveleft);
            //     green1.style.marginLeft = `${moveleft}px`;
            //     setTimeout(() => {
            //         green1.style.marginTop = `${changePos[getcompRoll]}px`;
            //     }, 50);
            //     setTimeout(() => {
            //         console.log("Player it is your turn to play")
            //     }, 4000);
            // }
        }
        else {
            console.log("Player it is your turn to play")
            getcompRoll = getcompRoll - 6;
        }
    }, 3000);
}


function dietouch() {
    rolldie = true;
    die.style.transform = "rotate(360deg)";
    PlayerrollDice();
    setTimeout(() => {
        die.style.transform = "rotate(0deg)"
        player1();
    }, 4000);
}


function player1() {
    if (rolldie == true && playerroll != 6) {
        setTimeout(() => {
            console.log("Player, move your game");
            playerroll = playerroll;
            setTimeout(() => {
            }, 10);
        }, 2000);
    }
    else if (rolldie == true && playerroll == 6) {
        console.log("computer will roll")
        setTimeout(() => {
            computer();
        }, 3000);
    }
}



//move red
green1.addEventListener('click', redmovement)
red1.addEventListener('click', redmovement)
function redmovement(params) {
    movement++
    getplayerRoll = getplayerRoll + playerroll;
    console.log(getcompRoll);
    console.log("screenX", params.screenX, params.screenY);
    greengo = false;
    greenmove = (params.target);
    if (redgo == false && rolldie == true && playerroll != 6 && greenmove.id == "red1" && movement == 1) {
        redgo = true;
        getplayerRoll = 0;
        initialred = initialred + (-145);
        greenmove.style.marginLeft = `${initialred}px`;
        console.log(initialred);
        setTimeout(() => {
            setTimeout(() => {
                console.log("Computer it is your turn to play")
                setTimeout(() => {
                    Comproll = 0;
                    computer();
                    rolldie = false;
                }, 2000);
            }, 5000);
        }, 10);
    }

    else if (redgo == true && rolldie == true && playerroll != 6 && movement > 1 && greenmove.id == "red1") {

        //greater than 4 but equal to 10
        // red1.style.marginTop = "171px";
        // setTimeout(() => {
        //     red1.style.marginTop = "213px";
        //     red1.style.marginLeft = "-85px";
        //     setTimeout(() => {
        //         red1.style.marginTop = "213px";
        //         red1.style.marginLeft = "215px";
        //     }, 1300);
        // }, 1100);
        red1.style.marginTop = "171px";
        setTimeout(() => {
            red1.style.marginTop = "213px";
            red1.style.marginLeft = "-80px";
            setTimeout(() => {
                red1.style.marginTop = "213px";
                red1.style.marginLeft = "210px";
                setTimeout(() => {
                    red1.style.marginTop = "255px";
                    red1.style.marginLeft = "210px";
                    setTimeout(() => {
                        rolldie = false;
                        computer();
                    }, 2000);
                }, 1500);
            }, 1300);
        }, 1100);


        // console.log(playerroll);
        // movedown =(moveredDown[getplayerRoll]);
        //     console.log(movedown);
        //     red1.style.marginTop = "171px";
        //     setTimeout(() => {
        //     red1.style.marginLeft = "-85px"; 
        //     }, 50);
        // console.log(playerroll, movedown);
        // setTimeout(() => {
        //     console.log("Computer it is your turn to play")
        //     setTimeout(() => {
        //         computer();
        //     }, 2000);
        // }, 5000);
    }

}
