// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const EditIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path
      fill-rule="evenodd"
      d="M21.2 3.301a2.734 2.734 0 0 0-3.868 0L7.923 12.71a.721.721 0 0 0-.172.28l-1.428 4.285a.714.714 0 0 0 .903.904l4.285-1.429a.714.714 0 0 0 .28-.172l9.408-9.41a2.734 2.734 0 0 0 0-3.866Zm-1.01 2.858-9.287 9.285-2.774.927.924-2.771 9.289-9.286a1.306 1.306 0 0 1 2.23.921 1.3 1.3 0 0 1-.383.924Z"
      clip-rule="evenodd"
    />
    <path d="M17.714 13.214a.714.714 0 1 1 1.429 0v7.143c0 1.184-.96 2.143-2.143 2.143H4.143A2.143 2.143 0 0 1 2 20.357V6.071c0-1.183.96-2.142 2.143-2.142h8.571a.714.714 0 1 1 0 1.428H4.143a.714.714 0 0 0-.715.714v14.286c0 .395.32.714.715.714H17c.394 0 .714-.32.714-.714v-7.143Z" />
  </Icon>
);

export default EditIcon;
