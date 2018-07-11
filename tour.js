  var tour = {
    id: "hopscotch-tour",
    steps: [
      {
        title: "Welcome",
        content: "York Day Of Code",
        target: "header",
        placement: "right"
      },
      {
        title: "Code Editor",
        content: "This is where you are going to write your program.  To start with type in <b>Square()</b>",
        target: document.querySelector("#editor"),
        placement: "right"
      },
      {
        title: "Run Code",
        content: "Once you have written you program,  click the <b>Run Code</b> button to compile and run it.",
        target: document.querySelector("#compile"),
        placement: "left"
      },
      {
        title: "Canvas",
        content: "If all has gone to plan,  then your picture will be shown here.",
        target: document.querySelector("#iframe"),
        placement: "left"
      }
    ]
  };