import { addDecorator } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

export const parameters = {
  backgrounds: { disable: true },
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
          'Installation',
          'Design Concepts',
          'Platforms Support',
          'Versions',
          'Credits',
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
          ['Backdrop', 'Dialog', 'Progress', 'Snackbar', 'Alert'],

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
          ['Autocomplete', 'Skeleton', 'Pagination'],
        ],
        'UI Toolkit',
        ['Login', 'Emails Template', 'Errors Page', 'Under Construction'],
      ],
    },
  },
}

addDecorator(withPerformance);