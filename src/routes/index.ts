import React from 'react';
import HomePage from '../pages/home/index';
import VideoPage from '../pages/video/index';
import GifPage from '../pages/gif/index';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  child?: boolean;
  titleName: string;
}

export enum RouteNames {
  HOME = '/',
  VIDEO = '/video',
  GIF = '/gif'
}

export enum RouteNamesByLink {
  '/' = 'homee',
  '/video' = 'video',
  '/gif' = 'gif'
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.HOME, component: HomePage, titleName: 'Home' },
  { path: RouteNames.VIDEO, component: VideoPage, titleName: 'Video' },
  { path: RouteNames.GIF, component: GifPage, titleName: 'GIF' }
];

export const privateRoutes: IRoute[] = [
  // { path: RouteNames.ANALYTICS, component: AnalyticsPage, titleName: 'Analytics' }
];
