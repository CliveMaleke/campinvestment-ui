// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const DeleteIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M13.3321 18.125H14.1679C14.2787 18.125 14.385 18.0806 14.4633 18.0014C14.5417 17.9223 14.5857 17.815 14.5857 17.7031V10.1094C14.5857 9.99749 14.5417 9.89018 14.4633 9.81106C14.385 9.73195 14.2787 9.6875 14.1679 9.6875H13.3321C13.2213 9.6875 13.115 9.73195 13.0367 9.81106C12.9583 9.89018 12.9143 9.99749 12.9143 10.1094V17.7031C12.9143 17.815 12.9583 17.9223 13.0367 18.0014C13.115 18.0806 13.2213 18.125 13.3321 18.125ZM19.0429 6.3125H16.1732L14.9893 4.31914C14.8407 4.06919 14.6305 3.86235 14.3792 3.7188C14.1279 3.57524 13.8441 3.49986 13.5553 3.5H10.0447C9.75603 3.49998 9.47233 3.57542 9.22116 3.71897C8.96999 3.86252 8.75992 4.06929 8.6114 4.31914L7.42678 6.3125H4.55714C4.40938 6.3125 4.26767 6.37176 4.16318 6.47725C4.0587 6.58274 4 6.72582 4 6.875V7.4375C4 7.58668 4.0587 7.72976 4.16318 7.83525C4.26767 7.94074 4.40938 8 4.55714 8H5.11429V19.8125C5.11429 20.2601 5.29038 20.6893 5.60384 21.0057C5.91729 21.3222 6.34242 21.5 6.78571 21.5H16.8143C17.2576 21.5 17.6827 21.3222 17.9962 21.0057C18.3096 20.6893 18.4857 20.2601 18.4857 19.8125V8H19.0429C19.1906 8 19.3323 7.94074 19.4368 7.83525C19.5413 7.72976 19.6 7.58668 19.6 7.4375V6.875C19.6 6.72582 19.5413 6.58274 19.4368 6.47725C19.3323 6.37176 19.1906 6.3125 19.0429 6.3125ZM9.98371 5.2898C10.0023 5.25851 10.0287 5.23264 10.0602 5.2147C10.0917 5.19677 10.1272 5.1874 10.1634 5.1875H13.4366C13.4727 5.18746 13.5082 5.19686 13.5396 5.21479C13.5711 5.23272 13.5973 5.25856 13.6159 5.2898L14.2239 6.3125H9.37608L9.98371 5.2898ZM16.8143 19.8125H6.78571V8H16.8143V19.8125ZM9.43214 18.125H10.2679C10.3787 18.125 10.485 18.0806 10.5633 18.0014C10.6417 17.9223 10.6857 17.815 10.6857 17.7031V10.1094C10.6857 9.99749 10.6417 9.89018 10.5633 9.81106C10.485 9.73195 10.3787 9.6875 10.2679 9.6875H9.43214C9.32132 9.6875 9.21504 9.73195 9.13667 9.81106C9.05831 9.89018 9.01429 9.99749 9.01429 10.1094V17.7031C9.01429 17.815 9.05831 17.9223 9.13667 18.0014C9.21504 18.0806 9.32132 18.125 9.43214 18.125Z" />
  </Icon>
);

export default DeleteIcon;
