import React, { FC } from 'react';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import RichText from './RichText';
import NotionParser from '.';
import TableRow from './TableRow';

export type NotionBlockProps = {
  block: BlockObjectResponse;
  blocks: BlockObjectResponse[];
  childBlocks: BlockObjectResponse[];
};

const NotionBlock: FC<NotionBlockProps> = ({ block, blocks, childBlocks }) => {
  const { type } = block;

  if (type === 'paragraph') {
    const content = block.paragraph.rich_text.map((rT) => (
      <RichText richText={rT} />
    ));
    return <p>{content}</p>;
  }

  if (type === 'heading_1') {
    const { rich_text, color } = block.heading_1;
    const content = rich_text.map((rT) => (
      <RichText richText={rT} />
    ));
    const style: React.CSSProperties = {
      color: color !== 'default' ? color : undefined,
    };
    return <h1 style={style}>{content}</h1>;
  }

  if (type === 'heading_2') {
    const { rich_text, color } = block.heading_2;
    const content = rich_text.map((rT) => (
      <RichText richText={rT} />
    ));
    const style: React.CSSProperties = {
      color: color !== 'default' ? color : undefined,
    };
    return <h2 style={style}>{content}</h2>;
  }

  if (type === 'heading_3') {
    const { rich_text, color } = block.heading_3;
    const content = rich_text.map((rT) => (
      <RichText richText={rT} />
    ));
    const style: React.CSSProperties = {
      color: color !== 'default' ? color : undefined,
    };
    return <h3 style={style}>{content}</h3>;
  }

  if (type === 'bulleted_list_item') {
    const content = block.bulleted_list_item.rich_text.map((rT) => (
      <RichText richText={rT} />
    ));
    return <li>{content}</li>;
  }

  if (type === 'numbered_list_item') {
    const content = block.numbered_list_item.rich_text.map((rT) => (
      <RichText richText={rT} />
    ));
    return <li>{content}</li>;
  }

  if (type === 'quote') {
    const content = block.quote.rich_text.map((rT) => (
      <RichText richText={rT} />
    ));
    return <blockquote>{content}</blockquote>;
  }

  if (type === 'table') {
    const { has_column_header, has_row_header } = block.table;

    return (
      <table>
        <tbody>
          {childBlocks.map((child, index) => (
            <TableRow
              key={index}
              block={child}
              index={index}
              hasColumnHeader={has_column_header}
              hasRowHeader={has_row_header}
            />
          ))}
        </tbody>
      </table>
    );
  }

  if (type === 'image') {
    const { type } = block.image;
    if (type === 'external') {
      const { external } = block.image;
      return <img src={external.url} alt={external.url} />;
    }
  }

  if (type === 'toggle') {
    const children = childBlocks.map((child) => (
      <NotionParser data={{ rootId: child.id, blocks }} />
    ));
    return <details>{children}</details>;
  }

  if (type === 'divider') {
    return <hr />;
  }

  if (type === 'code') {
    const content = block.code.rich_text.map((rT) => (
      <RichText richText={rT} />
    ));
    return <pre>{content}</pre>;
  }

  if (type === 'callout') {
    const { rich_text, icon } = block.callout;
    const content = rich_text.map((rT) => (
      <RichText richText={rT} />
    ));
    return (
      <div style={{ display: 'flex' }}>
        <div>
          {icon?.type === 'emoji' && <span>{icon.emoji}</span>}
        </div>
        <div>
          {content}
        </div>
      </div>
    );
  }

  if (type === 'bookmark') {
    const { bookmark } = block;
    return (
      <a href={bookmark.url} target="_blank" rel="noreferrer">
        {bookmark.url}
      </a>
    );
  }

  if (type === 'link_preview') {
    const { link_preview } = block;
    return (
      <a href={link_preview.url} target="_blank" rel="noreferrer">
        {link_preview.url}
      </a>
    );
  }

  return null;
}

export default NotionBlock;
