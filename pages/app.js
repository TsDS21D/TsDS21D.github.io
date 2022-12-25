const form = document.forms["form"];

form.addEventListener("input", inputHandler);

function inputHandler({target}) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target);
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RefExp(inputReg);
    console.log(inputValue, reg);
}