import React, {useState, useEffect} from 'react';
import Section from './Section';
import './App.css';

const App:React.FC = ():JSX.Element => {

  const getWindowHeight = ():number => window.innerHeight;

  const [windowHeight, setWindowHeight] = useState<number>(getWindowHeight());

  useEffect(() => {
    const onLoad = () => {
      setWindowHeight(getWindowHeight());
      console.log(windowHeight);
    }
    window.addEventListener('load', onLoad);
    return () => {
      window.removeEventListener('load', onLoad);
    };
  });

  return (
    <div className="App">
      <Section
        windowHeight={windowHeight}
        img={'./img/bg_rd.jpg'}
      />
      <Section 
        windowHeight={windowHeight}
        img={'./img/bg_bl.jpg'}
      />
      <Section 
        windowHeight={windowHeight}
        img={'./img/bg_or.jpg'}
      />
      <Section 
        windowHeight={windowHeight}
        img={'./img/bg_pr.jpg'}
      />
    </div>
  );
}

export default App;
