import { useState } from 'react';
import Word from './components/Word';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { Row, Col, Input, Button, Checkbox, Typography } from 'antd';
const { Paragraph, Title } = Typography;

import './style.css';

export default function App() {
  const [word, setWord] = useState<string>('drone');

  const [ceilMath, setCeilMath] = useState<boolean>(true);
  const [hasWidthOffset, setHasWidthOffset] = useState<boolean>(false);
  const [altLayout, setAltLayout] = useState<boolean>(false);

  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.querySelector('.image')!, {
      backgroundColor: null,
    });
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, `${word}.png`, 'image/png');
  };

  return (
    <div>
      <div className="header">
        <Title level={5} style={{ margin: '0 0 10px' }}>
          droneidentity
        </Title>
        <Row gutter={16} align={'middle'}>
          <Col flex={1}>
            <Input
              value={word}
              onChange={(e) => setWord(e.target.value.toLowerCase())}
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
      </div>
      <br />
      <Word
        ceilMath={ceilMath}
        hasWidthOffset={hasWidthOffset}
        altLayout={altLayout}
        word={word}
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
