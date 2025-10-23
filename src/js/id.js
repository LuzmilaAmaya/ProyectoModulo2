function id(longitud = 7) { 
    const caracteres= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let id = "";
for (let i = 0; i <longitud; i++){
    const ramdom = Math.floor(Math.ramdom() * caracteres.length);
    id+=caracteres[ramdom];
    }
return id;
}


