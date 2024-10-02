import React, { FC } from 'react';
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export type RichTextProps = {
  richText: RichTextItemResponse;
};

const RichText: FC<RichTextProps> = ({ richText }) => {
  const { type, annotations } = richText;

  if (type === 'text') {
    const { text } = richText;
    const { bold, italic, underline, strikethrough, color } = annotations;

    const style: React.CSSProperties = {
      fontWeight: bold ? 'bold' : undefined,
      fontStyle: italic ? 'italic' : undefined,
      textDecoration: `${underline ? 'underline' : ''} ${strikethrough ? 'line-through' : ''}`.trim(),
      color: color !== 'default' ? color : undefined,
    };

    if (text.link) {
      return (
        <a href={text.link.url} style={style}>
          {text.content}
        </a>
      );
    }

    return <span style={style}>{text.content}</span>;
  }

  return null;
}

export default RichText;
