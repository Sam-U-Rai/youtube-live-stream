import React, { useContext, useState } from 'react';
import classes from './index.module.scss';
import Context from '../../contex/indext';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../routes';

const HomePage = (): React.ReactElement => {
  const data = useContext(Context);
  const [inputUrl, setInputUrl] = useState(data.video.videoOption.url || '');
  const navigate = useNavigate();
  const setUrl = () => {
    data?.video.setVideoOptionUrl(inputUrl);
    data.video.setVideoOptionPlay(false);
    navigate(RouteNames.VIDEO);
  };

  return <div className={classes.HomePageWrapper}>
    Home
    <div className={classes.content}>
      <input className={classes.input} type="text" value={inputUrl} onChange={e => setInputUrl(e.target.value || '')} />
      <button disabled={!inputUrl} className={classes.btn} onClick={setUrl}>Save video</button>
    </div>
  </div>;
};

export default HomePage;
