let moduloMaterias = require('./materias')

const process = require('process')
let comando = process.argv[2]

switch(comando){
    case 'revisar':
        console.log(moduloMaterias.leerJSON()); 
    break;
    case 'agregar':
        let materia = process.argv[3]
        let estado = process.argv[4]
        console.log(moduloMaterias.agregarMateria(materia, estado));
    break;
    case 'deshacer':
        console.log(moduloMaterias.deshacer());
    break;
    case 'estado':
        let filtro = process.argv[3]
        console.log(moduloMaterias.filtrarEstado(filtro));
    break;
    case 'buscar':
        let buscar = process.argv[3]
        console.log( moduloMaterias.buscarMateria(buscar));
    break;
    case undefined:
        console.log( `Se debe utilizar alguno de los siguientes comandos:
        -revisar
        -agregar
        -deshacer
        -estado
        -buscar`);
    break;
    default:
        console.log('Este comando no esta disponible');
}