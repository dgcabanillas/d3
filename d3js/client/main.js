function rad(x){return x*3.14159265359/180;}
function s(x){return Math.sin(rad(x));}
function c(x){return Math.cos(rad(x));}

/*
Ejemplo 1

var body = d3.select("body");

body.append("h1").text("Hola GG");

var h1 = body.select("h1");

h1.attr({id:"cabecera",class:"clase-1"});

h1.classed("clase-2",true); //agregar clase

h1.classed("clase-1",false); //eliminar clase

h1.style({color: "black","font-size":"50px"});d3.curveBasisClosed(context)

h1.html("<span>Melissa</span> D3.js");

h1.remove();
*/


/* Ejemplo 3, por alguna razon de mierda no puedo seleccionar un svg ya existente en el body
por ello tengo que insertar un nuevo elemento svg en el body y trabajar con este
var body = d3.select("body");
body.append("svg").attr({width:500,height:200});
var svg = d3.select("svg");
svg.append("rect").attr({x:0,y:0,width:100,height:200,fill:"green"});
*/

/* Ejemplo 4
var body = d3.select("body");
var datos = [10,20,30,40,50,60];
body.selectAll("p").data(datos)
	.enter()
	.append("p")
	.text(function(d,i){return "posicion "+i+" valor: "+d;});
*/
 
/* Ejemplo 5
var svg = d3.select("body")
	.append("svg")
	.attr({
		width: 500,
		height:500
	});
var datos = [90,100,250,100,90];
svg.selectAll("rect")
	.data(datos)
	.enter()
	.append("rect")
	.attr({
		x: function(d,i){return i*60},
		y: function(d){return 250-d;},
		width: 50,
		height: function(d){return d;}
	});

svg.append("text")
	.attr({
		x:70,
		y:280,
		fill: "black"
	})
	.text("Jodanse Putitos!");
*/

/*
Ejemplo 5
var svg = d3.select("body")
			.append("svg")
			.attr({
				width: 400,
				height: 400
			});

var std = [1,0.4,0.3,0.7,0.5];
var radio = 1;
var h = 2;
var k = 2;
function rad(x){
	return x*3.14159265359/180;
}

scaleX = d3.scale.linear().domain([0,1]).range([0,100]);
scaleY = d3.scale.linear().domain([0,1]).range([0,100]);


var vertices = [{"x":h+radio*Math.sin(rad(0)),"y":k-radio*Math.cos(rad(0))},
				{"x":h+radio*Math.sin(rad(72)),"y":k-radio*Math.cos(rad(72))},
				{"x":h+radio*Math.sin(rad(144)),"y":k-radio*Math.cos(rad(144))},
				{"x":h+radio*Math.sin(rad(216)),"y":k-radio*Math.cos(rad(216))},
				{"x":h+radio*Math.sin(rad(288)),"y":k-radio*Math.cos(rad(288))}];

svg.selectAll("polygon")
	.data([vertices])
	.enter()
	.append("polygon")
	.attr("points",function(d){
		return d.map(function(d){
			return [scaleX(d.x),scaleY(d.y)].join(",");
		}).join(" ");
	})
	.attr("fill","white")
	.attr("stroke","black")
    .attr("stroke-width",2);
*/
 //Ejemplo 6
var svg = d3.select("body")
			.append("svg")
			.attr({
				width: 400,
				height: 400
			});

var base = [1,1,1,1,1];
var stdk = [1,0.8,0.6,0.8,0.8];

var pentBase = [];
for(i=0;i<5;i++){
	pentBase[i*2]   = 200+base[i]*100*s(i*72);
	pentBase[i*2+1] = 200-base[i]*100*c(i*72);
}

var pentStdk = [];
for(i=0;i<5;i++){
	pentStdk[i*2]   = 200+stdk[i]*100*s(i*72);
	pentStdk[i*2+1] = 200-stdk[i]*100*c(i*72);
}

svg.append("polygon")
	.attr("points",[pentBase])
	.attr("fill","white")
	.attr("stroke","black")
    .attr("stroke-width",2);


svg.append("polygon")
	.attr("points",[pentStdk])
	.attr("fill","#F5DA81")
	.attr("stroke","white")
    .attr("stroke-width","1");

/*
var linea = [0,100,100,100];

for(var i=0;i<2;i++){
	svg.append("line")
	.attr({
		x1:i*100,
		y1:0,
		x2:(i+1)*100,
		y2:100
	})
	.attr("stroke","black")
	.attr("stroke-width","2");

} */

/*Ejemplo 7 Barras !! 
var datos = [1,2];
for(var i=2;i<10;i++){
	datos[i] = datos[i-2]+datos[i-1]; 
}

var x = d3.scale.linear()
				.domain([0,d3.max(datos)])
				.range([0,500]);

d3.select("body").append("div").attr({id:"barras"});
var barras = d3.select("#barras")
				.selectAll("div")
				.data(datos)
				.enter().append("div")
				.style({
					width: function(d){return x(d)+"px";}
				})
				.text(function(d){return d;});

*/
/*
d3.select("body").append("div").text("Estoy");
d3.select("body").append("div").text("Aprendiendo");
d3.select("body").append("div").text("D3");

d3.select("body").append("hr");
d3.select("body").append("button")
					.text("Seleccionar bloque")
				   	.attr({
				   		onclick:"sb()"
				   	});
d3.select("body").append("div").attr({class:"bloque"})
d3.select("body").select(".bloque").append("div").text("Esto");
d3.select("body").select(".bloque").append("div").text("es un");
d3.select("body").select(".bloque").append("div").text("bloque nuevo");

d3.selectAll("div")
	.style({
		"background-color": "green"
	});
*/









