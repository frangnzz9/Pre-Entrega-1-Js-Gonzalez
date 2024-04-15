
function cantidades (){
    cantidad = parseInt(prompt("Cuántas prendas necesitas? (Escriba con número la opción)"));
    if(cantidad > 0){
        alert("La cantidad requerida es de " + cantidad)
    }else{
        alert("Ingrese una cantidad en números.");
    };
                      };
                      
function subtotal (){
    alert("Agregaste "+ cantidad + " " + prenda + " " + tipo + " de talle " + talle);
}                      

function talles (prenda){
    talle = prompt("Qué talle estás buscando? (Escriba con letras la opción)\n\n1. S\n2. M\n3. L\n4. XL\n5. XXL").toLocaleLowerCase();
                switch (talle) {
                        case "s":
                        alert("Elegiste una " + prenda + " de talle " + talle);
                        break;
                        case "m":
                        alert("Elegiste una " + prenda + " de talle " + talle);
                        break;
                        case "l":
                        alert("Elegiste una " + prenda + " de talle " + talle);
                        break;
                        case "xl":
                        alert("Elegiste una " + prenda + " de talle " + talle);
                        break;
                        case "xxl":
                        alert("Elegiste una " + prenda + " de talle " + talle);
                        break;
                        default:
                        alert("Ingrese alguna opción.")
                        break;
                } 
};

