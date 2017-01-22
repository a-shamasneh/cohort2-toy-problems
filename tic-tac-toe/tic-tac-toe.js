/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/

function ticTacToe(board){
	var ok=0;
	var r1=board[0][0];
	var r12=board[0][1];
	var r13=board[0][2];
	var r21=board[1][0];
	var r22=board[1][1];
	var r23=board[1][2];
	var r31=board[2][0];
	var r32=board[2][1];
	var r33=board[2][2];

	if(r1==1&&r12==1&&r13==1){
		return 1;

	}
	///
	if(r1==2&&r12==2&&r13==2){
		return 2;
	}
	///
	if(r1==1&&r21==1&&r31==1){
		return 1;
	}
	///
	if(r1==2&&r21==2&&r31==2){
		return 2;
	}
	///
	if(r12==1&&r22==1&&r32==1){
		return 1;
	}
	///
	if(r13==1&&r23==1&&r33==1){
		return 1;
	}
	//
	if(r12==2&&r22==2&&r32==2){
		return 2;
	}
	///
	if(r13==2&&r23==2&&r33==2){
		return 2;
	}
	//
	if(r1==1&&r22==1&&r33==1){
		return 1;
	}
	///
	if(r1==2&&r22==2&&r33==2){
		return 2;
	}
	///
	if(r33==1&&r22==1&&r1==1){
		return 1;
	}
	if(r33==2&&r22==2&&r1==2){
		return 2;
	}

	if(ok==0){
		return -1;
	}

};




