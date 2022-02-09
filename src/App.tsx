import React, { useState } from 'react';
import Router from './routes/Router';
import classes from './App.module.scss';
import Context from './contex/indext';

const App = (): React.ReactElement => {
  const [videoOption, setVideoOption] = useState({ url: '', play: false, time: null, done: false, old: '' });

  return (
    <Context.Provider value={{
      video: {
        videoOption,
        setVideoOptionUrl: (url: string) => setVideoOption(prev => ({ ...prev, url: `${url}` })),
        setVideoOptionTime: (time: number | null) => setVideoOption(prev => ({ ...prev, time })),
        setVideoOptionPlay: (play: boolean) => setVideoOption(prev => ({ ...prev, play })),
        setVideoOptionDone: (done: boolean) => setVideoOption(prev => ({ ...prev, done })),
        setVideoOptionOld: (old: string) => setVideoOption(prev => ({ ...prev, old })),
        setVideoOption: (name: string, value: any) => setVideoOption(prev => ({ ...prev, [name]: value }))
      }
    }}>
      <div className={classes.AppWrapper}>
        <Router />
      </div>
    </Context.Provider >
  );
};

export default App;
