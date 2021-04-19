/*
  Write a program that creates a string that represents an 8×8 grid, 
  using newline characters to separate lines. 
  At each position of the grid there is either a space or a "#" character. 
  The characters should form a chessboard.
*/

const chessBoard = (size = 8, string = '#') => {
    let board = "";
    // outer loop for rows
    for (let row = 1; row <= size;row++) {
        // inner loop for columns
        for (let column = 1; column <=size;column++) {
            // if yes; put a space
            // if not, put a string(hash)(default)
            (
                (row + column) % 2 === 0 ?
                board += " " :
                board += string
            )
        }
        //Add a newline character to separate rows in the outer loop
        board += "\n";
    }
    // print chess board to console
    console.log(board);
}

chessBoard();