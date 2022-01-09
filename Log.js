class Log{
    constructor(speed){
        this.x = random([100,300,500,700,900]);
        this.y = height-random([550,650,750,1350,1450,1550]);
        this.width = 1500;
        this.height = 800;
        this.speed = speed;
        this.spt = createSprite(this.x,this.y,this.width,this.height);
        this.spt.velocityX = this.speed;
        this.spt.shapeColor = "brown";
        this.spt.scale=0.1;

        for(var i=0;i<6;i++){
            var logs = createSprite(483,height-80-(i*400),width,grassHeight);
                if(i%2===0)
            {
              var Road= createSprite(683,height-150-(1*400)-grassHeight,width,300)
              Road.shapeColor = "grey";
              for(var i = 0;1<40; i++){
                car = new Car(2);
                carGroup1.add(car.spt)
              }
            }


    }
  
}
}