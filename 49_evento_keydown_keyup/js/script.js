// O evento keydown ele serve quando a tecla for pressionada, porém enquando a tecla for pressionada ele continua disparando

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        console.log(`Tecla pressionada ${event.key}`)
    }
});

// Já o evendo keyup, é quando a tecla é levantada

document.addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
        console.log(`Tecla solta ${event.key}`);
    }
});