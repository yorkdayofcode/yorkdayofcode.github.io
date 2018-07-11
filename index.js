const endpoint = 'https://apiforyorkdayofcode.azurewebsites.net';

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.setOptions({
     fontSize: "20pt"
   });

function load() {

    swal({
        title: "Load Canvas",
        text: "Enter the name of your canvas.  (For example Duck.Dog.Fish)",  
        content: "input",
        }).then(function (code) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", endpoint + '/api/canvasses/'+code, true);
            
            xhr.setRequestHeader("Content-Type", "application/json");
            
            xhr.onreadystatechange = function() {
                if(this.readyState == XMLHttpRequest.DONE) {
                    if (xhr.status == 200)
                    {
                        var result = JSON.parse(xhr.responseText);
                        setScript(result.code);
                        run();

                        swal("Canvas Successfully Loaded", "Your canvas was successfully loaded", {
                              button: "OK",
                            });
                    }
                    else
                    {
                        swal("Canvas Not Loaded", "A status code of " + xhr.status + " was reported. (" + xhr.responseText + ")", {
                              button: "OK",
                            });
                    }
                }
            }

            xhr.send(); 
        });
}
//number.degree.others
//open.shake.collection

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

function setScript(code) {
    var editor = ace.edit("editor");
    return editor.setValue(code);
}