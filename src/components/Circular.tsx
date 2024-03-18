import { useEffect, useRef, useState } from 'react';
import ReactCurvedText from 'react-curved-text';
import opentype from 'opentype.js';
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
  const svgRef = useRef(null);

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

  useEffect(() => {
    // Function to convert text to path
    const convertTextToPath = async () => {
      try {
        const font = await opentype.load('https://github.com/JetBrains/JetBrainsMono/blob/master/fonts/ttf/JetBrainsMono-Bold.ttf');
        const pathData = font
          .getPath('АКАДЕМІЯ ДРОНАРІУМ', 0, 0, width / 15)
          .toPathData();

        const newPathElement = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path'
        );
        newPathElement.setAttribute('d', pathData);
        newPathElement.setAttribute('fill', 'var(--text-color)');

        if (svgRef.current) {
          const textElement = svgRef.current.querySelector('text');
          if (textElement) {
            svgRef.current.replaceChild(newPathElement, textElement);
          }
        }
      } catch (error) {
        console.error('Error loading font or converting text to path:', error);
      }
    };

    convertTextToPath();
  }, [width]);

  return (
    <div className="text-wrapper">
      <div
        className="circle-wrapper"
        style={
          props.withBackground
            ? {
                border: `${width / 90}px solid transparent`,
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
            <div ref={svgRef}>
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
            </div>
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
