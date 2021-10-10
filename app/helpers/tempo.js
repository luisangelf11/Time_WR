export function TempoRun(){
    //Vars
    const d = document,
          $selector = d.getElementById("select-minutes"),
          $relax = d.getElementById("select-relax"),
          $btnPlay = d.getElementById("btn-start"),
          $btnPause = d.getElementById("btn-pause"),
          $btnCancel = d.getElementById("btn-cancel"),
          $audio = d.createElement("audio"),
          $title = d.getElementById("title"),
          $timeText = d.getElementById("data-now");
    let clockTime,
        clockRelax,
        valueTimeStart =0,
        valueRelax =0,
        seconds = 0,
        minutes =0;
        $audio.src = "./app/assets/sound.mp3";
    //Event change 
    d.addEventListener("change", (e)=>{
        if(e.target === $selector){
            if(e.target.value === "Work"){
                $btnPlay.disabled = true;
            }else{
                $btnPlay.disabled = false;
                valueTimeStart = $selector.value;
            }
        }

        if(e.target === $relax){
            if(e.target.value === "Relax"){
                $btnPlay.disabled = true;
            }else{
                $btnPlay.disabled = false;
                valueRelax = $relax.value;
            }
        }
    });

    //Event Click
    d.addEventListener("click", (e)=>{
        //Event play
        if(e.target === $btnPlay){
            //console.log(valueTimeStart);
            //console.log(valueRelax);
            clockTime = setInterval(() => {
                if(seconds === 59){
                    seconds = 0;
                    minutes ++;
                }
                seconds ++;
                if(minutes == valueTimeStart){
                    clearInterval(clockTime);
                    setTimeout(() => {
                        $audio.play();
                    }, 1000);
                    seconds = 0;
                    minutes = 0;
                    $title.textContent = "Relax time";
                    if($title.textContent === "Relax time"){
                        clockRelax = setInterval(()=>{
                            if(seconds === 59){
                                seconds = 0;
                                minutes ++;
                            }
                            seconds ++;
                            if(minutes == valueRelax){
                                clearInterval(clockRelax);
                                setTimeout(() => {
                                    $audio.play();
                                }, 1000);
                                seconds = 0;
                                minutes = 0;
                                $title.textContent = "Time work";
                                if($title.textContent === "Time work"){
                                    $selector.disabled = false;
                                    $relax.disabled = false;
                                    $selector.value = "Work";
                                    $relax.value = "Relax";
                                }
                            }
                            $timeText.textContent = `${(minutes <=9)? "0" + minutes: minutes}:${(seconds <=9)? "0" + seconds: seconds}`;
                        }, 1000);
                    }
                }
                $timeText.textContent = `${(minutes <=9)? "0" + minutes: minutes}:${(seconds <=9)? "0" + seconds: seconds}`;
            }, 1000);
            console.log(e);
            e.target.disabled = true;
            $selector.disabled = true;
            $relax.disabled = true;
            $btnPause.disabled = false;
        }

        //Event pause
        if(e.target === $btnPause){
            //console.log(e);
            clearInterval(clockTime);
            e.target.disabled = true;
            $btnPlay.disabled = false;
        }

        //Event cancel
        if(e.target === $btnCancel){
            clearInterval(clockTime);
            clearInterval(clockRelax);
            $title.textContent = "Time work";
            $timeText.textContent = "00:00";
            $selector.disabled = false;
            $btnPause.disabled = true;
            $btnPlay.disabled = true;
            $relax.disabled = false;
            minutes =0;
            valueRelax =0;
            valueTimeStart =0;
            seconds =0;
        }
    });
}