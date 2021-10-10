import { Main } from "./components/main.js";
import { TempoRun } from "./helpers/tempo.js";

export default function App(){
    const d = document,
          $root = d.getElementById("root");
    $root.appendChild(Main()); //Main Run
    TempoRun();
}