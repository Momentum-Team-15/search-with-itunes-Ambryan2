//temperary arrays I will use to find the artist in itunes database
let desiredArt = []; //this will contain the artist written in search
let artistResults = []; //this will hold the info of artist from apple array

//referec
let resultGrid = document.querySelector("#musicContainer");
let form = document.querySelector("#musicForm");
let artist = document.querySelector("#artistBar");

//fake array for test
let fakeArr = [
    "bob",
    "sally",
    "marry",
    "christ",
    "jet",
    "truck",
    "tank",
    "chair",
    "pops",
    "dork",
];
//function that build the grid on the bottom
function searchGrid(results) {
    let resultCont = document.createElement("div");
    for (let i = 0; i < 15; i++) {
        let indivResult = document.createElement("div");
        let albumCov = document.createElement("img");
        let songTitle = document.createElement("p");
        let bandName = document.createElement("h2");

        //this is where giv albumCOv, songTitle and BandName information
        bandName.innerText = results[i];
        //adding everything to result div
        indivResult.classList.add("songOption");
        indivResult.appendChild(albumCov);
        indivResult.appendChild(songTitle);
        indivResult.appendChild(bandName);
        resultCont.appendChild(indivResult);
    }
    //adding everything to container in html
    resultCont.classList.add("gridStyle");
    resultGrid.appendChild(resultCont);
}

//to collect input from the search bar and the search button


//function meant to hide anything in the grid
function emptyGrid(container) {
    let removeResults = container.querySelectorAll(".gridStyle");
    for (let destroy of removeResults) {
        container.removeChild(destroy);
        console.log('grid was destroyed')
    }
}
//when search is clicked this is what results
form.addEventListener("submit", (event) => {
    event.preventDefault();
    desiredArt = artist.value;

//using fetch to get data from itunes api  https://itunes.apple.com/search?parameterkeyvalue
fetch(`https://itunes.apple.com/search?term=${desiredArt}`)
.then( function (response){
    return response.json()
})
.then(function(posts){console.log(posts)

})


    console.log(desiredArt)
    emptyGrid(resultGrid);
    //this is a test in making grid
    searchGrid(fakeArr);

    //need a function that will clear the results already displayed

    //need a function that will build the music results on bottom

    //also will need a function that will empty the default results on the song player

    //also will need a function that will build the song player on top

});
