const fs = require('fs');

let moduloMaterias = {
    ubicacionJson : './materias.json',
    leerJSON : function(){
        let archivo = fs.readFileSync(this.ubicacionJson, 'utf-8');
        let parceadoObjeto = JSON.parse(archivo);
        return parceadoObjeto
    },
    guardarJSON : function(cambio){
        let parceoJSON = JSON.stringify(cambio);
        fs.writeFileSync(this.ubicacionJson, parceoJSON, 'utf-8')
    },
    agregarMateria : function(materia, estado){
        let nuevoJSON = this.leerJSON()
        let nuevaMateria = {
            materia : materia,
            estado : estado
        }
        nuevoJSON.push(nuevaMateria)
        this.guardarJSON(nuevoJSON)
        return 'LA MATERIA FUE AGREGADA'
    },
    deshacer : function(){
        let nuevoJSON = this.leerJSON()
        nuevoJSON.pop()
        this.guardarJSON(nuevoJSON)
        return 'LA ULTIMA MATERIA FUE ELIMINADA'
    },
    filtrarEstado : function(filtro){
        let listaMaterias = this.leerJSON()
        let filtrado = listaMaterias.filter(situacion =>situacion.estado === filtro)
        return filtrado
    },
    buscarMateria : function(buscar){
        let listaMaterias = this.leerJSON()
        let busqueda = listaMaterias.filter(function(titulo){
            return titulo.materia.includes(buscar)
        })
        return busqueda
    }
}
module.exports = moduloMaterias

//console.log(moduloMaterias.buscarMateria('5° SIC'));

