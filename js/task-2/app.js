// --- --- Task #2 --- --- //

document.addEventListener("DOMContentLoaded", () => {
  // Import modules:
  // import { dragObject } from "./dragObject.js";

  const starfield = document.querySelector(".js-starfield");
  // const celestialObjects = starfield.querySelector(".js-celestial");
  // const blackhole = document.querySelector(".js-blackhole");
  // const deleteBtn = document.querySelector(".js-deleteBtn");
  const objName = document.querySelectorAll(".js-title");
  const editObjName = document.querySelectorAll(".js-editInput").value;
  const acceptObjName = document.querySelectorAll(".js-editBtn");

  let objects;

  // localstorage
  !localStorage.objects
    ? (objects = [])
    : (objects = JSON.parse(localStorage.getItem("objects")));

  // const typesOfObjects = ["star", "planet", "asteroid", "comet", "meteor"];
  const typesOfObjects = ["star"];
  const randomType = Math.floor(Math.random() * typesOfObjects.length);
  const defaultType = typesOfObjects[randomType];
  const defaultName = defaultType;

  const CelestialObject = class {
    constructor(type = "star", name = "Sun", posX = 150, posY = 150) {
      this.type = type;
      this.name = name;
      this.posX = posX;
      this.posY = posY;
    }

    // delete() {}
  };

  const createInitialTemplate = () => {
    if (objects.length == 0) {
      objects.push(new CelestialObject());
    }

    updateLocalStorage();
  };

  const createTemplate = (object, i) => {
    return `
    <div class="celestial-object celestial-object-${i + 1} js-celestial" 
    style="left: ${object.posX}px; top: ${object.posY}px;">
      <div onclick="deleteObject(${i})" class="delete js-deleteBtn"></div>
      <div class="title-edit js-titleEdit hide">
        <label for="#${i + 1}" 
        class="title-edit__label">Enter new name: </label>
        <div class="wrapper">
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
    // create new object
    let newObj = new CelestialObject(
      defaultType,
      `a new ${defaultName}`,
      e.clientX,
      e.clientY
    );

    // and put it to objects array
    objects.push(newObj);

    // and display it on field
    updateFill();
  };

  // delete objects
  const deleteObject = (i) => {
    setTimeout(() => {
      objects.splice(i, 1);
      updateFill();
    }, 750);
  };

  const editObjectName = () => {
    if (editObjName) {
      objName.innerHTML = editObjName.value;
    }

    editObjName = "";
  };

  // edit object's name
  if (acceptObjName) {
    acceptObjName.forEach((acceptBtn) => {
      acceptBtn.addEventListener("click", editObjectName);
    });
  }

  // drag and drop function
  const dragObject = (e) => {
    let target = e.target;

    if (!target.classList.contains("js-celestial")) {
      return;
    }

    target.moving = true;

    target.oldX = e.clientX;
    target.oldY = e.clientY;

    target.oldLeft =
      window.getComputedStyle(target).getPropertyValue("left").split("px")[0] *
      1;
    target.oldTop =
      window.getComputedStyle(target).getPropertyValue("top").split("px")[0] *
      1;

    const startDrag = (e) => {
      e.preventDefault();

      if (!target.moving) {
        return;
      }

      target.distX = e.clientX - target.oldX;
      target.distY = e.clientY - target.oldY;

      target.style.left = target.oldLeft + target.distX + "px";
      target.style.top = target.oldTop + target.distY + "px";
    };

    const endDrag = () => {
      target.moving = false;
      updateLocalStorage(); // doesn't work or different logic
    };

    document.addEventListener("mousemove", startDrag);
    target.addEventListener("mouseup", endDrag);
  };

  starfield.addEventListener("mousedown", dragObject);
  starfield.addEventListener("dblclick", generateObject);

  // deleteBtn.addEventListener("click", deleteObject);

  createInitialTemplate();
  fillStarfield();

  // export { updateLocalStorage };
});
