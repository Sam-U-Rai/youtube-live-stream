import React, { useContext, useState } from 'react';
import classes from './index.module.scss';
import YouTube, { Options } from 'react-youtube';
import Context from '../../contex/indext';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../routes';

const opts: Options = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1,
    iv_load_policy: 3,
    start: 1
  }
};

const VideoPage = (): React.ReactElement => {
  const data = useContext(Context);
  const [options, setOptions] = useState(opts);
  const [intervalL, setIntervalL] = useState<any>(null);
  const navigate = useNavigate();
  const _onReady = (_event: any): void => {
    data.video.setVideoOptionPlay(true);
    if (!data.video?.videoOption?.startTime || data.video?.videoOption?.url !== data.video?.videoOption?.old) {
      data.video.setVideoOption('startTime', Date.now());
    }
    if (data.video?.videoOption?.url === data.video?.videoOption?.old && data.video?.videoOption?.time) {
      const dateTime: number = ((Date.now() - data.video?.videoOption?.startTime) / 1000) || 0;
      // if (data.video?.videoOption?.time > dateTime) {
      //   dateTime += data.video?.videoOption?.time;
      // }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      setOptions((prev: any) => ({
        ...prev,
        playerVars: {
          ...prev?.playerVars,
          start: dateTime || Number(data.video?.videoOption?.time) || opts.playerVars.start
        }
      }));
    }
  };
  const changeInterval = (num: number) => {
    const interval = setInterval(() => {
      data.video.setVideoOptionTime(num);
    }, 2000);
    if (intervalL) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      clearInterval(intervalL);
    }
    setIntervalL(interval);
  };
  const _onChange = (event: any): void => {
    if (event.data === YouTube.PlayerState.PLAYING && !data.video?.videoOption.done) {
      changeInterval(Number(event.target.getCurrentTime()));
      data.video.setVideoOptionDone(false);
    } else if (intervalL) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      clearInterval(intervalL);
    }

    data.video.setVideoOptionPlay(event.data === YouTube.PlayerState.PLAYING);
    data.video.setVideoOptionTime(event.target.getCurrentTime());
  };
  const btnBack = () => {
    data.video.setVideoOptionOld(data.video?.videoOption?.url);
    navigate(RouteNames.HOME);
  };
  const btnGif = () => {
    data.video.setVideoOptionOld(data.video?.videoOption?.url);
    navigate(RouteNames.GIF);
  };

  return <div className={classes.VideoPageWrapper}>
    <div className={classes.options}>
      <button
        className={`${classes.btn} ${classes.btnBack}`}
        disabled={data.video?.videoOption?.play}
        onClick={btnBack}>Edit</button>
      <button
        className={classes.btn}
        onClick={btnGif}>GIF</button>
    </div>
    <div className={classes.player}>
      <YouTube
        videoId={`${data.video?.videoOption?.url?.split('v=')[1]?.split('&')[0]}`}
        opts={options}
        onReady={_onReady}
        onStateChange={_onChange}
        onPlaybackQualityChange={_onChange}
      />
    </div>
  </div>;
};

export default VideoPage;
