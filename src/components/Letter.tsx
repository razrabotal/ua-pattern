import { WIDTH } from '../constants/config';

interface Props {
  letter: Record<number, number[]>;
  kerning: boolean;
}

export default function Letter({ letter, kerning }: Props) {
  const template: Record<number, number[]> = {
    0: [0, 1, 2],
    1: [0, 1],
    2: [0, 1, 2, 3],
    3: [0, 1],
    4: [0, 1, 2],
    5: [0, 1],
    6: [0, 1, 2],
    7: [0, 1],
  };

  const letterKeys = Object.keys(letter).map(Number);
  const minKey = Math.min(...letterKeys);
  const maxKey = Math.max(...letterKeys);

  const letterStartParity = minKey === 1 ? 'odd-start' : 'even-start';
  const letterEndParity = maxKey % 2 !== 0 ? 'odd-end' : 'even-end';
  const columnCount = maxKey - minKey + 1;

  const maxRow = Math.max(...Object.values(letter).flatMap((v) => v));

  return (
    <div
      className={`letter ${letterStartParity} ${letterEndParity}`}
      style={{
        gridTemplateColumns: `repeat(${columnCount}, ${WIDTH}px)`,
        marginRight: kerning ? `-${WIDTH * 2}px` : 0,
      }}
    >
      {Object.keys(template)
        .map(Number)
        .map((column) =>
          letter[column] ? (
            <div
              className={`column ${+column % 2 !== 0 ? 'column-asc' : ''}`}
              style={{
                gridColumnStart: column - minKey + 1,
                gridTemplateRows: `repeat(${maxRow + 1}, ${WIDTH}px)`,
              }}
            >
              {template[column].map((cell) =>
                letter[column].indexOf(cell) !== -1 ? (
                  <span
                    style={{
                      gridRowStart: maxRow + 1 - cell,
                    }}
                  ></span>
                ) : null
              )}
            </div>
          ) : null
        )}
    </div>
  );
}
