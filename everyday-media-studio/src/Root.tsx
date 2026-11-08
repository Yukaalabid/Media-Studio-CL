import React from 'react';
import {Composition} from 'remotion';
import {EverydayExplainer} from './compositions/EverydayExplainer';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="EverydayExplainer"
      component={EverydayExplainer}
      durationInFrames={1500}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
