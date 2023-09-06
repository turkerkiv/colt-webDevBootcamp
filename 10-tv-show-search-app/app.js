const apiBaseUrl = "https://api.tvmaze.com/search/shows";
const searchButton = document.querySelector("#searchButton");
const queryInput = document.querySelector("#queryInput");
const inp = document.querySelector("input");

const getSearchResults = async () => {
    let finalUrl = apiBaseUrl + `?q=${queryInput.value}`;
    try {
        const result = await axios.get(finalUrl);
        console.log(result.data[0].show);
    }
    catch (e) {
        console.log("ERROR!", e);
    }
}

searchButton.addEventListener("click", getSearchResults);

//card append them into section.
//maybe summary rating name and img is enough. And maybe click on card is gonna open the link.

const createCard = data => {
    const cardContainerE = document.createElement("div");

    const imgE = document.createElement("img");
    const ratingContainerE = document.createElement("div");
    const nameE = document.createElement("p");
    const ratingE = document.createElement("p");
    const summaryE = document.createElement("p");

    ratingE.append(nameE);
    ratingE.append(ratingE);
    cardContainerE.append(imgE);
    cardContainerE.append(ratingContainerE);
    cardContainerE.append(summaryE);

    imgE.src = data.show.image.medium;
    ratingE.innerText = data.show.rating.average;
    nameE.innerText = data.show.name;
    summaryE.innerText = data.show.summary;
    cardContainerE.addEventListener("click", () => { window.open(data.show.originalSite, "_blank") });

    //adding style classes to appropiate elements
    return cardContainerE;
}

{/* <div id="showCard" class="showCard">
    <img id="showImg" src="">
    <div id="rating">
        <p id="showName"></p>
        <p id="rating"></p>
    </div>
    <p id="summary"></p>
</div> */}

