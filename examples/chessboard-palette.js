
function chessBoard() {
    var height = 20;
    var width = 20;

    var p1 = Colour.paletteOfTweleve();
    var p2 = Colour.paletteOfTweleve("icecream");

    for (var y = 0; y<8; y++)
    {
        for (var i = 0; i<8; i++)
        {
            if ((i+y) % 2 === 0)
                Draw.Square(p1[i], 20, 40 + (i*width), 10 + (y*height));
            else
                Draw.Square(p2[i], 20, 40 + (i*width), 10 + (y*height));
        }
    }
}
chessBoard();