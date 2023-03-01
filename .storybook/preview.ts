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
          'Inputs',
          ['Button', 'Checkbox', 'Datetime', 'Radio', 'Select', 'Slider', 'Switch', 'TextField'],

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

          'Feedback',
          ['Backdrop', 'Dialog', 'Progress', 'Snackbar', 'Alert'],

          'Surfaces',
          ['Accordion', 'Card', 'Paper'],

          'Navigation',
          ['Bottom Navigation', 'Breadcrumbs', 'Drawer', 'Menu', 'Stepper', 'Tabs'],

          'Layout',
          ['Box', 'Container', 'Grid', 'Hidden'],

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