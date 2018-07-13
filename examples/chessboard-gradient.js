
function chessBoard() {
    var height = 20;
    var width = 20;

    var cool = Colour.gradient(8,"cool");
    var warm = Colour.gradient(8,"warm");
    
    for (var y = 0; y<8; y++)
    {
        for (var i = 0; i<8; i++)
        {
            if ((i+y) % 2 === 0)
                Draw.Square(cool[i], 20, 40 + (i*width), 10 + (y*height));
            else
                Draw.Square(warm[y], 20, 40 + (i*width), 10 + (y*height));
        }
    }
}
chessBoard();