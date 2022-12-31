/*
    ===== Código de TypeScript =====
*/
interface Pasajero {

    nombre: string;
    hijos?: string[];

}

const pasajero1: Pasajero = {
    nombre: 'Nicolas'
}

const pasajero2: Pasajero = {
    nombre: 'Gabriela',
    hijos: ['Ana','Natalia']
}

function imprimirHijos( pasajero: Pasajero ): void {
    const cuantosHijos = pasajero.hijos?.length||0;
    console.log( cuantosHijos );
}

imprimirHijos(pasajero1);