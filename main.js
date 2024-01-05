let tagHtml = myHtml.map(function (data) {
  return `   <div class="${data.class}">
  <h1 class="fwb fs12">${data.tieude}</h1>
  <li>${data.noidung}</li>
  <div class="">
      <div id="#boxEdit" class="pa15 edit" style="background-color: rgb(214, 214, 214);">
          <div class="fs12 fwb">Ví dụ</div>
          <div class="bgcf w1 pa15">            
              <code>${data.vidu}</code>
          </div>
          <button class="try-Button mt15 pa15 bra10 fwb">Hãy Tự Mình Thử</button>
      </div>
  </div>
</div>`;
});
let htmlBasic = document.querySelector(".content-html");
htmlBasic.innerHTML = tagHtml.join("");

// toggle edit code
let editCode = document.querySelector(".edit-code");
let tryButton = document.querySelectorAll(".try-Button");

tryButton.forEach((el, index) => {
  el.addEventListener("click", () => {
    editCode.classList.add("toggle");
    document.querySelector('.close').addEventListener("click",()=>{
      if(editCode.classList.contains("toggle")) {
        editCode.classList.remove("toggle")
      }
    })
  });
});


let menuCode = document.querySelectorAll(".menuCode");

menuCode.forEach((element, index) => {
  if (index === 0) {
    element.style.backgroundColor = "#636468";
  }
  element.addEventListener("click", () => {
    textarea(index); // select ô nhập tương ứng vs menu

    element.style.backgroundColor = "#636468"; // đổi màu background
    menuCode.forEach((otherElement, otherIndex) => {
      if (otherIndex !== index) {
        otherElement.style.backgroundColor = "#383838";
      }
    });
  });
});

let inputCode = document.querySelectorAll(".input-code");
function textarea(index) {
  inputCode.forEach(function (element) {
    element.style.display = "none";
  });
  inputCode[index].style.display = "block";
}
textarea(0);

// edit code
let runCode = document.querySelectorAll(".Run-code");

runCode.forEach((el) => {
  el.addEventListener("click", () => {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let outputCode = document.getElementById("output");

    outputCode.contentDocument.body.innerHTML =
      htmlCode + "<style>" + cssCode + "</style>";
    outputCode.contentWindow.eval(jsCode);
  });
});
