// IIFE - Immediately Invoked Function Expression
(function () {
    //Game variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
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
        stage.update();
    }
    function Main() {
        console.log("Game Started...");
        helloLabel = new objects.Label("Hello, World!", "40px", "consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
        clickMeButton = new createjs.Bitmap("./Assets/images/click_here_button.png");
        clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
        clickMeButton.regy = clickMeButton.getBounds().height * 0.5;
        clickMeButton.x = 320;
        clickMeButton.y = 340;
        stage.addChild(clickMeButton);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map