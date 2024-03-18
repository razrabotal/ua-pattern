import { useEffect, useRef, useState } from 'react';
import ReactCurvedText from 'react-curved-text';
import Word from './Word';

interface Props {
  word: string;
  ceilMath: boolean;
  hasWidthOffset: boolean;
  altLayout: boolean;
  name: string;
  withBackground: boolean;
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
        style={
          props.withBackground
            ? {
                // border: `${width / 500}px solid transparent`,
                padding: width / 7,
              }
            : null
        }
        ref={elRef}
      >
        {props.withBackground && (
          <>
            <div
              className="inside-border"
              style={{
                border: `${width / 50}px solid var(--text-color)`,
                backgroundColor: 'var(--bg-color)',
              }}
            ></div>
            <ReactCurvedText
              key={elRef}
              width={width}
              height={width}
              cx={width / 2}
              cy={width / 2}
              rx={width / 2.45}
              ry={width / 2.45}
              startOffset={width / 4.3}
              reversed={true}
              text="АКАДЕМІЯ ДРОНАРІУМ"
              textProps={{ style: { fontSize: width / 15 } }}
              textPathProps={{ fill: 'var(--text-color)' }}
            />
          </>
        )}

        <Word {...props} />

        {props.withBackground && (
          <ReactCurvedText
            key={elRef}
            width={width}
            height={width}
            cx={width / 2}
            cy={width / 2}
            rx={width / 2.2}
            ry={width / 2.2}
            startOffset={
              (width * 2.84) / 4 - ((props.name.length / 2) * width) / 16.8
            }
            reversed={false}
            text={props.name.toUpperCase()}
            textProps={{ style: { fontSize: width / 12 } }}
            textPathProps={{ fill: 'var(--text-color)' }}
          />
        )}
      </div>
    </div>
  );
}
