const starfield = document.querySelector(".js-starfield");
const celestialObjects = starfield.querySelector(".js-celestial");

// const d = document.getElementsByClassName("draggable");
// const d = document.getElementsByClassName("js-celestial");

// for (let i = 0; i < d.length; i++) {
//   d[i].style.position = "relative";
// }

const dragObject = (e) => {
  let target = e.target;

  if (!target.classList.contains("js-celestial")) {
    return;
  }

  target.moving = true;

  e.clientX
    ? ((target.oldX = e.clientX), (target.oldY = e.clientY))
    : ((target.oldX = e.touches[0].clientX),
      (target.oldY = e.touches[0].clientY));

  target.oldLeft =
    window.getComputedStyle(target).getPropertyValue("left").split("px")[0] * 1;
  target.oldTop =
    window.getComputedStyle(target).getPropertyValue("top").split("px")[0] * 1;

  const startDrag = (e) => {
    e.preventDefault();

    if (!target.moving) {
      return;
    }

    e.clientX
      ? ((target.distX = e.clientX - target.oldX),
        (target.distY = e.clientY - target.oldY))
      : ((target.distX = e.touches[0].clientX - target.oldX),
        (target.distY = e.touches[0].clientY - target.oldY));

    target.style.left = target.oldLeft + target.distX + "px";
    target.style.top = target.oldTop + target.distY + "px";
  };

  const endDrag = () => {
    target.moving = false;
  };

  // document.onmousemove = startDrag;
  // document.ontouchmove = startDrag;
  starfield.addEventListener("mousemove", startDrag);
  starfield.addEventListener("touchmove", startDrag);

  // target.onmouseup = endDrag;
  // target.ontouchend = endDrag;
  target.addEventListener("mouseup", endDrag);
  target.addEventListener("touchend", endDrag);
};

// starfield.onmousedown = dragObject;
// starfield.ontouchstart = dragObject;
starfield.addEventListener("mousedown", dragObject);
starfield.addEventListener("touchstart", dragObject);

// // -------------------------------
// let objects;

// !localStorage.objects
//   ? (objects = [])
//   : (objects = JSON.parse(localStorage.getItem("objects")));

// const CelestialObject = class {
//   constructor(type, name, posX, posY) {
//     this.type = type;
//     this.name = name;
//     this.posX = posX;
//     this.posY = posY;
//   }
// };

// const createInitialTemplate = () => {
//   if (objects.length == 0) {
//     objects.push(new CelestialObject("star", "Sun", 300, 300));
//     // objects.push(new CelestialObject("star", "Alpha Centauri", 550, 550));
//     // objects.push(new CelestialObject("star", "Betelgeuse", 700, 700));
//   }

//   updateLocalStorage();
// };

// const createTemplate = (object, i) => {
//   return `
//   <div class="celestial-object celestial-object-${i + 1} js-celestial">
//     <div class="title-edit js-titleEdit hide">
//       <label for="#${i + 1}" class="title-edit__label">Enter new name: </label>
//       <div class="wrapper">
//         <input type="text" class="title-edit__input js-editInput"
//         id="#${i + 1}"
//         />
//         <button type="button" class="title-edit__btn js-editBtn">
//           &#10004;
//         </button>
//       </div>
//     </div>
//     <span class="title celestial-object__title js-title">${object.name}</span>
//     <div class="celestial-object__body ${object.type}" draggable="true"></div>
//   </div>
//   `;
// };

// // fill html with objects(-s)
// const fillStarfield = () => {
//   starfield.innerHTML = "";

//   if (objects.length > 0) {
//     objects.forEach((celestialObj, i) => {
//       starfield.innerHTML += createTemplate(celestialObj, i);
//     });
//   }
// };

// // send object(-s) TO local storage
// const updateLocalStorage = () => {
//   localStorage.setItem("objects", JSON.stringify(objects));
// };

// // 2 in 1
// const updateFill = () => {
//   updateLocalStorage();
//   fillStarfield();
// };

// createInitialTemplate();
// fillStarfield();
