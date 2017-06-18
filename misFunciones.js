/**
 * Created by Cristian on 15/06/2017.
 */

function mostrar_ob2(accion) {
    console.log("accion");

    if (accion=="encuentro" ){
        console.log("mostrar");
        document.getElementById('objeto2').style.display = 'block';
    }

    else if (accion=="mru"){
        console.log("ocultar");
        document.getElementById('objeto2').style.display = 'none';
    }
    if (accion=="mruv"){
        console.log("ocultar");
        document.getElementById('objeto2').style.display = 'none';
    }
}