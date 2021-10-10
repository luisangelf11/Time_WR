import { TimerContent } from "./timer.js";

export function Main(){
    const $main = document.createElement("main");
    $main.id = "main";
    $main.appendChild(TimerContent());
    return $main;
}