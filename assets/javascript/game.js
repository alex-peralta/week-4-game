
    /*-------------------------------
            GLOBAL VARIABLES
    --------------------------------*/
    var value1 = 0;
    var value2 = 0;
    var value3 = 0;
    var value4 = 0;
    // Tracks wins or losses values
    var wins = 0;
    var losses = 0;
    //Tracks the User point total
    var userTotal = 0;
    var randomComputerNumber = 0;


    /*-------------------------------
            FUNCTIONS
    --------------------------------*/

    function initializeGame() {
        //Generates a random number for 4 crystals
        value1 = Math.floor(Math.random() * 12) + 1;
        console.log('1red = ' + value1);

        value2 = Math.floor(Math.random() * 12) + 1;
        console.log('yellow = ' + value2);

        value3 = Math.floor(Math.random() * 12) + 1;
        console.log('blue = ' + value3);

        value4 = Math.floor(Math.random() * 12) + 1;
        console.log('green = ' + value4);

        //CHANGE THIS TO SWITCH
        function equals() {
        } if (value1 === value2) {
            initializeGame();
        } else if (value1 === value3) {
            initializeGame();
        } else if (value1 === value4) {
            initializeGame();
        } else if (value2 === value3) {
            initializeGame();
        } else if (value2 === value4) {
            initializeGame();
        } else if (value3 === value4) {
            initializeGame();
        };
        equals();

        // Returns a random integer between 19 and 120 for the ComputerNumber and places it in DOM
        randomComputerNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $('#scorePanelBox').text(randomComputerNumber);

        //Writes the user SCORE, WINS and LOSSES to the DOM
        $('#scoreBox').text(userTotal);
        $('#wins').text('Wins = ' + '  ' + wins);
        $('#losses').text('Losses = ' + losses);

    }

    /*-------------------------------
            RED CRYSTAL
    --------------------------------*/
    $( "#button-1" ).click(function() {
        userTotal = (userTotal + value1);
        $("#scoreBox").text(userTotal);
        // WINNING
        if (userTotal === randomComputerNumber) {
            wins++;
            //updates the WIN total on the DOM
            $('#winsOrLoss').text('You won!');
            $('#wins').text('Wins   = ' + wins);
            userTotal = 0;
            initializeGame();
            //LOSING
        } else if (userTotal > randomComputerNumber) {
            losses++;
            //updates the LOSS total on the DOM
            $('#winsOrLoss').text('You lost!');
            $('#losses').text('Losses = ' + losses);
            userTotal = 0;
            initializeGame();
        }
    });

    /*-------------------------------
            YELLOW CRYSTAL
    --------------------------------*/
    $("#button-2").on("click", function () {
        userTotal = (userTotal + value2);
        $('#scoreBox').text(userTotal);

        if (userTotal === randomComputerNumber) {
            wins++;
            //updates the WIN total on the DOM
            $('#winsOrLoss').text('You won!');
            $('#wins').text('Wins   = ' + wins);
            userTotal = 0;
            initializeGame();

        } else if (userTotal > randomComputerNumber) {
            losses++;
            //updates the LOSS total on the DOM
            $('#winsOrLoss').text('You lost!');
            $('#losses').text('Losses = ' + losses);
            userTotal = 0;
            initializeGame();
        }
    });

    /*-------------------------------
            BLUE CRYSTAL
    --------------------------------*/
    $("#button-3").on("click", function () {
        userTotal = (userTotal + value3);
        $('#scoreBox').text(userTotal);

        if (userTotal === randomComputerNumber) {
            wins++;
            //updates the WIN total on the DOM
            $('#winsOrLoss').text('You won!');
            $('#wins').text('Wins   = ' + wins);
            userTotal = 0;
            initializeGame();

        } else if (userTotal > randomComputerNumber) {
            losses++;
            //updates the LOSS total on the DOM
            $('#winsOrLoss').text('You lost!');
            $('#losses').text('Losses = ' + losses);
            userTotal = 0;
            initializeGame();
        }
    });

    /*-------------------------------
            GREEN CRYSTAL
    --------------------------------*/
    $("#button-4").on("click", function () {
        userTotal = (userTotal + value4);
        $('#scoreBox').text(userTotal);

        if (userTotal === randomComputerNumber) {
            wins++;
            //updates the WIN total on the DOM
            $('#winsOrLoss').text('You won!');
            $('#wins').text('Wins   = ' + wins);
            userTotal = 0;
            initializeGame();

        } else if (userTotal > randomComputerNumber) {
            losses++;
            //updates the LOSS total on the DOM
            $('#winsOrLoss').text('You lost!');
            $('#losses').text('Losses = ' + losses);
            userTotal = 0;
            initializeGame();
        }
    });

    /*-------------------------------
                MAIN PROCESS
    --------------------------------*/


    initializeGame();
