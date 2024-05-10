// // 4 formas de impresion
// alert("HOLA MUNDO");
// console.log("HOLA DESDE LA CONSOLA");
// document.write("HOLA DESDE LA INTERFAZ")
// // swal.fire("HOLA DESDE SWEETALERT")
// Swal.fire({
//     title: "The internet",
//     text: "You clicked the button!",
//     icon: "error"
//   });

//VARIABLES Y TIPOS DE DATOS
const pi = 3.14; //decimal
const pull = 2.54;
var name = "Fabian Eduardo" //string
let edad = 23; //entero
var ver = true; //boolean
let fal = false; //boolean

//OPERADORES BASICOS

var suma = 5+2;
console.log(suma)
var var_uno = 10;
var var_dos = 5;
console.log(var_uno-var_dos);
console.log(var_uno*var_dos);
console.log(var_uno/var_dos);
console.log(var_uno%var_dos);

// OPERADORES DE COMPARACION
// = Asigancion
// == comparacion
// === estrictamente comparado ( valor y tipo de dato)
// > / >= / <= / < / <>

console.log("mi edad es: "+ edad);

function load_page(){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        // imageHeight: 1500,
        showConfirmButton: false,
        timer: 2000
      });

      document.getElementById("text").innerText = "El array a calcular es"+array_num;
      document.getElementById("impresion").value = array_num;

}
function send_form(){
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    if(name.length == 0 || last_name.length == 0){
        Swal.fire({
        title: "Cajas de texto vacias",
        text: "Alguna de las cajas de texto esta vacia",
        icon: "error"
    });
        if( name.length == 0){
        document.getElementById("name").style.border = "2px solid red"
        }
        else{
        document.getElementById("name").style.border = "2px solid green"
        }
        if( last_name.length == 0){
        document.getElementById("last_name").style.border = "2px solid red"
        }  
        else{
        document.getElementById("last_name").style.border = "2px solid green"
        }   
}
else{
    document.getElementById("print").innerText = "su nombre es: "+ name + " "+ last_name;
}
}

//ARRAYS
var array_semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
var array_gral = [1,2,2.5,"abc","Soy Fabian"];
var array_num = [1,2,3,4,5,6,7,8,9];

var array_multi = [
    {name: "Fabian", age:23, color:"Verde"},
    {name: "Wilder", age:32, color:"Rosa"},
    {name: "Anyi", age:3, color:"Rosa"},
    {name: "Celeste", age:2, color:"Blanco"}
];
var json_ejm = {
    name:"Fabian",
    lastname: "Rojas",
    phone: "3185009585",
    email: "ferojasp@ufpso.edu.co"
};

console.log(array_semana);
console.log(array_gral);
console.log(array_num);
console.log(array_multi);
console.log(json_ejm);

function action(){
    // alert(array_num);
    // swal.fire(""+array_num);
    // console.log(array_num);
    // console.log(array_num.length);
    // let total = 0;
    // for(let i=1;i<=15;i++){
    //     total= total + i;
    // }
    // console.log(total);
    var result = 0;
    for(let i=0;i<array_num.length;i++){
        result = result+array_num[i]
    }
    

    document.getElementById("result").innerHTML = "<strong>El resultado es: " + result +  "</strong>";
    document.getElementById("result").style.color = "green";

    var total = 0;
    for(var j=0;j<array_multi.length;j++){
        console.log(array_multi[j].age);
        total = array_multi[j].age + total;
    }
    alert(total);
    var total_dos=0;
    var w=0;
    while (w<array_multi[w].age+total_dos) {
        total_dos= array_multi[w].age+total_dos;
        w++;
    }
    alert(total_dos);

}
var array_numerico = [1,2,3,4,5,6,7,8,9];
function eliminar(){
    let array_delete = array_numerico.pop();
    console.log(array_delete);
    document.getElementById("impresion").value=array_numerico;
}
function agregar(){
    let num = document.getElementById("num").value;
    let array_add=array_numerico.push(num);
    console.log(array_add);
    document.getElementById("impresion").value=array_numerico;
}
function reves(){
    document.getElementById("impresion").value =array_numerico.reverse();
}
function eliminar_prim(){
    let array_delete = array_numerico.shift();
    console.log(array_delete);
    console.log(array_numerico);
    document.getElementById("impresion").value=array_numerico;
    
}
function agregar(){
    let num = document.getElementById("num").value
    let array_add = array_numerico.push(num);
    console.log(array_add);
    console.log(array_numerico);
    document.getElementById("impresion").value=array_numerico;

}
function agregar_prim(){
    let num = document.getElementById("num").value
    let array_add = array_numerico.unshift(num);
    console.log(array_add);
    console.log(array_numerico);
    document.getElementById("impresion").value=array_numerico;

}
function limpiar(){
    document.getElementById("num").value="";
    document.getElementById("name").value="";
    document.getElementById("last_name").value="";
    document.getElementById("result").innerText="";
    

    

}