import{
    DataBase
}from "./dataBase.js";
import{
    Swipe
}from "./swipe.js";

export const dataBase = new DataBase();
export const swipeEvent = new Swipe();

class Main{
    constructor(){
        $("window").resize(this.resize.bind(this));
        this.resize();
        
        $(window).bind("touchstart",(e)=>{
            console.log(e.originalEvent.touches[0].clientX)
        }) 
    }

    resize(){
        this.stageWidth = window.innerWidth;
        this.stageHeight = window.innerHeight;
        $(".sentence").css("width",this.stageWidth).css("height",this.stageHeight);
        $(".sentence p").css("top","50%").css("left","50%").css("transform","translate(-50%,-80%)");
    }

}

$(window).load(()=>{
    new Main();
});