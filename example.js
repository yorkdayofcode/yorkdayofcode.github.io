
function chessBoard() {
    var height = 10;
    var width = 20;

    for (var y = 0; y<8; y++)
    {
        for (var i = 0; i<8; i++)
        {
            if ((i+y) % 2 == 0)
                Square(GREEN, 20, 40 + (i*width), 10 + (y*height)) 
            else
                Square(RED, 20, 40 + (i*width), 10 + (y*height)) 
        }
    }
}

chessBoard();