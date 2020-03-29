setTimeout(stringManipulation, 4000);

function stringManipulation() {
    let text = document.querySelector(".content")
    text.innerHTML = text.innerHTML.replace(/ the /g, " replaced ");
    text.innerHTML = text.innerHTML.replace(/The /g, "Replaced ");
};
