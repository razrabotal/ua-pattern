import * as React from 'react';
import { WIDTH } from '../constants/config';
import { kerningPairs } from '../constants/kerning';
import { alphabet } from '../constants/letters';
import Letter from './Letter';

interface Props {
  chunk: string[];
  maxRowWidth: number;
  ceilMath: boolean;
  marginLeft: any;
  updateMargin: any;
}

export default function Row(props: Props) {
  const { chunk, maxRowWidth, ceilMath, marginLeft, updateMargin } = props;

  function getMarginLeft(chunk) {
    const lettersWidthSum = chunk.reduce((acc, item, i) => {
      const letterWidth = parseInt(alphabet[item]?.letterWidth);
      const width = checkKerning(chunk, i) ? letterWidth - 1 : letterWidth;
      return acc + width;
    }, 0);
    const mathFunction = ceilMath ? Math.ceil : Math.floor;
    return mathFunction((maxRowWidth - lettersWidthSum) / 2);
  }

  function checkKerning(chunk: string[], index: number): boolean {
    const currentLetter = chunk[index];
    const nextLetter = chunk[index + 1];

    return nextLetter
      ? kerningPairs.includes(currentLetter + nextLetter)
      : false;
  }

  function addMargin() {
    const newMargin = marginLeft >= 2 ? -2 : marginLeft + 1;
    updateMargin(newMargin);
  }

  return (
    <div
      className="letters"
      style={{ marginLeft: (getMarginLeft(chunk) + marginLeft) * WIDTH * 2 }}
      onClick={addMargin}
    >
      {chunk.map((letter, index) =>
        alphabet[letter]?.letter ? (
          <Letter
            kerning={checkKerning(chunk, index)}
            letter={alphabet[letter]?.letter}
          />
        ) : null
      )}
    </div>
  );
}
