// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const RedditIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path
      d="M12 22.5c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
    />
    <path
      fill="#fff"
      d="M18.67 12.5a1.464 1.464 0 0 1-.81 1.33 2.682 2.682 0 0 1 0 .44c0 2.24-2.61 4.06-5.83 4.06S6.2 16.51 6.2 14.27a2.672 2.672 0 0 1 0-.44 1.461 1.461 0 1 1 1.61-2.39 7.165 7.165 0 0 1 2.868-1.139 7.135 7.135 0 0 1 1.032-.09l.74-3.47a.308.308 0 0 1 .37-.24l2.45.49a1 1 0 1 1-.13.61L13 7.15l-.65 3.12a7.122 7.122 0 0 1 3.85 1.23 1.458 1.458 0 0 1 2.206.215c.162.23.254.503.264.784Zm-9.924 1.383a1.001 1.001 0 1 0 1.849-.768 1.001 1.001 0 0 0-1.85.768Zm5.727 2.4a.27.27 0 0 0-.185-.463.327.327 0 0 0-.198.07 3.277 3.277 0 0 1-2.09.61 3.263 3.263 0 0 1-2.08-.63.27.27 0 0 0-.38.38 3.843 3.843 0 0 0 2.47.77 3.862 3.862 0 0 0 1.912-.42c.195-.1.382-.217.558-.35l-.007.034Zm-.183-1.703a1.002 1.002 0 0 0 1.01-1.04 1 1 0 1 0-1 1l-.01.04Z"
    />
  </Icon>
);

export default RedditIcon;
