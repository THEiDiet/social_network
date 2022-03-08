// const {addDecorator} = require("@storybook/react");
// const {StoryRouter} = require("storybook-react-router");
// addDecorator(StoryRouter({}))
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  // staticDirs: ['../public', '../static', { from: '../foo/assets', to: '/assets' }],
}
