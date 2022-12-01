const HTML = document.querySelector("html");
const FORM = document.querySelector("form");
const QUERY  = document.querySelector("#query");
const SUBMIT = document.querySelector(type="submit");
const UL = document.querySelector("#results");
const DIALOG = document.querySelector("dialog");
const IFRAME = document.querySelector("iframe");
const SPAN = document.querySelector("span");


SPAN.addEventListener("click", function (){
    DIALOG.close();
});

// Generates only the first item from the search result
// according to step 1 and 2
/*
FORM.addEventListener("submit", async function (event){
    event.preventDefault();

    UL.innerHTML = "";

    let apiURL = `https://api.tvmaze.com/search/shows?q=${QUERY.value}`;
    let fetchData = await fetch(apiURL);
    let jsonPackage = await fetchData.json();

    console.log(jsonPackage);

    let oneResultName = jsonPackage[0].show.name;
    let oneResultURL = jsonPackage[0].show.url;
    let oneResultMimgSrc = jsonPackage[0].show.image?.medium;
    let oneResultSummary = jsonPackage[0].show.summary;

    let oneNameText = document.createTextNode(oneResultName);

    let oneHeader = document.createElement("h2");
    let oneLink = document.createElement("a");
    let oneImg = document.createElement("img");

    oneHeader.appendChild(oneNameText);
    oneLink.href = oneResultURL;
    oneLink.target = "_blank";
    oneLink.innerText = "Details"

    if (oneResultMimgSrc) {
        oneImg.src = oneResultMimgSrc;
    } else {
        oneImg.src = "https://via.placeholder.com/100x200?text=text+here";
    }
    oneImg.alt = "Cover image";

    let oneLi = document.createElement("li");
    oneLi.appendChild(oneHeader);
    oneLi.appendChild(oneLink);
    oneLi.appendChild(oneImg);
    oneLi.innerHTML += oneResultSummary;

    UL.appendChild(oneLi);
});
*/


FORM.addEventListener("submit", async function (event){
    event.preventDefault();

    UL.innerHTML = "";

    let apiURL = `https://api.tvmaze.com/search/shows?q=${QUERY.value}`;
    let fetchData = await fetch(apiURL);
    let jsonPackage = await fetchData.json();

    if (jsonPackage.length > 0) {
        for (let item of jsonPackage) {

            let showName = item.show.name;
            let detailsURL = item.show.url;
            let mediumImgSrc = item.show.image?.medium;
            let showSummary = item.show.summary;
            let showGenres = item.show?.genres;

            console.log(detailsURL);

            let li = document.createElement("li");

            let div1 = document.createElement("div");
            let h2 = document.createElement("h2");
            let a = document.createElement("a");
            let img = document.createElement("img");
            let div2 = document.createElement("div");
            let h3 = document.createElement("h3");
            let section = document.createElement("section");

            let showTitle = document.createTextNode(showName);

            a.addEventListener("click", function () {
                IFRAME.src = detailsURL;
                DIALOG.showModal();
            });
            a.innerText = "Details";

            if (mediumImgSrc) {
                img.src = mediumImgSrc;
            } else {
                img.src = "https://via.placeholder.com/210x295?text=No+image+found";
            }
            img.alt = "Cover image";

            div1.classList.add("div1");
            div2.classList.add("div2");

            h2.appendChild(showTitle);
            li.appendChild(h2);

            let genres = "Genre: ";
            if (showGenres.length > 0) {
                for (let genre of showGenres) {
                    if (showGenres.indexOf(genre) === 0) {
                        genres += genre;
                    } else {
                        genres += " | " + genre;
                    }
                }
            } else {
                genres += "unlisted";
                h3.id = "unlisted";
            }
            let genrePrint = document.createTextNode(genres);

            h3.appendChild(genrePrint);

            div1.appendChild(img);
            div2.innerHTML = showSummary;

            section.appendChild(div1);
            section.appendChild(div2);

            li.appendChild(h3);
            li.appendChild(a);
            li.appendChild(section);

            UL.appendChild(li);
        }
    } else {
        console.log("Empty json package:");
        console.log(jsonPackage);
    }
});
