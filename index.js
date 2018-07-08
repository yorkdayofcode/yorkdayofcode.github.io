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
    swal("Canvas Saved", "Your canvas has the name of Duck.Dog.Fish", {
          button: "OK",
        });
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