
function chessBoard() {
    var height = 10;
    var width = 20;

    for (var y = 0; y<8; y++)
    {
        for (var i = 0; i<8; i++)
        {
            if ((i+y) % 2 == 0)
                Draw.Square(Colour.Random(), 20, 40 + (i*width), 10 + (y*height)) 
            else
                Draw.Square(Colour.Random(), 20, 40 + (i*width), 10 + (y*height)) 
        }
    }
}

chessBoard();