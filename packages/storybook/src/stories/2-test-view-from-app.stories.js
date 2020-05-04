import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import Component from '@monorepo/my-app/src/App'

export default {
  title: 'View my-app',
  component: Component,
};

export const Text = () => <Component />;
