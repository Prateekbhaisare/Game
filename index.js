score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(()=>{
    audio.play();
})

document.onkeydown = function(e){
    console.log("Key code is:" , e.keyCode)
    if(e.keyCode == 38){
        boy = document.querySelector('.boy')
        boy.classList.add('animatedBoy');
        setTimeout(()=>{
            boy.classList.remove('animatedBoy');
        }, 700);
    }
    
    if(e.keyCode == 39){
        boy = document.querySelector('.boy')
        boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        boy.style.left = boyX + 112 + "px";
    }

    if(e.keyCode == 37){
        boy = document.querySelector('.boy')
        boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        boy.style.left = (boyX - 112) + "px";
    }
}

setInterval(()=>{
    boy = document.querySelector('.boy');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    bx = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
    by = parseInt(window.getComputedStyle(boy, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));            
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(bx-ox);
    offsetY = Math.abs(by-oy);

    if(offsetX < 113 && offsetY < 52){
        gameOver.innerHTML = 'Game Over - Reload to Play Again';
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
        }, 1000);
    }

    else if(offsetX < 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(()=>{
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation.duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = nuwDur + 's';
        },500)
    }

},  100);

function updateScore(score){
    scoreCont.innerHTML = "Your Score: " + score;
}
