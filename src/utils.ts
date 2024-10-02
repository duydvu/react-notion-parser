import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export function getChildBlocks(parentId: string, blocks: BlockObjectResponse[]): BlockObjectResponse[] {
  return blocks.filter((block) => {
    if (block.parent.type === 'page_id') {
      return block.parent.page_id === parentId;
    }
    if (block.parent.type === 'block_id') {
      return block.parent.block_id === parentId;
    }

    return false;
  });
}
