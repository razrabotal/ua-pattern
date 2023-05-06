import { useState } from 'react';
import Circular from './components/Circular';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { Row, Col, Input, Button, Checkbox, Typography } from 'antd';
const { Paragraph, Title } = Typography;

import './style.css';

export default function App() {
  const [word, setWord] = useState<string>('drone');
  const [name, setName] = useState<string>('Зеленський');
  const [bgColor, setBgColor] = useState<string>('#262626');
  const [textColor, setTextColor] = useState<string>('#b8b8b8');

  const [ceilMath, setCeilMath] = useState<boolean>(true);
  const [hasWidthOffset, setHasWidthOffset] = useState<boolean>(false);
  const [altLayout, setAltLayout] = useState<boolean>(false);
  const [withBackground, setWithBackground] = useState<boolean>(true);

  const handleCaptureClick = async () => {
    const canvas = await html2canvas(
      document.querySelector('.circle-wrapper')!,
      {
        backgroundColor: null,
      }
    );
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, `${word}.png`, 'image/png');
  };

  return (
    <div
      style={
        {
          '--bg-color': bgColor,
          '--text-color': textColor,
        } as React.CSSProperties
      }
    >
      <div className="header">
        <Title level={5} style={{ margin: '0 0 10px' }}>
          droneidentity
        </Title>
        <Row gutter={16} align={'middle'} style={{ marginBottom: 8 }}>
          <Col flex={1}>
            <Input
              value={word}
              onChange={(e) => setWord(e.target.value.toLowerCase())}
            />
          </Col>
          <Col flex={1}>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value.toLowerCase())}
            />
          </Col>
          <Col flex={3}>
            <Checkbox
              checked={ceilMath}
              onChange={(e) => setCeilMath(e.target.checked)}
            >
              Option 1
            </Checkbox>

            <Checkbox
              checked={hasWidthOffset}
              onChange={(e) => setHasWidthOffset(e.target.checked)}
            >
              Option 2
            </Checkbox>

            <Checkbox
              checked={altLayout}
              onChange={(e) => setAltLayout(e.target.checked)}
            >
              Alt layout
            </Checkbox>
            <Button
              type="primary"
              onClick={handleCaptureClick}
              style={{ marginLeft: 20 }}
            >
              Save
            </Button>
          </Col>
        </Row>
        <Row gutter={16} align={'middle'}>
          <Col flex={'100px'}>
            <Input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value.toLowerCase())}
            />
          </Col>
          <Col flex={'100px'}>
            <Input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value.toLowerCase())}
            />
          </Col>
          <Col>
            <Checkbox
              checked={withBackground}
              onChange={(e) => setWithBackground(e.target.checked)}
            >
              With background
            </Checkbox>
          </Col>
        </Row>
      </div>
      <br />

      <Circular
        key={withBackground.toString()}
        ceilMath={ceilMath}
        hasWidthOffset={hasWidthOffset}
        altLayout={altLayout}
        withBackground={withBackground}
        word={word}
        name={name}
      />

      <br />
      <Paragraph>
        dev:{' '}
        <a target="_blank" href="https://github.com/razrabotal">
          taras gordienko
        </a>
      </Paragraph>
      <Paragraph>UKAD</Paragraph>
    </div>
  );
}
