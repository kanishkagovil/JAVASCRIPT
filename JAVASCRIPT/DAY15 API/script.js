getText("https://jsonplaceholder.typicode.com/users");
async function getText(file) {
    let a = await fetch(file);
    let b = await a.text();

    document.getElementById("param").innerHTML = b;
}