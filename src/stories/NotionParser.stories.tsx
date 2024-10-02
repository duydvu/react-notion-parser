import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import NotionParser from '..';

import BasicData from './basic.json';

const meta = {
  title: 'NotionParser',
  component: NotionParser,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotionParser>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  args: {
    data: BasicData as any,
  },
};
