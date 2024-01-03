// edit code
let inputCode = document.querySelectorAll(".input");
let menuCode = document.querySelectorAll(".menuCode");

menuCode.forEach((element, index) => {
  element.addEventListener("click", () => {
    textarea(index);
  });
});

function textarea(index) {
  inputCode.forEach(function (element) {
    element.style.display = "none";
  });
  inputCode[index].style.display = "block";
}
textarea(0);

function run() {
  let htmlCode = document.getElementById("html-code").value;
  let cssCode = document.getElementById("css-code").value;
  let jsCode = document.getElementById("js-code").value;
  let outputCode = document.getElementById("output");

  outputCode.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
  outputCode.contentWindow.eval(jsCode)

}