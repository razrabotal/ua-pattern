import { useState } from 'react';
import Word from './components/Word';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

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
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value.toLowerCase())}
        />

        <label>
          <input
            type="checkbox"
            checked={ceilMath}
            onChange={(e) => setCeilMath(e.target.checked)}
          />
          Option 1{' '}
        </label>

        <label>
          <input
            type="checkbox"
            checked={hasWidthOffset}
            onChange={(e) => setHasWidthOffset(e.target.checked)}
          />
          Option 2{' '}
        </label>

        <label>
          <input
            type="checkbox"
            checked={altLayout}
            onChange={(e) => setAltLayout(e.target.checked)}
          />
          Alt layout{' '}
        </label>

        <button onClick={handleCaptureClick}>Save</button>
      </div>
      <br />
      <Word
        ceilMath={ceilMath}
        hasWidthOffset={hasWidthOffset}
        altLayout={altLayout}
        word={word}
      />
      <br />
      <p>
        dev:{' '}
        <a target="_blank" href="https://github.com/razrabotal">
          taras gordienko
        </a>
      </p>
      <p>UKAD</p>
    </div>
  );
}
