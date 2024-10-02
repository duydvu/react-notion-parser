import React, { FC } from 'react';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import RichText from './RichText';

export type TableRowProps = {
  className?: string;
  block: BlockObjectResponse;
  index: number;
  hasColumnHeader: boolean;
  hasRowHeader: boolean;
};

const TableRow: FC<TableRowProps> = ({ className, block, index, hasColumnHeader, hasRowHeader }) => {
  const { type } = block;

  if (type === 'table_row') {
    const cells = block.table_row.cells.map((cell, colIndex) => {
      const content = cell.map((rT) => (
        <RichText richText={rT} />
      ));

      if ((hasColumnHeader && colIndex === 0) || (hasRowHeader && index === 0)) {
        return <th key={colIndex}>{content}</th>;
      }

      return <td key={colIndex}>{content}</td>;
    });

    return <tr className={className}>{cells}</tr>;
  }

  return null;
}

export default TableRow;
