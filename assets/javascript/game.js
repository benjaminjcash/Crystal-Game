var Crystal = {
    //The crystals array corresponds to the colored crystals in the following order: red, blue, green, yellow
    crystals : [0, 0, 0, 0],
    targetNumber: 0,
    userScore: 0,
    wins: 0,
    losses: 0,
    audio: new Audio("assets/audio/scarborough_fair.m4a"),

    randomizeCrystals() {
        for(i=0; i<this.crystals.length; i++) {
            var randomNumber = (Math.floor(Math.random()*12)+1)
            this.crystals[i] = randomNumber;
        }
    },

    randomizeTargetNumber() {
        var randomNumber = (Math.floor(Math.random()*102)+19)
        this.targetNumber = randomNumber;
    },

    resetGame() {
        this.randomizeCrystals();
        this.randomizeTargetNumber();
        this.userScore = 0;
        $("#targetnumber").html(this.targetNumber);
        $("#playerscore").html(this.userScore);
    },

    endOfRoundChecker() {
        if(this.userScore < this.targetNumber) {
            return
        } else if (this.userScore === this.targetNumber) {
            alert("You win!")
            this.resetGame()
            this.wins++
            $("#wins").html(Crystal.wins);
        } else {
            alert("You lose!")
            this.resetGame()
            this.losses++
            $("#losses").html(Crystal.losses);
        }
    },
  
    initializeGame() {
        this.audio.play();
        this.randomizeCrystals();
        this.randomizeTargetNumber();
        $("#targetnumber").html(this.targetNumber);
        $("#playerscore").html(this.userScore);
        $("#wins").html(this.wins);
        $("#losses").html(this.losses);
        $("#redcrystal").on("click", function(){
            Crystal.userScore += Crystal.crystals[0];
            $("#playerscore").html(Crystal.userScore);
            Crystal.endOfRoundChecker();
        });
        $("#bluecrystal").on("click", function () {
            Crystal.userScore += Crystal.crystals[1]
            $("#playerscore").html(Crystal.userScore)
            Crystal.endOfRoundChecker();
        });
        $("#greencrystal").on("click", function () {
            Crystal.userScore += Crystal.crystals[2]
            $("#playerscore").html(Crystal.userScore)
            Crystal.endOfRoundChecker();
        });
        $("#yellowcrystal").on("click", function () {
            Crystal.userScore += Crystal.crystals[3]
            $("#playerscore").html(Crystal.userScore)
            Crystal.endOfRoundChecker();
        });
    },
}

Crystal.initializeGame()

