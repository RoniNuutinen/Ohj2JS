const targets = document.querySelector("#target");
targets.classList.add("my-list");

for (let target of ["First", "Second", "Third"]){
    let text = target + " item";
    document.querySelector("#target").innerHTML += "<li>" + text + "</li>";
}