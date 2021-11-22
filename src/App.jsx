import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { random } from 'lodash';
import Figures from './Components/Figures';

const App = () => {
  const [figures, setFigures] = useState([]);

  // get local tasks
  // runs once when the app starts
  useEffect(() => {
    if (localStorage.getItem('figures') === null) {
      localStorage.setItem('figures', JSON.stringify([]));
    } else {
      let figuresLocal = JSON.parse(localStorage.getItem('figures'));
      setFigures(figuresLocal);
    }
  }, []);

  // set local tasks
  // runs every time
  useEffect(() => {
    localStorage.setItem('figures', JSON.stringify(figures));
  }, [figures]);

  const reset = () => {
    setFigures([]);
    localStorage.clear();
  };

  const createFigure = (e) => {
    setFigures([
      ...figures,
      {
        x: e.clientX,
        y: e.clientY,
        color: `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(
          0,
          255
        )}, ${random(0.8, 1, true).toFixed(2)})`,
        circle: false,
        name: 'New Figure',
        id: uuidv4(),
      },
    ]);
  };

  return (
    <div className='App' onDoubleClick={createFigure}>
      <div className='wrapper'>
        <h2 className='title'>Double click somewhere to generate a figure</h2>
        <button className='btn reset' onClick={reset}>
          Reset
        </button>
        <div className='features'>
          <ul className='list1'>
            You're <u>able</u> to:
            <li>create figures</li>
            <li>delete figures</li>
            <li>drag figures</li>
            <li>change their name</li>
            <li>change their color</li>
            <li>save the changes</li>
            <li>save coordinates</li>
          </ul>
          <ul className='list2'>
            You're <u>unable</u> to:
            <li>*change size :/</li>
          </ul>
        </div>
        <span className='tiny-text'>* - yet</span>
      </div>
      <Figures figures={figures} setFigures={setFigures} />
    </div>
  );
};

export default App;
