import React, { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('architect');
  const [alignment, setAlignment] = useState('left');
  const [text, setText] = useState('');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title}
        subtitle={subtitle}
        font={font}
        alignment={alignment}
        text={text}/>
      <Editor title={title}
        setTitle={setTitle}
        subtitle={subtitle}
        setSubtitle={setSubtitle}
        font={font}
        setFont={setFont}
        alignment={alignment}
        setAlignment={setAlignment}
        text={text}
        setText={setText}/>
    </main>
  );
}
