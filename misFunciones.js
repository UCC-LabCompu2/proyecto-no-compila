/**
 * Created by Cristian on 15/06/2017.
 */

function mostrar_ob2(accion) {
    console.log("accion");

    if (accion==="encuentro" ){
        console.log("mostrar");
        document.getElementById('objeto2').style.display = 'block';
        document.getElementById('1').style.display = 'none';
        document.getElementById('2').style.display = 'block';
        document.getElementById('3').style.display = 'none';
        document.getElementById('ace').style.display = 'none';
    }

    else if (accion==="mru"){
        console.log("ocultar");
        document.getElementById('objeto2').style.display = 'none';
        document.getElementById('ace').style.display = 'none';
    }
    if (accion==="mruv"){
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
    document.getElementById("Vfr").value="";
    document.getElementById("Xr").value="";
    document.getElementById("Af").value="";
    document.getElementById("Te").value="";
    document.getElementById("D1").value="";
    document.getElementById("D2").value="";

}

function convert_unidades(id) {
    id=document.getElementById(id).value;
    if(id==="Kilometros") {
        return (1000);
    }
    if(id==="Centimetros") {
        return (1/100);
    }
    if(id==="km/h") {
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


    var Xo=Number(document.getElementById("Xo").value) * convert_unidades("unidadXo");
    var Vo=Number(document.getElementById("Vo").value) * convert_unidades("unidadVo");
    var t=Number(document.getElementById("t").value);
    var a=Number(document.getElementById("a").value);
    var d=Number(document.getElementById("Xo2").value) * convert_unidades("unidadXo2");
    var Vo2=Number(document.getElementById("Vo2").value) * convert_unidades("unidadVo2");


    if(document.getElementById("mru").checked===true){
        var Xf=Xo+Vo*t;
        var Vf=(Xf-Xo)/t;
        dib1();
        document.getElementById("Vfr").innerHTML="Velocidad="+Vf+"m/s";
        document.getElementById("Xr").innerHTML="Distancia="+Xf+"metros";
    }


    else if(document.getElementById("mruv").checked===true){
        var Xfv=Xo+Vo*t+1/2*a*(t*t);
        var Vfv=Vo+a*t;
        var av=(Vfv-Vo)/(t);
        dib2();
        document.getElementById("Vfr").innerHTML="Velocidad="+Vfv+"m/s";
        document.getElementById("Xr").innerHTML="Distancia="+Xfv+"metros";
        document.getElementById("Af").innerHTML="Aceleracion="+av+"m/s";
    }

    else if(document.getElementById("encuentro").checked===true){
        var te=d/(Vo+Vo2);
        var d1=Vo*te;
        var d2=Vo2*te;
        dib3(te,d1,d2);
        document.getElementById("Te").innerHTML="Tiempo de encuentro="+te+"s";
        document.getElementById("D1").innerHTML="distancia recorrida objeto 1="+d1+"m";
        document.getElementById("D2").innerHTML="distancia recorrida objeto 2="+d2+"m";

    }
}

function dib1() {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var x=50;


    ctx.lineWidth= 2;
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.moveTo(x,500);
    ctx.lineTo(400,500);
    ctx.stroke();

    var ti=(document.getElementById("t").value);
    ctx.font = '20px Arial';
    ctx.textAlign='center';
    ctx.fillText(Number(ti)+""+"seg",200,520);

    ctx.lineWidth= 2;

    ctx.beginPath();
    ctx.moveTo(x,500);
    ctx.lineTo(x,200);
    ctx.stroke();
    var xi=(document.getElementById("Xo").value);
    ctx.font = '20px Arial';
    ctx.fillText(Number(xi)+"m",30,325);

    ctx.lineWidth=3;

    ctx.beginPath();
    ctx.moveTo(x,500);
    ctx.lineTo(400,200);
    ctx.stroke();
}

function dib2() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var x = 50;


    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.moveTo(x, 500);
    ctx.lineTo(400, 500);
    ctx.stroke();

    var ti = (document.getElementById("t").value);
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(Number(ti)+""+"seg", 200, 520);

    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(x, 500);
    ctx.lineTo(x, 200);
    ctx.stroke();
    var xi = (document.getElementById("Xo").value);
    ctx.font = '20px Arial';
    ctx.fillText(Number(xi)+"m", 30, 325);

    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(x, 500);
    ctx.lineTo(400, 200);
    ctx.stroke();
}

function dib3(te,y,z) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var x = 25;


    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.moveTo(x, 500);
    ctx.lineTo(350, 500);
    ctx.stroke();

    ctx.font = '20px Arial';
    ctx.fillText(Number(te)+""+"seg", 350, 520);

    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(x, 500);
    ctx.lineTo(x, 200);
    ctx.stroke();
    ctx.font = '20px Arial';
    ctx.fillText(Number(y)+"m", 10, 325);

    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(x, 500);
    ctx.lineTo(350, 200);
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";

    ctx.beginPath();
    ctx.moveTo(700, 500);
    ctx.lineTo(350, 500);
    ctx.stroke();

    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(700, 500);
    ctx.lineTo(700, 200);
    ctx.stroke();
    ctx.font = '20px Arial';
    ctx.fillText(Number(z)+"m", 710, 325);

    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(700, 500);
    ctx.lineTo(350, 200);
    ctx.stroke();
}