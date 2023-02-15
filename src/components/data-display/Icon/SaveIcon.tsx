// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const SaveIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M16.1704 3.5C16.3492 3.5 16.5169 3.57313 16.6361 3.69238L20.8076 7.86387C20.9314 7.98763 21 8.15413 21 8.32963V20.8419C21 21.0164 20.9307 21.1838 20.8072 21.3072C20.6838 21.4307 20.5164 21.5 20.3419 21.5H3.65812C3.48358 21.5 3.31618 21.4307 3.19276 21.3072C3.06934 21.1838 3 21.0164 3 20.8419V4.15812C3 3.79475 3.29475 3.5 3.65812 3.5H16.1704ZM17.0782 14.642H6.92175V20.1826H17.0782V14.642ZM7.17037 4.81737H4.31737V20.1826H5.60438V13.985C5.60438 13.6216 5.89913 13.3258 6.26363 13.3258H17.7364C18.1009 13.3258 18.3956 13.6216 18.3956 13.985V20.1838H19.6826V8.60187L16.8296 5.75V9.3725C16.8298 9.45912 16.8128 9.54491 16.7797 9.62496C16.7467 9.70501 16.6981 9.77774 16.6369 9.83899C16.5756 9.90024 16.5029 9.94879 16.4228 9.98187C16.3428 10.0149 16.257 10.0319 16.1704 10.0318H7.82963C7.74301 10.0319 7.65722 10.0149 7.57717 9.98187C7.49711 9.94879 7.42438 9.90024 7.36313 9.83899C7.30189 9.77774 7.25333 9.70501 7.22026 9.62496C7.18718 9.54491 7.17023 9.45912 7.17037 9.3725V4.81737ZM15.5122 4.81737H8.48775V8.71325H15.5122V4.81625V4.81737ZM13.881 5.43387C14.2455 5.43387 14.5403 5.72863 14.5403 6.09313V7.4375C14.5403 7.6122 14.4709 7.77973 14.3473 7.90326C14.2238 8.02679 14.0563 8.09619 13.8816 8.09619C13.7069 8.09619 13.5393 8.02679 13.4158 7.90326C13.2923 7.77973 13.2229 7.6122 13.2229 7.4375V6.09313C13.2229 5.72863 13.5176 5.43387 13.881 5.43387Z" />
  </Icon>
);

export default SaveIcon;