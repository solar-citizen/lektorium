import { useState } from 'react';
import { random } from 'lodash';
import useWindowWidth from './useWindowWidth';

const Figure = ({ x, y, figures, setFigures, figure, color, circle }) => {
  const [position, setPosition] = useState([x, y]);
  const [inputText, setInputText] = useState('');
  const [displayName, setDisplayName] = useState(true);
  const { width } = useWindowWidth();

  const moveAt = (e) => {
    if (!e.target.classList.contains('figure')) {
      return;
    } else {
      e.target.style.left = e.pageX - e.target.offsetWidth / 2 + 'px';
      e.target.style.top = e.pageY - e.target.offsetHeight / 2 + 'px';
    }
  };

  const onMouseDown = (e) => {
    e.target.moving = true;
    e.target.style.cursor = 'all-scroll';
    moveAt(e);
  };

  const onMouseMove = (e) => {
    if (!e.target.moving === true) {
      return;
    }
    moveAt(e);

    if (width > 1600) {
      setPosition([e.clientX - 100, e.clientY - 100]);
    }
    if (width > 1000 && width < 1600) {
      setPosition([e.clientX - 75, e.clientY - 75]);
    }
    if (width < 1000) {
      setPosition([e.clientX - 60, e.clientY - 60]);
    }
  };

  const onMouseUp = (e) => {
    e.target.moving = false;
    e.target.style.cursor = 'pointer';

    setFigures(
      figures.map((figureItem) => {
        if (figureItem.id === figure.id) {
          return {
            ...figureItem,
            x: position[0],
            y: position[1],
          };
        }
        return figureItem;
      })
    );
  };

  const deleteFigure = () => {
    setFigures(figures.filter((figureItem) => figureItem.id !== figure.id));
  };

  const changeColor = () => {
    setFigures(
      figures.map((figureItem) => {
        if (figureItem.id === figure.id) {
          return {
            ...figureItem,
            color: `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(
              0,
              255
            )}, ${random(0.8, 1, true).toFixed(2)})`,
          };
        }
        return figureItem;
      })
    );
  };

  const toCircle = () => {
    setFigures(
      figures.map((figureItem) => {
        if (figureItem.id === figure.id) {
          return {
            ...figureItem,
            circle: !figureItem.circle,
          };
        }
        return figureItem;
      })
    );
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitName = (e) => {
    e.preventDefault();

    if (inputText.trim()) {
      setFigures(
        figures.map((figureItem) => {
          if (figureItem.id === figure.id) {
            return {
              ...figureItem,
              name: inputText,
            };
          }
          return figureItem;
        })
      );
    }

    setInputText('');
    setDisplayName(true);
  };

  const figureNameClickHandler = () => {
    setDisplayName(false);
  };

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      className='figure'
      style={{
        top: y,
        left: x,
        backgroundColor: color,
        borderRadius: circle ? '50%' : '0',
        boxShadow: `${color} 0 0 15px 0`,
      }}
    >
      <div className='name-wrapper'>
        <form
          className='form'
          action=''
          style={{ display: displayName ? 'none' : 'flex' }}
        >
          <input
            className='form__input'
            type='text'
            value={inputText}
            onChange={inputTextHandler}
          />
          <button className='form__btn btn' onClick={submitName}>
            &#10004;
          </button>
        </form>
        <div
          className='figure__name'
          onClick={figureNameClickHandler}
          style={{ display: displayName ? 'block' : 'none' }}
        >
          {figure.name}
        </div>
      </div>
      <div
        className='buttons'
        // style={{
        //   flexDirection: circle && 'column',
        //   alignItems: circle && 'center',
        // }}
      >
        <button className='btn figure__delete' onClick={deleteFigure}>
          Delete
        </button>
        <button className='btn figure__change' onClick={toCircle}>
          {circle ? 'Square' : 'Circle'}
        </button>
        <button className='btn figure__random-color' onClick={changeColor}>
          Random color
        </button>
      </div>
      <div className='figure__position'>
        x:{position[0]} y:{position[1]}
      </div>
    </div>
  );
};
export default Figure;
