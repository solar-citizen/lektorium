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
    window.getComputedStyle(target).getPropertyValue("left").split("px")[0] * 1;
  target.oldTop =
    window.getComputedStyle(target).getPropertyValue("top").split("px")[0] * 1;

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
  };

  document.addEventListener("mousemove", startDrag);
  target.addEventListener("mouseup", endDrag);
};

export { dragObject };
