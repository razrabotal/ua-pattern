import { useEffect, useRef, useState } from 'react';
import ReactCurvedText from 'react-curved-text';
import Word from './Word';

interface Props {
  word: string;
  ceilMath: boolean;
  hasWidthOffset: boolean;
  altLayout: boolean;
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
      {/* <div className="text-above">
    
      </div> */}
      <div style={{ display: 'inline-block', padding: 100 }} ref={elRef}>
        <ReactCurvedText
          key={elRef}
          width={width}
          height={width}
          cx={width / 2}
          cy={width / 2}
          rx={width / 2 - 40}
          ry={width / 2 - 40}
          startOffset={width / 4}
          reversed={true}
          text="Академія дронаріум"
          // textProps={{ style: { fontSize: 24 } }}
          textPathProps={null}
          tspanProps={null}
          ellipseProps={null}
          svgProps={null}
        />

        <Word {...props} />
      </div>
      {width}
    </div>
  );
}
