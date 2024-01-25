var len= document.querySelectorAll(".drum").length;

console.log(len);
for(i=0;i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var iHT= this.innerHTML;
        switch(iHT){
            case('w'):
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
            case('a'):
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
            case('s'):
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
            case('d'):
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
            case('j'):
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
            case('k'):
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
            case('l'):
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
        }
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
});



function makeSound(key){
    switch(key){
        case('w'):
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        case('a'):
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        case('s'):
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        case('d'):
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        case('j'):
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        case('k'):
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        case('l'):
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
    }
}