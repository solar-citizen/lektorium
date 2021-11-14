import Figure from './Figure';

const Figures = ({ figures, setFigures }) => {
  return (
    <div>
      {figures.map((figure) => (
        <Figure
          figure={figure}
          x={figure.x}
          y={figure.y}
          color={figure.color}
          circle={figure.circle}
          // id={figure.id}
          key={figure.id}
          figures={figures}
          setFigures={setFigures}
        />
      ))}
    </div>
  );
};

export default Figures;
