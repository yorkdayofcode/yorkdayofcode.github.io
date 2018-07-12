const endpoint = 'https://apiforyorkdayofcode.azurewebsites.net';

//number.degree.others
//open.shake.collection

function Initialise() {
    setUpEditor();
    var previousCanvasDisplayed = displayCanvasIfSuppliedInQueryString();
    if (!previousCanvasDisplayed) startTour();  //see tour.js
}

function setUpEditor() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
    editor.setOptions({
        fontSize: "20pt"
    });
}

function hasValue(what) {
    return what !== "" && what !== null && what !== undefined;
}

function displayCanvasIfSuppliedInQueryString() {
    var canvasID = getQueryStringVariable("id");
    if (hasValue(canvasID)) {
        loadCanvas(canvasID);
        return true;
    }
    else {
        return false;
    }
}

function getQueryStringVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

function load() {
    swal({
        title: "Load Canvas",
        text: "Enter the name of your canvas.  (For example Duck.Dog.Fish)",
        content: "input",
    }).then(loadCanvas);
}

function loadCanvas(code) {

    if (!hasValue(code)) return;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint + '/api/canvasses/' + code, true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                var result = JSON.parse(xhr.responseText);
                setScript(result.code);
                run();

                swal("Canvas Successfully Loaded", "Your canvas was successfully loaded", {
                    button: "OK",
                });
            }
            else {
                swal("Canvas Not Loaded", "A status code of " + xhr.status + " was reported. (" + xhr.responseText + ")", {
                    button: "OK",
                });
            }
        }
    }

    xhr.send();
}

function save() {

    var iframe = getIframe();
    var data =
    {
        "code": getScript(),
        "image": iframe.contentWindow.Canvas.convertToImage()
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", endpoint + '/api/canvasses', true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                var result = JSON.parse(xhr.responseText);
                swal("Canvas Saved", "Your canvas has the name of " + result.id, {
                    button: "OK",
                });
            }
            else {
                swal("Canvas Not Saved", "A status code of " + xhr.status + " was reported. (" + xhr.responseText + ")", {
                    button: "OK",
                });
            }
        }
    }

    var json = JSON.stringify(data);
    xhr.send(json);
}

function registerUser() {

    var data =
    {
        "gender": "male",
        "agegroup": "10-20",
        "location": "heworth",
        "experience": "beginner"
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", endpoint + '/api/register', true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                var result = JSON.parse(xhr.responseText);
                swal("Registration Complete", "Your unique user ID is " + result.id, {
                    button: "OK",
                });
            }
            else {
                swal("Registration Failed", "A status code of " + xhr.status + " was reported. (" + xhr.responseText + ")", {
                    button: "OK",
                });
            }
        }
    }

    var json = JSON.stringify(data);
    xhr.send(json);
}

function getIframe() {
    return document.getElementById('iframe');
}

function run() {
    var iframe = getIframe();
    iframe.contentWindow.ydoc.Run();
}

function reloadFrame() {
    var iframe = getIframe();
    iframe.src += '';
}

function getScript() {
    // Called by iFrame  (using parent.getScript())
    var editor = ace.edit("editor");
    return editor.getValue();
}

function setScript(code) {
    var editor = ace.edit("editor");
    return editor.setValue(code);
}

Initialise();