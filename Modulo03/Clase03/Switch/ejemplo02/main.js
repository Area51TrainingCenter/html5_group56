switch (new Date().getDay()) {
    case 6:
        text = "Hoy es Sabado = )";
        break;
    case 0:
        text = "Hoy es Domingo = )";
        break;
    default:
        text = "aun es dia de semana = (";
} 

console.log(text);