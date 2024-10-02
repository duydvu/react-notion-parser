# React Notion Parser

React Notion Parser is a React component library that allows you to render Notion blocks in your React applications. This library is designed to be flexible and customizable, making it easy to integrate Notion content into your projects.

## Installation

To install the library, use npm or yarn:

```sh
npm install react-notion-parser
```

or

```sh
yarn add react-notion-parser
```

## Usage

Here's a basic example of how to use the `NotionParser` component:

```tsx
import React from 'react';
import { NotionParser } from 'react-notion-parser';

const data = {
  "rootId": "10d8de23-eba2-806a-b1a3-d7fe6b4e1e02",
  "blocks": [
    {
      "object": "block",
      "id": "10d8de23-eba2-80bb-a820-f20c2f9f62b8",
      "parent": {
        "type": "page_id",
        "page_id": "10d8de23-eba2-806a-b1a3-d7fe6b4e1e02"
      },
      "created_time": "2024-09-26T13:53:00.000Z",
      "last_edited_time": "2024-10-01T03:35:00.000Z",
      "has_children": false,
      "archived": false,
      "in_trash": false,
      "type": "paragraph",
      "paragraph": {
        "rich_text": [
          {
            "type": "text",
            "text": {
              "content": "Text ",
              "link": null
            },
            "annotations": {
              "bold": false,
              "italic": false,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "Text ",
            "href": null
          }
        ],
        "color": "default"
      }
    },
  ]
};

const App = () => (
  <div className="app">
    <NotionParser data={data} />
  </div>
);

export default App;
```

## Components

### NotionParser

The `NotionParser` component is the main component of this library. It takes Notion block data as a prop and renders it.

#### Props

- `className`: Additional CSS class names to apply to the root element.
- `data`: The Notion block data to render.
  - `rootId`: The ID of the page.
  - `blocks`: An array of all block objects that are part of the Notion page.
- `options`: Optional configuration for customizing the rendering.
  - `classMap`: A map of block types to CSS class names.
  - `custom`: Custom rendering functions.

## Storybook

This project uses Storybook for developing and testing components in isolation. To start Storybook, run:

```sh
npm run storybook
```

You can build the Storybook static site with:

```sh
npm run build-storybook
```

## Building the Project

To build the project, run:

```sh
npm run build
```

This will generate the compiled files in the `dist` directory.

## Testing

To run the tests, use:

```sh
npm run test
```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Feel free to contribute to this project by opening issues or submitting pull requests. We appreciate your feedback and contributions!

---

For more detailed documentation, please refer to the source code and comments within the components.

---

**Author**: Duy Vu
