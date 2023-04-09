import {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { SQ_WIDTH, WIDTH } from '../constants/config';
import { getMaxRowWidth, getWordArray } from '../utils';
import {
  lettersWithBottomOffset,
  lettersWithoutBottomOffset,
} from '../constants/kerning';
import Row from './Row';
import { Button } from 'antd';

interface Props {
  word: string;
  ceilMath: boolean;
  hasWidthOffset: boolean;
  altLayout: boolean;
}

export default function Word(props: Props) {
  const { ceilMath, hasWidthOffset, altLayout, word } = props;
  const [height, setHeight] = useState<number>(0);
  const [maxRowWidth, setMaxRowWidth] = useState<number>(0);
  const [wordArray, setWordArray] = useState<string[][]>([]);

  const [marginLeft, setMarginLeft] = useState<number[]>([]);

  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newWordArray = getWordArray(word, altLayout);
    const maxRowWidth = getMaxRowWidth(newWordArray);
    setWordArray(newWordArray);
    setMaxRowWidth(maxRowWidth);
  }, [word, altLayout]);

  useLayoutEffect(() => {
    setHeight(elRef.current?.clientHeight);
  }, [wordArray, altLayout]);

  function getRowWidth() {
    if (hasWidthOffset) {
      return WIDTH * 2 * (maxRowWidth - 1);
    }
    return WIDTH * 2 * maxRowWidth;
  }

  function getCenterOffset() {
    const firstLetter = word[0];
    if (lettersWithoutBottomOffset.includes(firstLetter)) {
      return 0;
    }
    if (lettersWithBottomOffset.includes(firstLetter)) {
      return WIDTH * 2;
    }
    return WIDTH;
  }

  return (
    <>
      <div
        className="image"
        style={
          {
            '--width': WIDTH + 'px',
            '--sq-width': SQ_WIDTH + 'px',
            width: height * 2,
            height: height * 2,
          } as CSSProperties
        }
      >
        {Array(4)
          .fill('')
          .map(() => (
            <div
              className="image-part"
              style={{
                width: getRowWidth(),
                paddingBottom: getCenterOffset(),
                left: height - getRowWidth() / 2,
              }}
              ref={elRef}
            >
              {wordArray.map((chunk, index) => (
                <Row
                  chunk={chunk}
                  maxRowWidth={maxRowWidth}
                  ceilMath={ceilMath}
                  marginLeft={marginLeft[index] || 0}
                  updateMargin={(v) => {
                    const newMargins = [...marginLeft];
                    newMargins[index] = v;
                    setMarginLeft(newMargins);
                  }}
                />
              ))}
            </div>
          ))}
      </div>

      {/* {marginLeft.length > 0 && (
        <Button onClick={() => setMarginLeft([])}>Reset</Button>
      )} */}
    </>
  );
}
