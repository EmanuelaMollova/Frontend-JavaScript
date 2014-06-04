"use strict";
var prompt = require("sync-prompt").prompt;

function printBoard(board) {
    board.forEach(function(row) {
        console.log(row.join(""));
    });
}

function getRows(board) {
    return board;
}

function getColumns(board) {
    return board[0].map(function (_, i) {
        return board.map(function(row) {
            return row[i];
        });
    });
}

function getMainDiagonal(board) {
    return [board[0].map(function (_, i) {
        return board[i][i];
    })];
}

function getSecondaryDiagonal(board) {
    return [board[0].map(function (_, i) {
        return board[i][board.length - i - 1];
    })];
}

function getTripples(board) {
    return getRows(board).concat(getColumns(board)).concat(getMainDiagonal(board)).concat(getSecondaryDiagonal(board));
}

function isWinner(playerSign, board) {
    var tripples = getTripples(board);
    // console.log(tripples);

    return tripples.some(function(tripple) {
        tripple.every(function(element) {
            return element === playerSign;
        });
    });
}

function findWinner(board) {
    if(isWinner('x', board)) {
        return 1;
    } else if(isWinner('o', board)) {
        return 2;
    } else {
        return false;
    }
}

function isPositionValid(x, y, board) {
    return [x, y].map(function(coordinate) {
         return coordinate > -1 && coordinate < 3;
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

    while(!findWinner(board)) {
        if(findWinner(board) === 1) {
            console.log("Congratulations! " + playerX + "wins!");
            return;
        } else if(findWinner(board) === 2) {
            console.log("Congratulations! " + playerX + "wins!");
            return;
        } else {
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
}

gameLoop();
