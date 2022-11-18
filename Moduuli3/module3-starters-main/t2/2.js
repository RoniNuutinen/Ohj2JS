for (let item of ["First", "Second", "Third"]) {

    let text = item + " item";
    let textNode = document.createTextNode(text);
    let li = document.createElement("li");

    li.appendChild(textNode);
    if (item === "Second") {
        li.classList.add("my-item");
    }

    document.querySelector("#target").appendChild(li);
}