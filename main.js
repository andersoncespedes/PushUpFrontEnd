import { contenidos } from "./contenidos.js";
(function () {
  const themeG = document.getElementById("ThemeGreen");
  const themeB = document.getElementById("ThemeBrown");
  const themeR = document.getElementById("ThemeRose");
  const content = document.getElementById("content");
  const obj = {
    greenFlavor: {
        titulo:"Frappé de Limón Refinado", 
      img:"./img/img1.png",
      bgColorClass: "bg-green",
      textColor: "txt-green",
      textColorActive: "txt-green-active",
      bgGrad:"bg-grad-green",
      content:function(){
        content.innerHTML = "";
        content.innerHTML = contenidos.green;
      }
    },
    BrownFlavor: {
        titulo:"Frappé de Vainilla Delicato", 
        img:"./img/img2.png",
        bgColorClass: "bg-brown",
        textColor: "txt-brown",
        bgGrad:"bg-grad-brown",
        textColorActive: "txt-brown-active",
        content:function(){
            content.innerHTML = "";
            content.innerHTML = contenidos.brown;
         }
      },
      RoseFlavor: {
        titulo:"Frappé de Fresa Elegante", 
        img:"./img/img3.png",
        bgColorClass: "bg-rose",
        textColor: "txt-rose",
        bgGrad:"bg-grad-rose",
        textColorActive: "txt-rose-active",
        content:function(){
        content.innerHTML = "";
        content.innerHTML = contenidos.rose;
      },
      
      }
  };
  let selectStyle = "greenFlavor";
  function StyleChanged() {
    let txt = document.querySelectorAll(".txt");
    let txtActive = document.querySelectorAll(".txt-active");
    let bg = document.querySelectorAll(".bg");
    let bgGrad = document.querySelectorAll(".bg-grad");
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = obj[selectStyle].titulo;
    bgGrad.forEach(e => {
        e.className = `${obj[selectStyle].bgGrad} col-md-9 p-5 text-justify col-sm-12 bg-grad`;
    })
    obj[selectStyle].content()
    txt.forEach((e) => {
      e.className = `${obj[selectStyle].textColor} txt`
    });
    bg.forEach((e) => {
        e.className = `${obj[selectStyle].bgColorClass} col-md-3 show-case my-2 my-lg-0 col-sm-12 bg`
        e.children[0].src = obj[selectStyle].img
      });
      txtActive.forEach((e) => {
        e.className = `${obj[selectStyle].textColorActive} txt-active`
      });
    console.log(txt);
  }

  themeG.addEventListener("click", (ev) => {
    selectStyle = "greenFlavor";
    StyleChanged();
  });
  themeB.addEventListener("click", (ev) => {
    selectStyle = "BrownFlavor";
    StyleChanged();
  });
  themeR.addEventListener("click", (ev) => {
    selectStyle = "RoseFlavor";
    StyleChanged();
  });
})();
