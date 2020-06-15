import React from 'react';
import { Greeting } from 'components';
import 'components/dist/styles.css';

export default {
  title: 'Greeting',
  component: Greeting,
};

export const Default = () => <Greeting />;

export const Named = () => <Greeting name="Alan" message="aloha" />;
