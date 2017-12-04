/**
 * Created by Cristian on 15/06/2017.
 */

/**
 * Muestra y oculta los datos q usaremos a la hora de ingresar los datos
 * para calcular lo q se busca
 * @param accion
 */

function mostrar_ob2(accion) {
    console.log("accion");
    switch (accion) {
        case "encuentro":
            console.log("mostrar");
            document.getElementById('objeto2').style.display = 'block';
            document.getElementById('1').style.display = 'none';
            document.getElementById('2').style.display = 'block';
            document.getElementById('3').style.display = 'none';
            document.getElementById('ace').style.display = 'none';
            break;
        case "mru":
            console.log("mostrar");
            document.getElementById('objeto2').style.display = 'none';
            document.getElementById('1').style.display = 'block';
            document.getElementById('2').style.display = 'block';
            document.getElementById('3').style.display = 'block';
            document.getElementById('ace').style.display = 'none';
            break;
        case "mruv":
            console.log("mostrar");
            document.getElementById('objeto2').style.display = 'none';
            document.getElementById('1').style.display = 'block';
            document.getElementById('2').style.display = 'block';
            document.getElementById('3').style.display = 'block';
            document.getElementById('ace').style.display = 'block';
            break;
    }
}
/**
 * busca y devuelve los valores a nulos
 */
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
    document.getElementById("Vfr").innerHTML="";
    document.getElementById("Xr").innerHTML="";
    document.getElementById("Af").innerHTML="";
    document.getElementById("Te").innerHTML="";
    document.getElementById("D1").innerHTML="";
    document.getElementById("D2").innerHTML="";


}
/**
 * convierte los datos ingresados a los unidades seleccionadas por el usuario
 * @param id
 * @returns {number}
 */

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

/**
 * verifica que los valores ingresados sean validos y no letras, y realiza el cambio de coma por punto
 * @param id
 */

function verifvaloringresado(id) {
    var i = document.getElementById(id).value;
    i = i.toString().replace(/,/g,'.');
    if (isNaN(i)) {
        alert("Se ingreso un valor invalido en " + id);
        document.getElementById(id).value = "";
    } else
        return i;
}

/**
 * verifica que el valor de tiempo sea valido y que no letras, y realiza el cambio de coma por punto
 * @param id
 */
function verifvalortiempo(id) {
    var i = document.getElementById(id).value;
    i = i.toString().replace(/,/g,'.');
    if (i < 0) {
        alert("El valor no puede ser negativos");
        document.getElementById(id).value = "";
    }
    if (isNaN(i)) {
        alert("Se ingreso un valor invalido en " + id);
        document.getElementById(id).value = "";
    }
}


/**
 * Limpia el canvas
 */

function borrarcanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
}
/**
 * Pone en nulo la seccion de resultados obtenidos
 */

function borrarreultados(){
    document.getElementById("Vfr").innerHTML="";
    document.getElementById("Xr").innerHTML="";
    document.getElementById("Af").innerHTML="";
    document.getElementById("Te").innerHTML="";
    document.getElementById("D1").innerHTML="";
    document.getElementById("D2").innerHTML="";
}

/**
 * Pone en nulo los valores en la seccion ingresada de datos
 */

function borrardatosinput() {
    document.getElementById("Xo").value="";
    document.getElementById("Vo").value="";
    document.getElementById("t").value="";
    document.getElementById("a").value="";
    document.getElementById("Xo2").value="";
    document.getElementById("Vo2").value="";
}

/**
 * Realiza calculos a obtener
 * Nota: realiza todos los calculos pero solo muestra los q el usuario eligio
 */

function calculo() {

//cambia coma por punto y convierte a las unidades deseadas
    var Xoa = document.getElementById("Xo").value;
    var Xob = Xoa.toString().replace(/,/g,'.');
    var Xo = Xob*convert_unidades("unidadXo");

    var Voa = document.getElementById("Vo").value;
    var Vob = Voa.toString().replace(/,/g,'.');
    var Vo = Vob * convert_unidades("unidadVo2");

    var ta = document.getElementById("t").value;
    var t = ta.toString().replace(/,/g,'.');

    var aa = document.getElementById("a").value;
    var a = aa.toString().replace(/,/g,'.');

    var da = document.getElementById("Xo2").value;
    var db = da.toString().replace(/,/g,'.');
    var d = db * convert_unidades("unidadXo2");

    var Vo2a = document.getElementById("Vo2").value;
    var Vo2b = Vo2a.toString().replace(/,/g,'.');
    var Vo2 = Vo2b * convert_unidades("unidadVo2");

//calcula mru
    if(document.getElementById("mru").checked===true){
        var Xf1=Xo+Vo*t;
        var Vf1=(Xf1-Xo)/t;
        var Xf=Xf1.toFixed(2);
        var Vf=Vf1.toFixed(2);
        dib1(Xo,t,Xf);
        document.getElementById("Vfr").innerHTML="Velocidad="+Vf+"m/s";
        document.getElementById("Xr").innerHTML="Distancia="+Xf+"metros";
    }

//calcula mruv
    else if(document.getElementById("mruv").checked===true){
        var Xfv1=Xo+Vo*t+1/2*a*(t*t);
        var Vfv1=Vo+a*t;
        var av1=(Vfv1-Vo)/(t);
        var Xfv=Xfv1.toFixed(2);
        var Vfv=Vfv1.toFixed(2);
        var av=av1.toFixed(2);
        dib2(Xo,t,Xfv);
        document.getElementById("Vfr").innerHTML="Velocidad="+Vfv+"m/s";
        document.getElementById("Xr").innerHTML="Distancia="+Xfv+"metros";
        document.getElementById("Af").innerHTML="Aceleracion="+av+"m/s";
    }
//calcula encuentro
    else if(document.getElementById("encuentro").checked===true){
        var te1=d/(Vo+Vo2);
        var d11=Vo*te1;
        var d21=Vo2*te1;
        var te=te1.toFixed(2);
        var d1=d11.toFixed(2);
        var d2=d21.toFixed(2);
        dib3(te,d1,d2);
        document.getElementById("Te").innerHTML="Tiempo de encuentro="+te+"s";
        document.getElementById("D1").innerHTML="distancia recorrida objeto 1="+d1+"m";
        document.getElementById("D2").innerHTML="distancia recorrida objeto 2="+d2+"m";

    }
}
/**
 * Dibuja una flecha en las coordenadas establecidas
 * @param fromx
 * @param fromy
 * @param tox
 * @param toy
 */

