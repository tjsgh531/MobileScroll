import{
    DataBase
}from "./dataBase.js";

export const dataBase = new DataBase();

class Main{
    constructor(){
        $("window").resize(this.resize.bind(this));
        this.resize();

        $(".sentence").bind("swipeleft",console.log("실행"));    
    }

    resize(){
        this.stageWidth = window.innerWidth;
        this.stageHeight = window.innerHeight;
        $(".sentence").css("width",this.stageWidth).css("height",this.stageHeight);
        $(".sentence p").css("top","50%").css("left","50%").css("transform","translate(-50%,-80%)");
    }

    changePage(dir){
        console.log("실행");
        const index = dataBase.indexNum + dir;
        if(index < 0 || index > dataBase.sentences.length){
            return;
        }
        else{
            dataBase.indexNum = index;
            $(".sentence p").html(dataBase.sentences[index]);
        }
    }
}

$(window).load(()=>{
    new Main();
});