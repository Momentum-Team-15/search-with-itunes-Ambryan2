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
        playB.setAttribute("id", "button"+i); //starts count at 0
        //adding css and putting everything in div
        songTitle.classList.add("titleTxt");
        bandName.classList.add("artistName");
        indivResult.classList.add("songOption");
        indivResult.appendChild(albumCov);
        indivResult.appendChild(bandName);
        indivResult.appendChild(songTitle);
        indivResult.appendChild(playB);

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
            console.log(filteredSongResults);
            emptyGrid(resultGrid);
            searchGrid(filteredSongResults);

            //path to music filteredSongResults[i].previewUrl
            //connect to button 
            let button0 = document.querySelector('#button0')
            let button1 = document.querySelector('#button1')
            let button2 = document.querySelector('#button2')
            let button3 = document.querySelector('#button3')
            let button4 = document.querySelector('#button4')
            let button5 = document.querySelector('#button5')
            let button6 = document.querySelector('#button6')
            let button7 = document.querySelector('#button7')
            let button8 = document.querySelector('#button8')
            let button9 = document.querySelector('#button9')
            let button10 = document.querySelector('#button10')
            let button11 = document.querySelector('#button11')
            let button12 = document.querySelector('#button12')
            let button13 = document.querySelector('#button13')
            let button14 = document.querySelector('#button14')
            // let button3 = document.querySelector('#button2')
            // let button4 = document.querySelector('#button3')


            button0.addEventListener('click', (event) => {
                event.preventDefault();
                audio.src = ''
                audio.src = button0.value
                        console.log(button0.value)     
            })
            button1.addEventListener('click', (event) => {
                event.preventDefault();
                audio.src = ''
                audio.src = button1.value
                        console.log(button1.value)     
            })
            button2.addEventListener('click', (event) => {
                event.preventDefault();
                audio.src = ''
                audio.src = button2.value
                        console.log(button2.value)     
            })
            button3.addEventListener('click', (event) => {
                event.preventDefault();
                audio.src = ''
                audio.src = button3.value
                        console.log(button3.value)     
            })
            button4.addEventListener('click', (event) => {
                event.preventDefault();
                audio.src = ''
                audio.src = button4.value
                        console.log(button4.value)     
            })
            button5.addEventListener('click', (event) => {
                event.preventDefault();
                audio.src = ''
                audio.src = button5.value
                        console.log(button5.value)     
            })
            button6.addEventListener('click', (event) => {
                event.preventDefault();
                audio.src = ''
                audio.src = button6.value
                        console.log(button6.value)     
            })
            button7.addEventListener('click', (event) => {
                event.preventDefault();
                audio.src = ''
                audio.src = button7.value
                        console.log(button7.value)     
            })
            button8.addEventListener('click', (event) => {
                event.preventDefault();
                audio.src = ''
                audio.src = button8.value
                        console.log(button8.value)     
            })
            button9.addEventListener('click', (event) => {
                event.preventDefault();
                audio.src = ''
                audio.src = button9.value
                        console.log(button9.value)     
            })
            button10.addEventListener('click', (event) => {
                event.preventDefault();
                audio.src = ''
                audio.src = button10.value
                        console.log(button10.value)     
            })
            button11.addEventListener('click', (event) => {
                event.preventDefault();
                audio.src = ''
                audio.src = button11.value
                        console.log(button11.value)     
            })
            button12.addEventListener('click', (event) => {
                event.preventDefault();
                audio.src = ''
                audio.src = button12.value
                        console.log(button12.value)     
            })
            button13.addEventListener('click', (event) => {
                event.preventDefault();
                audio.src = ''
                audio.src = button13.value
                        console.log(button13.value)     
            })
            button14.addEventListener('click', (event) => {
                event.preventDefault();
                audio.src = ''
                audio.src = button14.value
                        console.log(button14.value)     
            })

            //test play first song
            filteredSongResults = [];
            console.log(filteredSongResults);
        });
});

// console.log(searchGrid(filteredSongResults))

//need a function that will clear the results already displayed

//need a function that will build the music results on bottom

//also will need a function that will empty the default results on the song player

//also will need a function that will build the song player on top
