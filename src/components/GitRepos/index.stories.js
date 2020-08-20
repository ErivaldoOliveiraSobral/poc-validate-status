import React from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import GitRepos from './index';

export default {
  title: 'POC/Git Repositories',
  component: GitRepos,
  decorators: [withKnobs]
};

export const MyRepositories = () => (
  <GitRepos loading={boolean('Loading', false)} />
);