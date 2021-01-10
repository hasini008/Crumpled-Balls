class Dustbin{

    constructor(){
    var dustbin_props = {
        isStatic:true,
        friction : 0.5 , 
        density : 1

        this.dustbin = body.rectangle(  150 , 300 , 50 , 70 , dustbin_props)
        World.add(aiWorld , this.ball);
      }  
      
         display() {
          rectMode(CENTER);
          fill("violet");
        rectangle(150 , 300 , 50 , 70)
         }
      }
}