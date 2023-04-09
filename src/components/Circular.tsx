import { useEffect, useRef, useState } from 'react';
import ReactCurvedText from 'react-curved-text';
import { Row, Col, Input, Button, Checkbox, Typography } from 'antd';
import Word from './Word';

interface Props {
  word: string;
  ceilMath: boolean;
  hasWidthOffset: boolean;
  altLayout: boolean;
  name: string;
}

export default function Circular(props: Props) {
  const elRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (elRef.current) {
        setWidth(elRef.current.clientWidth);
      }
    };

    const observer = new MutationObserver(handleResize);
    observer.observe(elRef.current, { childList: true, subtree: true });
    handleResize();

    return () => {
      observer.disconnect();
    };
  }, [elRef]);

  return (
    <div className="text-wrapper">
      <div
        className="circle-wrapper"
        style={{ padding: width / 8 }}
        ref={elRef}
      >
        <ReactCurvedText
          key={elRef}
          width={width}
          height={width}
          cx={width / 2}
          cy={width / 2}
          rx={width / 2.35}
          ry={width / 2.35}
          startOffset={width / 3.8}
          reversed={true}
          text="Академія дронаріум"
          textProps={{ style: { fontSize: width / 15 } }}
        />

        <Word {...props} />

        <ReactCurvedText
          key={elRef}
          width={width}
          height={width}
          cx={width / 2}
          cy={width / 2}
          rx={width / 2.1}
          ry={width / 2.1}
          startOffset={width * (3 / 3.98) - (props.name.length * width) / 33}
          reversed={false}
          text={props.name}
          textProps={{ style: { fontSize: width / 12 } }}
        />
      </div>
    </div>
  );
}
