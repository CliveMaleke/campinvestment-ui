export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Get Started',
        [
          'Introduction',
          'Install',
          'Design Concepts',
          'Platforms Support',
          `Versions`,
        ],
        'Documentation',
        [
          'Guidelines',
          ['Recommended Libraries', 'Design Resources', 'Page Speed'],
          'Core',
          ['Layout', 'Navigation', 'Colors', 'Typography', 'Communication'],
        ],
        'Components',
        [
          'Layout',
          ['Box', 'Container', 'Grid', 'Hidden'],

          'Inputs',
          ['Button', 'Checkbox', 'Datetime', 'Radio', 'Select', 'Slider', 'Switch', 'TextField'],

          'Navigation',
          ['Bottom Navigation', 'Breadcrumbs', 'Drawer', 'Menu', 'Stepper', 'Tabs'],

          'Surfaces',
          ['Accordion', 'Card', 'Paper'],

          'Feedback',
          ['Backdrop', 'Dialog', 'Progress', 'Snackbar'],

          'Data Display',
          [
            'Avatar',
            'Badge',
            'Chip',
            'Empty State',
            'Error',
            'Icons',
            'List',
            'Table',
            'Tooltip',
            'Typography',
          ],

          'Utils',
          ['No SSR', 'Popover'],

          'Lab',
          ['Alert', 'Autocomplete', 'Skeleton', 'Pagination'],
        ],
        'Templates',
        ['Login', 'Emails Template', 'Errors Page', 'Under Construction'],
      ],
    },
  },
}