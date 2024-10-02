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
    className: 'w-full p-4',
    data: BasicData as any,
    options: {
      classMap: {
        table: 'w-full border-collapse my-4',
        table_row: '[&>*]:border [&>*]:border-gray-300',
        paragraph: 'text-base py-2',
        heading_1: 'text-3xl pb-4',
        heading_2: 'text-2xl',
        heading_3: 'text-xl',
      },
      custom: (block, blocks) => {
        const { type } = block;
        if (type === 'image') {
          const { type } = block.image;
          if (type === 'external') {
            const { external } = block.image;
            return <img src={external.url} alt={external.url} className="w-full" />;
          }
        }
        return null;
      }
    }
  },
};
