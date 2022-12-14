//temperary arrays I will use to find the artist in itunes database
let desiredArt = []; //this will contain the artist written in search
let artistResults = []; //this will hold the info of artist from apple array
let filteredSongResults = [];

//reference
let resultGrid = document.querySelector("#musicContainer");
let form = document.querySelector("#musicForm");
let artist = document.querySelector("#artistBar");
let audio = document.querySelector("#audio");
let musicSong = document.querySelector("#description")

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

        songTitle.href = `${filteredSongResults[i].previewUrl}`
        playB.innerText = "Play";
        playB.type = "submit";
        playB.value = `${filteredSongResults[i].previewUrl}`
        
        //adding css and putting everything in div
        songTitle.classList.add("titleTxt");
        bandName.classList.add("artistName");
        indivResult.classList.add("songOption");

        playB.addEventListener('click', (event)=> {
                audio.src='';
                audio.src = playB.value
                musicSong.innerText = ''
                musicSong.innerText = `${songTitle.innerText}-${bandName.innerText}`
        })

        indivResult.appendChild(albumCov);
        indivResult.appendChild(bandName);
        indivResult.appendChild(songTitle);
        indivResult.appendChild(playB);

        resultCont.appendChild(indivResult);
    }

    resultCont.classList.add("gridStyle");
    resultGrid.appendChild(resultCont);
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
    audio.src = '';
    musicSong.innerText = '';
    emptyGrid(resultGrid);
    //using fetch to get data from itunes api  https://itunes.apple.com/search?parameterkeyvalue
    fetch(`https://itunes.apple.com/search?term=${desiredArt}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (posts) {
            filteredSongResults = [];
            emptyGrid(resultGrid);
            artistResults = posts.results.slice();
            for (let i = 0; i < artistResults.length; i++) {
                if (artistResults[i].kind === "song") {
                    filteredSongResults.push(artistResults[i]);
                }
            }
            filteredSongResults = filteredSongResults.slice(0, 15);
            //want to make i so if there is nothing in filtered results then it returns something different
            if (filteredSongResults.length === 0){
                console.log('test worked')
                let noCont = document.createElement('div')
                let nothing = document.createElement('h1')
                let theGoat = document.createElement('img');

                nothing.innerText = 'no search results'
                noCont.classList.add('gridStyle')
                theGoat.src = ('https://i1.sndcdn.com/artworks-dVH0EE65EwUOKdvd-NfhGug-t500x500.jpg');

                audio.src = "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/47/72/65/4772654c-bff8-5c34-14b2-ce9de8504f2e/mzaf_9070437753430182370.plus.aac.p.m4a"
                musicSong.innerText = `Should of searched for an actual Song`

                noCont.appendChild(nothing);
                noCont.appendChild(theGoat);
                resultGrid.appendChild(noCont);
            }
            else{
            emptyGrid(resultGrid);
            console.log(filteredSongResults);
            searchGrid(filteredSongResults);
            }
            // console.log(filteredSongResults.length);
            filteredSongResults = [];
        })
        .catch(error=>{
            console.error(error);
        })
});
