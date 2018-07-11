const endpoint = 'https://apiforyorkdayofcode.azurewebsites.net';

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.setOptions({
     fontSize: "20pt"
   });

function load() {
    swal("Load Canvas", "Enter the name of your canvas.  (For example Duck.Dog.Fish)", {
          content: "input",
        });
}

function save() {

    var iframe = getIframe();
    var data = 
    {
        "code" : getScript(),
        "image" : iframe.contentWindow.convertCanvasToImage()
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", endpoint + '/api/canvasses', true);
    
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onreadystatechange = function() {
        if(this.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200)
            {
                var result = JSON.parse(xhr.responseText);
                swal("Canvas Saved", "Your canvas has the name of " + result.id, {
                      button: "OK",
                    });
            }
            else
            {
                swal("Canvas Not Saved", "A status code of " + xhr.status + " was reported.", {
                      button: "OK",
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

function run()
{
    var iframe = getIframe();
    iframe.contentWindow.run();
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