import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../routes';
import classes from './index.module.scss';
import gifImg from '../../assets/gif/giphy.webp';

const GifPage = (): React.ReactElement => {
  const navigate = useNavigate();

  const btnBack = () => {
    navigate(RouteNames.VIDEO);
  };
  return (
    <div className={classes.GifPageWrapper}>
      <button
        className={`${classes.btn}`}
        onClick={btnBack}>
        Back
      </button>
      <div className={classes.gif}>
        <img src={gifImg} alt="GIF" />
      </div>
    </div>
  );
};

export default GifPage;
