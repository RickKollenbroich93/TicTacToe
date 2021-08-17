import React from 'react';
// import styles from './src/App.module.css';

function Square(props: {
  onClick: () => void;
  value:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}): JSX.Element {
  if (props.value === 'X') {
    return (
      <button className="square" onClick={() => props.onClick()}>
        <span className="X">{props.value}</span>
      </button>
    );
  } else {
    return (
      <button className="square" onClick={() => props.onClick()}>
        <span className="O">{props.value}</span>
      </button>
    );
  }
}

export default Square;
