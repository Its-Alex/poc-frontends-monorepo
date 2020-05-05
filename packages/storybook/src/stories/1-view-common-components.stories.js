import React from 'react';

import Component from '@monorepo/common/components/Component'
import Image from '@monorepo/common/components/Image'

export default {
  title: 'Components',
  component: Component,
};

export const SharedComponents = () => (
  <div>
    <Component />
    <Image />
  </div>
);
