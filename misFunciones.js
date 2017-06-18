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

function reset() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);

    document.getElementById("Xo").value="";
    document.getElementById("Vo").value="";
    document.getElementById("t").value="";
    document.getElementById("a").value="";
    document.getElementById("Xo2").value="";
    document.getElementById("Vo2").value="";
    document.getElementById("t2").value="";
    document.getElementById("a2").value="";
    document.getElementById("Vf").value="";
    document.getElementById("X").value="";
    document.getElementById("Tf").value="";
}

function convert_unidades(id) {
    id=document.getElementById(id).value;
    if(id=="Kilometros") {
        return (1*1000);
    }
    if(id=="Centimetros") {
        return (1*100);
    }
    if(id=="km/h") {
        return (1000/3600);
    }
    return 1;
}

function verificarvaloringresado(id) {
    var i = document.getElementById(id).value;
    if (isNaN(i)) {
        alert("Se ingreso un valor invalido en " + id);
        document.getElementById(id).value = "";
    }
    else if (i < 0) {
        alert("Los valores no pueden ser negativos");
        document.getElementById(id).value = "";
    }
}