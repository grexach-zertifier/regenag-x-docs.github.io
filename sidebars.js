// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Manual sidebar for Documentation tab
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'about',
    },
      {
          type: 'doc',
          id: 'agriculture-landing',
      },
    {
      type: 'doc',
      id: 'governance',
    },
    {
      type: 'category',
      label: 'Buenas prácticas',
      items: [
        {
          type: 'doc',
          id: 'use-cases',
        },
        {
          type: 'doc',
          id: 'interoperability',
        },
      ],
      collapsed: false,
    },
    {
      type: 'doc',
      id: 'verifiable-credentials',
    },
    {
      type: 'doc',
      id: 'ocean-protocol-market',
    },
    {
      type: 'doc',
      id: 'gaiax-standards',
    },
    {
      type: 'doc',
      id: 'ontologies',
    },
    {
      type: 'doc',
      id: 'compute-to-data',
    },
    {
      type: 'doc',
      id: 'market-policy',
    }
  ],
};

export default sidebars;
