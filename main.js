let montoTotal = prompt("Ingrese el monto a abonar")

let encendido = true

while(encendido){
    let opcion = parseInt(prompt(
        `¿En cuántas cuotas desea abonar?
        
        1- 3 cuotas
        2- 6 cuotas
        3- 12 cuotas
        4- Salir
        `))
    
        switch(opcion){
            case 1:
                alert(`El monto a abonar es de: ${montoTotal/3}`)
                break
            case 2:
                alert(`El monto a abonar es de: ${montoTotal/6}`)
                break
            case 3:
                alert(`El monto a abonar es de: ${montoTotal/12}`)
                break
            case 4:
                encendido = false
                break
            default:
                alert("Ingrese una de las opciones anteriores")
                break;
        }
}