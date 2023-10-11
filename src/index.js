import img from "./asset/im.jpg";

import "./style.css";

const imageElem = document.createElement("img");
imageElem.src = img;
imageElem.classList.add("image");

document.getElementById("app").append(imageElem);
