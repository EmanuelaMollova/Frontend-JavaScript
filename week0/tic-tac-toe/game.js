"use strict";
var prompt = require("sync-prompt").prompt;

function printBoard(board) {
    board.forEach(function(row) {
        console.log(row.join(""));
    });
}

function isPositionValid(x, y, board) {
    return [x, y].map(function(coordinate) {
         return coordinate > 0 && coordinate < 4;
    }).reduce(function(a, b) {
        return a && b;
    }) && board[x][y] === '*';
}

function gameLoop() {
    var
        board = [ ["*", "*", "*"],
                  ["*", "*", "*"],
                  ["*", "*", "*"] ],
        playerX = prompt("Please enter your name (X)> "),
        playerO = prompt("Please enter your name (O)> "),
        xTurn = true,
        position = null,
        x, y;

    while(true) {
        console.log("This is the current state of the board:");
        printBoard(board);

        if(xTurn) {
            console.log("Place for " + playerX);
        } else {
            console.log("Place for " + playerO);
        }

        position = prompt("x y> ").split(" ");
        x = parseInt(position[0], 10);
        y = parseInt(position[1], 10);

        if(isPositionValid(x, y, board)) {
            if(xTurn) {
                board[x][y] = 'x';
            } else {
                board[x][y] = 'o';
            }

            xTurn = !xTurn;
        } else {
            console.log("This move is not valid!");
        }
    }
}

gameLoop();
