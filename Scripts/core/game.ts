// IIFE - Immediately Invoked Function Expression

(function(){
     

    //Game variables

    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:objects.Label;
    let clickMeButton:createjs.Bitmap;

    function Init():void{
        console.log("Initialization Started");
            Start();
    }

    function Start():void{
        console.log("Starting Application....");

        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // turn this on for buttons
        createjs.Ticker.framerate = 60; //60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
        
    }
    
    function Update():void
    {
       
        stage.update();
    }
    
    function clickMeButtonMouseOver():void{
        clickMeButton.alpha = 0.7;

    }

    function clickMeButtonMouseOut():void{
        clickMeButton.alpha = 1.0;
    }

    function clickMeButtonClick():void{
        helloLabel.text = "Clicked!";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    }

    
    function Main():void{
        console.log("Game Started...");

        helloLabel = new objects.Label("Hello, World!","40px", "consolas","#000000",320,240, true);    
        stage.addChild(helloLabel);

        clickMeButton = new createjs.Bitmap("./Assets/images/click_here_button.png");
        clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
        clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
        clickMeButton.x = 320;
        clickMeButton.y = 340; 
        stage.addChild(clickMeButton);

        clickMeButton.on("mouseover", clickMeButtonMouseOver);
        clickMeButton.on("mouseout", clickMeButtonMouseOut);
        clickMeButton.on("click", clickMeButtonClick);


    }

    window.onload = Init;

})();