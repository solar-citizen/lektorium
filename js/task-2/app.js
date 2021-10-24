// --- --- Task #2 --- --- //

// Import modules:
import { dragObject } from "./dragObject.js";

const starfield = document.querySelector(".js-starfield");
const celestialObjects = starfield.querySelector(".js-celestial");
const blackhole = document.querySelector(".js-blackhole");

let objects;

// localstorage
!localStorage.objects
  ? (objects = [])
  : (objects = JSON.parse(localStorage.getItem("objects")));

const CelestialObject = class {
  constructor(type = "star", name = "Sun", posX = 150, posY = 150) {
    this.type = type;
    this.name = name;
    this.posX = posX;
    this.posY = posY;
  }
};

const createTemplate = (object, i) => {
  return `
    <div class="celestial-object celestial-object-${i + 1} js-celestial">
      <div class="delete js-deleteBtn"></div>
      <div class="title-edit js-titleEdit hide">
        <label for="#${
          i + 1
        }" class="title-edit__label">Enter new name: </label>
        <div class="wrapper-inner">
          <input type="text" class="title-edit__input js-editInput" 
            id="#${i + 1}" 
          />
          <button type="button" class="title-edit__btn js-editBtn">
            &#10004;
          </button>
        </div>
      </div>
      <span class="title celestial-object__title js-title">${object.name}</span>
      <div class="celestial-object__body js-objectBody ${object.type}"></div>
    </div>
  `;
};

const createInitialTemplate = () => {
  if (objects.length === 0) {
    objects.push(new CelestialObject());
  }

  updateLocalStorage();
};

const fillStarfield = () => {
  starfield.innerHTML = "";

  if (objects.length > 0) {
    objects.forEach((celestialObj, i) => {
      starfield.innerHTML += createTemplate(celestialObj, i);
    });
  }
};

// send object(-s) TO local storage
const updateLocalStorage = () => {
  localStorage.setItem("objects", JSON.stringify(objects));
};

// 2 in 1
const updateFill = () => {
  updateLocalStorage();
  fillStarfield();
};

const generateObject = (e) => {
  let newObj = new CelestialObject();
  console.log(e.offsetX, e.offsetY);

  // create new object
  // and put it to objects array
  if (newObj.posX !== objects.some(Object.values)) {
    // objects.push(newObj("star", "SUPASTAR", e.offsetX, e.offsetY));
    newObj = new CelestialObject("star", "SUPASTAR", e.offsetX, e.offsetY);

    objects.push(newObj);
  } else {
    console.log("new object hasn't been created");
  }

  // and display it on field
  updateFill();
};

starfield.addEventListener("mousedown", dragObject);
starfield.addEventListener("dblclick", generateObject);

createInitialTemplate();
fillStarfield();
// starfield.addEventListener("dblclick", () => {
//   console.log("DBLCLICKED");
// });

// // ------------------------------

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
