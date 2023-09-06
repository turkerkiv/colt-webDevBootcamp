const apiBaseUrl = "https://api.tvmaze.com/search/shows";
const searchButton = document.querySelector("#searchButton");
const queryInput = document.querySelector("#queryInput");

const getSearchResults = async () => {
    let finalUrl = apiBaseUrl + `?q=${queryInput.value}`;
    try {
        const result = await axios.get(finalUrl);
        console.log(result.data);
    }
    catch (e) {
        console.log("ERROR!", e);
    }
}

searchButton.addEventListener("click", getSearchResults);

//create a show card and append them into section. maybe summary rating name and img is enough.