switch (new Date().getDay()) {
    case 1:
    case 2:
    case 3:
    default:
        mensaje = "estamos entre semana =(";
        break;
    case 4:
    case 5:
       mensaje = "ya llega el fin de semana";
        break;
    case 0:
    case 6:
       mensaje = "es fin de semana!! ";
}

console.log(mensaje);