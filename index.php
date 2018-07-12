<!DOCTYPE html>
<html lang="en">

<head>
    <!-- <META HTTP-EQUIV='Content-Security-Policy' CONTENT="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' ;  "> -->
    <title>York Day Of Code</title>
    <link rel="stylesheet" type="text/css" href="index.css">
    <link rel="stylesheet" href="/hopscotch-0.3.1/css/hopscotch.css">

</head>

<body>

    <div id="editor">Square(GREEN, 20, 50, 50) 
Square(RED, 10, 100, 50)
Square(BLUE, 5, 150, 50) 
Triangle(BLUE, 50, 200, 50)
    </div>

    <button id="registerUser" onclick="registerUser()">
        Register
    </button>

    <button id="save" onclick="save()">
        Save Code
    </button>

    <button id="load" onclick="load()">
        Load Code
    </button>

    <button id="compile" onclick="run()">
        Run Code
    </button>

    <iframe id="iframe" src="./canvas.html" sandbox="allow-scripts allow-same-origin">
    </iframe>

    <script src="/sweetalert.min.js"></script>
    <script src="/hopscotch-0.3.1/js/hopscotch.js"></script>
    <script src="/tour.js"></script>
    <script src="/ace-builds/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
    <script src="/index.js" type="text/javascript" charset="utf-8"></script>
</body>

</html>