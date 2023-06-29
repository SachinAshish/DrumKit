var number =document.querySelectorAll(".drum").length;
for (var i=0;i<number;i++)
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   var buttonInnerHTML=this.innerHTML;
  
   makeSound(buttonInnerHTML);
   
    

});
document.addEventListener("keypress", function(event) {

    makeSound(event.key);
  
  });
  
    

function makeSound(key){
    switch(key){
    
        case "w":
            var audio=new Audio("Sounds/tom-1.mp3")
            audio.play()
            break;
         
            case "a":
                var audio=new Audio("Sounds/tom-2.mp3")
                audio.play()
                break;
    
                case "s":
                    var audio=new Audio("Sounds/tom-3.mp3")
                    audio.play()
                    break;
    
                    case "d":
                        var audio=new Audio("Sounds/tom-4.mp3")
                        audio.play()
                        break;
    
                        case "j":
                            var audio=new Audio("Sounds/snare.mp3")
                            audio.play()
                            break;
    
                            case "k":
                                var audio=new Audio("Sounds/crash.mp3")
                                audio.play()
                                break;
                                case "l":
                                    var audio=new Audio("Sounds/kick-bass.mp3")
                                    audio.play()
                                    break;
                                    default:console.log();
}
}