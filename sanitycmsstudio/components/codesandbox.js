import React from "react";

const CodeSandboxPreview = ({ value }) => {
  const { url = "test", theme = "light", view } = value;

  if (!url) {
    return (<div>Add a URL</div>)
  }

  var viewString = ""

  if (view === "default") {
    viewString = ""
  }
  else {
    viewString = `&view=${view}`
  }

  const splitURL = url.split("/");
  // [ 'https:', '', 'codesandbox.io', 's', 'zealous-fast-c2dng' ]
  const [, , , , container] = splitURL;
  const embedUrl = `https://codesandbox.io/embed/${container}?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fstyles.css&theme=${theme}${viewString}`;
  return (
    <iframe
      src={embedUrl}
      style={{ width: '100%', height: '500px', border: 0, overflow: 'hidden' }}
      title={container}
      allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  );

};

export default {
  name: "codesandbox",
  type: "object",
  title: "CodeSandbox",
  preview: {
    select: {
      url: "url",
      theme: "theme",
      view: "view"
    },
    component: CodeSandboxPreview
  },
  fields: [
    {
      name: "url",
      type: "url",
      title: "URL"
    },
    {
      name: "theme",
      title: "Theme",
      type: "string",
      options: {
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' }
        ],
        layout: 'dropdown'
      }
    },
    {
      name: "container",
      title: "Container",
      type: "string"
    },
    {
      name: "view",
      title: "View",
      type: "string",
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Split', value: 'split' },
          { title: 'Preview', value: 'preview' },
          { title: 'Editor', value: 'editor' }
        ],
        layout: 'dropdown'
      }
    }
  ]
};