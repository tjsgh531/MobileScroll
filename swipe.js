
export class Swipe{
    constructor(){
   
    }
    swipe(target){
        $(target).bind("touchstart",(event)=>{
            console.log(event.clientX);
        }) 
    }

}