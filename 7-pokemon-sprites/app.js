const container = document.querySelector("#container");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
    const imgContainer = document.createElement("div");

    let newURL = `${baseURL}${i}.png`;
    const img = document.createElement("img");
    img.src = newURL;
    imgContainer.append(img);

    const span = document.createElement("span");
    span.innerText = i;
    imgContainer.append(span);

    container.append(imgContainer);
}