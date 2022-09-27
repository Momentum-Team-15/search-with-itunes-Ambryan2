//temperary arrays I will use to find the artist in itunes database
let desiredArt = []; //this will contain the artist written in search
let artistResults = []; //this will hold the info of artist from apple array

//this function filters through desiredArt function and then finds in another array that has matching information
function finder(array) {
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < newCust.length; i++) {
            if (newCust[i].name.first === array[j]) {
                //newCust data should be replaced with array information I would need
                artistResults.push(newCust[i]); //this all the info of peoples names selected
            }
        }
    }
}

let resultGrid = document.querySelector("#musicContainer");

//fake array for test
// let fakeArr = [
//     "bob",
//     "sally",
//     "marry",
//     "christ",
//     "jet",
//     "truck",
//     "tank",
//     "chair",
//     "pops",
//     "dork",
// ];
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
let form = document.querySelector("#musicForm");
let artist = document.querySelector("#artistBar");

//using fetch to get data from itunes api
fetch(`https://itunes.apple.com/search?parameterkeyvalue`) //the end of this line needs to refer to spot in itunes
.then( function (desiredArt){
    return response.json()
})
.then(function(){

})


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
    emptyGrid(resultGrid);
    //this is a test in making grid
    searchGrid(fakeArr);

    //need a function that will clear the results already displayed

    //need a function that will build the music results on bottom

    //also will need a function that will empty the default results on the song player

    //also will need a function that will build the song player on top

});
