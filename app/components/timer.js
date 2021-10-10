export function TimerContent(){
    const $timerContent = document.createElement("section");
    $timerContent.classList.add("timer");
    $timerContent.innerHTML = `
    <div class="time">
        <h2 id="title">Time work</h2>
        <h3 id="data-now">00:00</h3>
    </div>
    <div class="controls">
        <div class="selectors">
            <label for="select-minutes">Minutes work</label>
            <select id="select-minutes">
            <option>Work</option>
            </select>
            <label for="select-relax">Minutes relax</label>
            <select id="select-relax">
            <option>Relax</option>
            </select>
        </div>
        <div class="buttons">
            <button id="btn-start" disabled>Start</button>
            <button id="btn-pause" disabled>Pause</button>
            <button id="btn-cancel">Cancel</button>
        </div>
    </div>
    `;

    function CreateOptions(){
        const $select = document.getElementById("select-minutes");
        const $relax = document.getElementById("select-relax");
        for(let i=1; i<=59; i++){
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            $select.appendChild(option);
        }
        for(let i=1; i<=59; i++){
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            $relax.appendChild(option);
        }
    }

    setTimeout(()=>{
        CreateOptions();
    }, 1000);

    return $timerContent;
}