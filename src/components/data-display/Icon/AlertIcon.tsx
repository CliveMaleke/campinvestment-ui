// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const AlertIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path
      fill-rule="evenodd"
      d="M21.775 18.61c.64 1.062-.164 2.39-1.444 2.39H3.67c-1.283 0-2.084-1.33-1.444-2.39l8.331-13.814c.642-1.062 2.248-1.06 2.888 0l8.33 13.814ZM12 15.754c-.882 0-1.597.684-1.597 1.527 0 .844.715 1.528 1.597 1.528s1.597-.684 1.597-1.528c0-.843-.715-1.527-1.597-1.527Zm-1.259-.974-.257-4.516a.407.407 0 0 1 .416-.42h2.2c.24 0 .43.192.416.42l-.257 4.516a.41.41 0 0 1-.416.376h-1.686a.409.409 0 0 1-.416-.377Z"
      clip-rule="evenodd"
    />
  </Icon>
);

export default AlertIcon;
