import React, { FC } from 'react';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import NotionBlock from './Block';
import { getChildBlocks } from './utils';
import { Options, OptionsContext } from './contexts';

export type NotionParserProps = {
  className?: string;
  data: {
    rootId: string;
    blocks: BlockObjectResponse[];
  }
  options?: Options;
}

const NotionParser: FC<NotionParserProps> = ({ className, data, options }) => {
  const block = data.blocks.find((block) => block.id === data.rootId);

  // root block
  if (!block) {
    const childBlocks = getChildBlocks(data.rootId, data.blocks);

    return (
      <OptionsContext.Provider value={options || {}}>
        <div className={className}>
          {childBlocks.map((child) => (
            <NotionParser data={{ rootId: child.id, blocks: data.blocks }} />
          ))}
        </div>
      </OptionsContext.Provider>
    );
  }

  return (
    <NotionBlock block={block} blocks={data.blocks} />
  );
}

export {
  NotionParser,
  NotionBlock,
}
