import { Extintor } from "./Extintor";

// Instanciar (criar objeto)
const Extintor1: Extintor = new Extintor('Metal',24 , 15);
const Extintor2: Extintor = new Extintor('Aço',18 ,10);



Extintor1.proteger();
Extintor2.apagarFogo();