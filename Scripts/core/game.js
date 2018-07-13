// IIFE - Immediately Invoked Function Expression
(function () {
    //Game variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    function Init() {
        console.log("Initialization Started");
        Start();
    }
    function Start() {
        console.log("Starting Application....");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; //60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        helloLabel.rotation -= 5;
        stage.update();
    }
    function Main() {
        console.log("Game Started...");
        helloLabel = new createjs.Text("Hello, World!", "40px consolas", "#000000");
        helloLabel.x = 100;
        helloLabel.y = 100;
        stage.addChild(helloLabel);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map