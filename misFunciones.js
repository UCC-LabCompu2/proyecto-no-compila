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
        document.getElementById('ace').style.display = 'none';
    }
    if (accion=="mruv"){
        console.log("ocultar");
        document.getElementById('objeto2').style.display = 'none';
        document.getElementById('ace').style.display = 'block';
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
    document.getElementById("Vfr").value="";
    document.getElementById("Xr").value="";
    document.getElementById("Tfr").value="";
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

function verifvaloringresado(id) {
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

function calculo() {
    var x=document.getElementById("mru");
    var y=document.getElementById("mruv");
    var z=document.getElementById("encuentro");
    var Xo=Number(document.getElementById("Xo").value) * convert_unidades("unidadXo");
    var Vo=Number(document.getElementById("Vo").value) * convert_unidades("unidadVo");
    var t=Number(document.getElementById("t").value);
    var a=Number(document.getElementById("a").value);

    if(x){
        var Xf=Xo+Vo*t;
        var Vf=(Xf-Xo)/t;
        document.getElementById("Vfr").innerHTML="Velocidad="+Vf+"m/s";
        document.getElementById("Xr").innerHTML="Distancia="+Xf+"metros";
    }


    if(y){
        var Xfv=Xo+Vo*t+1/2*a*(t*t);
        var Vfv=Vo+a*t;
        var av=(Vfv-Vo)/(t);
        document.getElementById("Vfr").innerHTML="Velocidad="+Vfv+"m/s";
        document.getElementById("Xr").innerHTML="Distancia="+Xfv+"metros";
        document.getElementById("Af").innerHTML="Aceleracion="+av+"m/s";
    }

    
}