function drawArrow(fromx, fromy, tox, toy){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var headlen = 10;
    var ang = Math.atan2(toy-fromy,tox-fromx);

    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(ang-Math.PI/7),toy-headlen*Math.sin(ang-Math.PI/7));
    ctx.lineTo(tox-headlen*Math.cos(ang+Math.PI/7),toy-headlen*Math.sin(ang+Math.PI/7));
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(ang-Math.PI/7),toy-headlen*Math.sin(ang-Math.PI/7));

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
}
/**
 * misma funcion de dibujo pero realizado para encuentro
 * @param fromx
 * @param fromy
 * @param tox
 * @param toy
 */

function drawArrow2(fromx, fromy, tox, toy){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var headlen = 10;
    var ang = Math.atan2(toy-fromy,tox-fromx);

    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(ang-Math.PI/7),toy-headlen*Math.sin(ang-Math.PI/7));
    ctx.lineTo(tox-headlen*Math.cos(ang+Math.PI/7),toy-headlen*Math.sin(ang+Math.PI/7));
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(ang-Math.PI/7),toy-headlen*Math.sin(ang-Math.PI/7));

    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
}

/**
 * realiza el grafico para cuando el usuario elige mru
 * y dibuja el resultado de distancia de acuerdo al valor obtenido
 */

var inter, inter2;
function dib1(Xo,t,Xf) {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var x=70;

    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.moveTo(x, 500);
    ctx.lineTo(400, 500);
    ctx.stroke();

    ctx.font = '20px Arial';
    ctx.textAlign='center';
    ctx.fillText(Number(t)+""+"seg",200,530);


    ctx.beginPath();
    ctx.moveTo(x, 500);
    ctx.lineTo(x, 200);
    ctx.stroke();
    Xo=Xo.toFixed(2);
    ctx.font = '20px Arial';
    ctx.fillText(Number(Xo)+"m",30,325);


    var h=0;
    inter = setInterval(function () {

        if(Xf>500){Xf=499;}
        if (Xf<500){
            if (Xf<0){Xf=Xf*-1;}

            if (Xf<500 && Xf>0){
                if((Xf-h) > 0){
                    h++;
                    drawArrow(x+10,490,x+h,500-h);
                }
                else{
                    clearInterval(inter);
                }
            }}


    }, 1000 / 35);

}

/**
 * realiza el grafico para cuando el usuario elige mruv
 * y dibuja el resultado de distancia de acuerdo al valor obtenido
 */

function dib2(Xo,t,Xf) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var x = 70;

    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.moveTo(x, 500);
    ctx.lineTo(400, 500);
    ctx.stroke();

    ctx.font = '20px Arial';
    ctx.textAlign='center';
    ctx.fillText(Number(t)+""+"seg",200,530);


    ctx.beginPath();
    ctx.moveTo(x, 500);
    ctx.lineTo(x, 200);
    ctx.stroke();
    Xo=Xo.toFixed(2);
    ctx.font = '20px Arial';
    ctx.fillText(Number(Xo)+"m",30,325);


    var h=0;
    inter = setInterval(function () {

        if(Xf>500){Xf=499;}
        if (Xf<500){
            if (Xf<0){Xf=Xf*-1;}

            if (Xf<500 && Xf>0){
                if((Xf-h) > 0){
                    h++;
                    drawArrow(x+10,490,x+h,500-h);
                }
                else{
                    clearInterval(inter);
                }
            }}


    }, 1000 / 35);
}
/**
 * realiza el grafico para cuando el usuario elige encuentro
 */

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
     ctx.fillText(Number(y)+"m", 50, 325);

    var h=0, a=0;
    inter = setInterval(function () {

            if (y<500 && y>0){
                if(h<385 && a<335){
                    h++;
                    a++;
                    drawArrow(x+10,490,x+h,500-a);
                }
                else{
                    clearInterval(inter);
                }
            }


    }, 1000 / 35);

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
     ctx.fillText(Number(z)+"m", 740, 325);

    inter2 = setInterval(function () {

        if (z<500 && z>0){
            if(h<385 && a<335){
                h++;
                a++;
                drawArrow2(700-10,490,700-h,500-a);
            }
            else{
                clearInterval(inter2);
            }
        }


    }, 1000 / 35);
}