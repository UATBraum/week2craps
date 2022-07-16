//function for countdownTimer V1 for week 1-2
function start() {
    console.log("start() function started");
    //created variable for time
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
    //9
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 1000)
    //8
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 2000)
    //7
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 3000)
    //6
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 4000)
    //5
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 5000)
    //4
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 6000)
    //3
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 7000)
    //2
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 8000)
    //1
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 9000)
    //Blast Off
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = "Blast Off!";
    }, 10000)

}

//every line of code commented on...
function playCraps(){
    //logging the function playCraps has run
    console.log("playCraps Started;")
    
    //generate variables: die1 die2 sum

    //first dice
    var die1 = 1;
    //second dice
    var die2 = 1;
    //sum of dice 1 and dice 2
    var sum = 1;
    //roll the dice
    //roll the first dice
    die1 = Math.floor(Math.random()*6 + 1);
    //roll the second dice
    die2 = Math.floor(Math.random()*6 + 1);
    //log results of dice 1 and dice 2
    console.log(die1, die2);

    //get the sum of the two dice and save it in sum

    //sum di21 and die2
    sum = die1 + die2;
    //console log the sum value
    console.log("sum: " + sum)

    //follow the rules of Craps
    //tell the status in crapsStatus

    //Check if sum is 7 or 11
    if(sum == 7 || sum == 11)
    {
        document.getElementById("crapsStatus").innerHTML = "Craps! - you lose, friend";
    }
    //check if dice are equal and even
    else if(die1==die2 && die1%2 ==0)
    {
        document.getElementById("crapsStatus").innerHTML = "DOUBLES! - you won, friend";
    }
    //catch all other cases that are not wins or loses
    else
    {
        document.getElementById("crapsStatus").innerHTML = "Tie, roll again friend!";
    }

}