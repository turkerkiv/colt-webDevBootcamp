const apiBaseUrl = "https://api.tvmaze.com/search/shows";
const searchButton = document.querySelector("#searchButton");
const queryInput = document.querySelector("#queryInput");
const resultSection = document.querySelector("#resultSection");

queryInput.addEventListener("keyup", event => {
    if (event.key === "Enter") {
        searchButton.click();
    }
})

const getSearchResults = async () => {
    let finalUrl = apiBaseUrl + `?q=${queryInput.value}`;
    try {
        const result = await axios.get(finalUrl);
        return result.data;
    }
    catch (e) {
        console.log("ERROR!", e.message);
    }
}
//card append them into section.
//maybe summary rating name and img is enough. And maybe click on card is gonna open the link.

const createCard = tvShow => {
    const showCardE = document.createElement("div");

    const imgE = document.createElement("img");
    const detailsContainerE = document.createElement("div");
    const nameE = document.createElement("p");
    const ratingE = document.createElement("p");
    const summaryE = document.createElement("p");

    detailsContainerE.append(nameE);
    detailsContainerE.append(ratingE);
    detailsContainerE.append(summaryE);
    showCardE.append(imgE);
    showCardE.append(detailsContainerE);

    detailsContainerE.classList.add("showCardDetails");
    showCardE.classList.add("showCard");

    const show = tvShow.show;

    imgE.src = show.image === null ? "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png" : show.image.medium;
    ratingE.innerText = show.rating.average === null ? "N/A" : show.rating.average;
    nameE.innerText = show.name;

    let sumWithoutElements = show.summary === null ? "N/A" : show.summary === "" ? "N/A" : show.summary.replace(/<[^>]*>/g, '');
    summaryE.innerText = sumWithoutElements.length > 200 ? sumWithoutElements.slice(0, 197) + "..." : sumWithoutElements;

    showCardE.addEventListener("click", () => { window.open(show.url, "_blank") });

    return showCardE;
}

const clearResults = () => {
    while (resultSection.firstChild) {
        resultSection.removeChild(resultSection.firstChild);
    }
}

const displayResults = async () => {
    clearResults();
    const results = await getSearchResults();

    const resultHeader = document.createElement("h2");
    resultHeader.innerText = results.length === 0 ? "Nothing found. Please try another words." : `Found ${results.length} tv shows. Enjoy the show.`
    resultSection.append(resultHeader);

    console.log(results);
    results.forEach(tvShow => resultSection.append(createCard(tvShow)));

    queryInput.value = "";
}

searchButton.addEventListener("click", displayResults);

// <div id="showCard" class="showCard">
//     <img id="showImg" src="https://static.tvmaze.com/images/no-img/no-img-portrait-text.png">
//         <div id="showCardDetails" class="showCardDetails">
//             <p id="showName">Test name</p>
//             <p id="rating">7.8</p>
//             <p id="summary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quae minima unde
//                 distinctio eius ab, inventore quibusdam soluta aut debitis rem, laboriosam nobis est quod
//                 doloremque commodi voluptatem, dolorum saepe?</p>
//         </div>
// </div>

