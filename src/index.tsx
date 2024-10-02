import React, { FC } from 'react';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import NotionBlock from './Block';

export type NotionParserProps = {
  className?: string;
  data: {
    rootId: string;
    blocks: BlockObjectResponse[];
  }
}

const NotionParser: FC<NotionParserProps> = ({ className, data }) => {
  const block = data.blocks.find((block) => block.id === data.rootId);
  const childBlocks = data.blocks.filter((block) => {
    if (block.parent.type === 'page_id') {
      return block.parent.page_id === data.rootId;
    }
    if (block.parent.type === 'block_id') {
      return block.parent.block_id === data.rootId;
    }

    return false;
  });

  // root block
  if (!block) {
    return (
      <div className={className}>
        {childBlocks.map((child) => (
          <NotionParser data={{ rootId: child.id, blocks: data.blocks }} />
        ))}
      </div>
    );
  }

  return (
    <NotionBlock block={block} blocks={data.blocks} childBlocks={childBlocks} />
  );
}

export default NotionParser;
