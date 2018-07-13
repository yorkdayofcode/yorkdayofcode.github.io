
function chessBoard() {
    var height = 20;
    var width = 20;

    for (var y = 0; y<8; y++)
    {
        for (var i = 0; i<8; i++)
        {
            if ((i+y) % 2 === 0)
                Draw.Square(Colour.withName("black"), 20, 40 + (i*width), 10 + (y*height));
            else
                Draw.Square(Colour.withName("white"), 20, 40 + (i*width), 10 + (y*height));
        }
    }
}
chessBoard();