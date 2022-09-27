//temperary arrays I will use to find the artist in itunes database
let desiredArt = []; //this will contain the artist written in search
let artistResults = []; //this will hold the info of artist from apple array
let filteredSongResults = [];

//reference
let resultGrid = document.querySelector("#musicContainer");
let form = document.querySelector("#musicForm");
let artist = document.querySelector("#artistBar");
let audio = document.querySelector("#audio");

//function that build the grid on the bottom
function searchGrid(results) {
    let resultCont = document.createElement("div");
    for (let i = 0; i < results.length; i++) {
        let indivResult = document.createElement("div");
        let albumCov = document.createElement("img");
        let songTitle = document.createElement("p");
        let bandName = document.createElement("p");
        let playB = document.createElement("button");

        //this is where giv albumCOv, songTitle and BandName information
        bandName.innerText = filteredSongResults[i].artistName;
        songTitle.innerText = filteredSongResults[i].trackCensoredName;
        albumCov.src = filteredSongResults[i].artworkUrl100;

        playB.innerText = "Play";
        playB.type = "submit";
        playB.value = `${filteredSongResults[i].previewUrl}`
        playB.classList.add("playButton");
        
        //adding css and putting everything in div
        songTitle.classList.add("titleTxt");
        bandName.classList.add("artistName");
        indivResult.classList.add("songOption");

        playB.addEventListener('click', (event)=> {
                audio.src='';
                audio.src = playB.value
        })

        indivResult.appendChild(albumCov);
        indivResult.appendChild(bandName);
        indivResult.appendChild(songTitle);
        indivResult.appendChild(playB);

        resultCont.appendChild(indivResult);
    }
    //adding everything to container in html
  
    
    resultCont.classList.add("gridStyle");
    resultGrid.appendChild(resultCont);

//   let player = document.querySelectorAll('.playButton')

    


}

//function meant to hide anything in the grid
function emptyGrid(container) {
    let removeResults = container.querySelectorAll(".gridStyle");
    for (let destroy of removeResults) {
        container.removeChild(destroy);
        // console.log("grid was destroyed");
    }
}
//when search is clicked this is what results
form.addEventListener("submit", (event) => {
    event.preventDefault();
    desiredArt = artist.value;

    //using fetch to get data from itunes api  https://itunes.apple.com/search?parameterkeyvalue
    fetch(`https://itunes.apple.com/search?term=${desiredArt}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (posts) {
            filteredSongResults = [];
            artistResults = posts.results.slice();
            // console.log(artistResults);
            for (let i = 0; i < artistResults.length; i++) {
                if (artistResults[i].kind === "song") {
                    filteredSongResults.push(artistResults[i]);
                }
            }
            filteredSongResults = filteredSongResults.slice(0, 15);
            // console.log(filteredSongResults);
            emptyGrid(resultGrid);
            searchGrid(filteredSongResults);
            filteredSongResults = [];
        });
});
