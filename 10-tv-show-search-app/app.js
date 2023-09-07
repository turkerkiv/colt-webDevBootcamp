const apiBaseUrl = "https://api.tvmaze.com/search/shows";
const searchButton = document.querySelector("#searchButton");
const queryInput = document.querySelector("#queryInput");
const resultSection = document.querySelector("#resultSection");

const getSearchResults = async () => {
    let finalUrl = apiBaseUrl + `?q=${queryInput.value}`;
    try {
        const result = await axios.get(finalUrl);
        return result.data;
    }
    catch (e) {
        console.log("ERROR!", e);
    }
}

//card append them into section.
//maybe summary rating name and img is enough. And maybe click on card is gonna open the link.

const createCard = tvShow => {
    const cardContainerE = document.createElement("div");

    const imgE = document.createElement("img");
    const ratingContainerE = document.createElement("div");
    const nameE = document.createElement("p");
    const ratingE = document.createElement("p");
    const summaryE = document.createElement("p");

    ratingContainerE.append(nameE);
    ratingContainerE.append(ratingE);
    cardContainerE.append(imgE);
    cardContainerE.append(ratingContainerE);
    cardContainerE.append(summaryE);

    const show = tvShow.show;

    imgE.src = show.image === null ? "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png" : show.image.medium;
    ratingE.innerText = show.rating.average === null ? "N/A" : show.rating.average;
    nameE.innerText = show.name;
    summaryE.innerHTML = show.summary.length > 200 ? show.summary.slice(0, 197) + "..." : show.summary;
    cardContainerE.addEventListener("click", () => { window.open(show.url, "_blank") });

    //adding style classes to appropiate elements
    return cardContainerE;
}

const displayResults = async () => {
    const results = await getSearchResults();
    console.log(results);
    results.forEach(tvShow => resultSection.append(createCard(tvShow)));
}

searchButton.addEventListener("click", displayResults);

{/* <div id="showCard" class="showCard">
    <img id="showImg" src="">
    <div id="rating">
        <p id="showName"></p>
        <p id="rating"></p>
    </div>
    <p id="summary"></p>
</div> */}

