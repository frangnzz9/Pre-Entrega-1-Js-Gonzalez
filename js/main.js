alert("Bienvenidos a Cosmos Indumentaria");

/* 
1. Que desea comprar? Remera, Pantalón, Short, Buzo, Campera.
2. Que tipo
3. Que talle?
4. Cuantas cantidades?
5. Agregaste tal prenda, tal talle, tal cantidad.
*/

let prenda;
let tipo;
let talle;
let cantidad;

do{
    prenda = prompt("Que prenda estas buscando? (Escriba con letras la opción)\n\n- Remera\n- Pantalón\n- Short\n- Buzo\n- Campera\n- Salir").toLocaleLowerCase();

    switch (prenda) {
            case "remera":
            tipo = prompt("Qué tipo de remera estás buscando? (Escriba con letras la opción)\n\n- Rayada\n- Lisa\n- Batik").toLocaleLowerCase();
            switch (tipo) {
                case "rayada":
                    alert("Elegiste una "+ prenda + " " + tipo);
                    break;
                case "lisa":
                    alert("Elegiste una "+ prenda + " " + tipo);
                    break;
                case "batik":
                    alert("Elegiste una "+ prenda + " " + tipo);
                    break;        
                default:
                    alert("Elija una opción.")
                    break;
            }
            talles("remera"); 
            cantidades();
            subtotal();
                 
            break;
            case "pantalon":
                tipo = prompt("Qué tipo de pantalón estás buscando? (Escriba con letras la opción)\n\n- Jean\n- Formal\n- Jogging").toLocaleLowerCase();
                switch (tipo) {
                    case "jean":
                        alert("Elegiste un " + prenda + " " + tipo);
                        break;
                    case "formal":
                        alert("Elegiste un " + prenda + " " + tipo);
                        break;
                    case "jogging":
                        alert("Elegiste un " + prenda + " " + tipo);
                        break;        
                    default:
                        alert("Elija una opción.")
                        break;
                }
                talles("pantalón"); 
                cantidades();
                subtotal();
                     
            break;
            case "short":
                tipo = prompt("Qué tipo de short estás buscando? (Escriba con letras la opción)\n\n- Futbol\n- Basquet ").toLocaleLowerCase();
                switch (tipo) {
                    case "futbol":
                        alert("Elegiste un " + prenda + " " + tipo);
                        break;
                    case "basquet":
                        alert("Elegiste un " + prenda + " " + tipo);
                        break;       
                    default:
                        alert("Elija una opción.")
                        break;
                }
                talles("short");  
                cantidades();
                subtotal();
                     
            break;
            case "buzo":
                tipo = prompt("Qué tipo de buzo estás buscando? (Escriba con letras la opción)\n\n- Con capucha\n- Sin capucha ").toLocaleLowerCase();
                switch (tipo) {
                    case "con capucha":
                        alert("Elegiste un " + prenda + " " + tipo);
                        break;
                    case "sin capucha":
                        alert("Elegiste un " + prenda + " " + tipo);
                        break;       
                    default:
                        alert("Elija una opción.")
                        break;
                }
                talles("buzo"); 
                cantidades();
                subtotal();
                     
            break;
            case "campera":
                tipo = prompt("Qué tipo de campera estás buscando? (Escriba con letras la opción)\n\n- Abrigada\n- Liviana ").toLocaleLowerCase();
                switch (tipo) {
                    case "abrigada":
                        alert("Elegiste una " + prenda + " " + tipo);
                        break;
                    case "liviana":
                        alert("Elegiste una " + prenda + " " + tipo);
                        break;       
                    default:
                        alert("Elija una opción.")
                        break;
                }
                talles("campera"); 
                cantidades();
                subtotal();
                     
            break;
            case "salir":
            alert("¡Gracias por haber visitado Cosmos Indumentaria!")
            break;    
        default:
            alert("Ingrese alguna opción válida. Recordá escribir con letras la opción.")
            break;
    }
}while(prenda !== "salir")