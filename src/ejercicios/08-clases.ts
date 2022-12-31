/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    /* nombre: string;
    direccion: string; */
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe extends PersonaNormal{
    /* alterEgo: string;
    edad: number;
    nombreReal: number;
 */
    constructor( 
        public alterEgoo: string,
        public edadd: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'New York, USA');
     }

}

const ironman = new Heroe('Iron Man',45,'Tony');

console.log(ironman);