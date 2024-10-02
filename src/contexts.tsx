import { createContext } from 'react';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export type Options = {
  classMap?: Partial<Record<BlockObjectResponse['type'], string>>;
  custom?: (block: BlockObjectResponse, blocks: BlockObjectResponse[]) => JSX.Element | null;
}

export const OptionsContext = createContext<Options>({});
