import { Camera } from "./Camera";

// Instanciar (criar objeto)
const Camera1: Camera = new Camera('Metal','Grava bem' , 'Nikon');
const Camera2: Camera = new Camera('Aço','Fotografa ótimo' ,  'Canon');



Camera1.gravar();
Camera2.fotografar();