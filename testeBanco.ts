import { Banco } from "./Banco";

// Instanciar (criar objeto)
const banco1: Banco = new Banco(15, 'Madeira', 2);
const banco2: Banco = new Banco(18, 'Concreto', 5);



banco1.sentar();
banco2.descansar();