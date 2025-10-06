let url3 = 'https://api.giphy.com/v1/stickers/trending?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v';
const obtenergift = async () => {
    const gifContainers = document.getElementById("gifs");
    const gifTemplate = document.getElementById("gif");
    
    const request = await fetch(url3);
    const respuesta = await request.json();
    console.log(respuesta);

    respuesta.data.slice(8,16).forEach(gif => {
        const newgifCard = gifTemplate.cloneNode(true);
        const img = newgifCard.querySelector("img");
        img.src = gif.images.original.url;
        gifContainers.appendChild(newgifCard);
    });;
    gifTemplate.remove();

};
obtenergift();