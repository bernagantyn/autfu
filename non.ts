import React from 'react';
import { MergedScaleComponent } from './MergedScaleComponent';

const App = () => {
  return (
    <div>
      <MergedScaleComponent
        scale={scale}
        updateScale={updateScale}
      />
    </div>
  );
};
