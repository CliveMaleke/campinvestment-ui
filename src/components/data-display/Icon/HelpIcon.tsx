// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const HelpIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M20.0552 12.5002V11.2039C20.0563 10.1918 19.8468 9.18945 19.4387 8.25424C19.0306 7.31902 18.432 6.4693 17.677 5.75371C16.9221 5.03812 16.0257 4.47073 15.0392 4.084C14.0527 3.69728 12.9954 3.49883 11.9279 3.50001C7.46976 3.50001 3.80187 6.97735 3.80187 11.2729V12.568C3.11631 12.8704 2.53577 13.3517 2.12813 13.9555C1.7205 14.5593 1.50263 15.2607 1.5 15.9775C1.49982 16.488 1.60574 16.9934 1.81169 17.465C2.01764 17.9366 2.31959 18.3651 2.70029 18.7261C3.08099 19.087 3.53298 19.3732 4.03042 19.5685C4.52786 19.7638 5.06101 19.8642 5.5994 19.864C5.81516 19.864 6.10239 19.795 6.24668 19.6594C6.46244 19.795 6.67819 19.864 6.89395 19.864H7.32547C7.82845 19.864 8.25997 19.5904 8.54855 19.1813C8.62002 18.9768 8.69149 18.7722 8.69149 18.5677V13.3862C8.69149 12.7047 8.11703 12.0911 7.32547 12.0911H6.96542C6.74966 12.0911 6.46244 12.1589 6.31815 12.2956C6.03092 12.2266 5.81516 12.1589 5.5994 12.1589H5.16789V11.2729C5.16789 7.72652 8.1885 4.86282 12.0007 4.86282C15.8115 4.86282 18.7606 7.72652 18.7606 11.2729V12.1589H18.3291C18.1134 12.1589 17.8261 12.2266 17.6819 12.3634C17.4926 12.2352 17.2671 12.164 17.0346 12.1589H16.6031C15.8843 12.1589 15.237 12.7047 15.237 13.4539V18.6367C15.237 18.8412 15.3085 19.0458 15.38 19.2503C15.5957 19.6594 16.0273 19.9318 16.6031 19.9318H17.0346C17.1789 19.9318 17.3218 19.9318 17.4661 19.864C17.3946 20.2731 17.2503 20.75 16.8188 21.1591C16.3873 21.5682 15.8115 21.7727 15.0213 21.7727C14.9362 21.7724 14.8519 21.788 14.7732 21.8187C14.6945 21.8494 14.623 21.8946 14.5628 21.9517C14.5026 22.0087 14.455 22.0765 14.4226 22.1511C14.3902 22.2257 14.3737 22.3057 14.374 22.3864C14.374 22.7277 14.6612 23 15.0213 23C16.1715 23 17.106 22.6587 17.8261 21.9773C18.5449 21.2958 18.7606 20.4086 18.8321 19.864C19.8344 19.7726 20.7649 19.3311 21.4429 18.6253C22.1208 17.9195 22.4976 16.9999 22.5 16.0453C22.3571 14.4767 21.4212 13.1816 20.0552 12.5002ZM6.96542 13.3862H7.39694V18.4999H6.96542V13.3862ZM5.23936 13.4539H5.52793V18.5677C5.16904 18.5678 4.81364 18.501 4.48201 18.3709C4.15039 18.2408 3.84906 18.05 3.59522 17.8095C3.34138 17.569 3.14002 17.2834 3.00264 16.969C2.86526 16.6547 2.79455 16.3178 2.79455 15.9775C2.79455 15.0903 3.22606 14.3411 3.94481 13.863C4.37632 13.6585 4.80784 13.5229 5.23936 13.4539ZM16.8903 18.5677H16.4588V13.4539H16.8903V18.5677ZM18.2577 18.5677V13.4539H18.5449C19.0479 13.5229 19.4794 13.6585 19.8394 13.932C20.5582 14.4089 20.9897 15.1593 20.9897 16.0453C20.9897 17.4094 19.768 18.5677 18.2577 18.5677Z" />
  </Icon>
);

export default HelpIcon;