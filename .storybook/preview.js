/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: 'light',
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    layout: "fullscreen",
    status: {
      statuses: {
        //? add custom statuses.
      },
    },
  },
};

export default preview;
