// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CoinMarketCapIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M19.2469 14.857C18.957 15.0536 18.5798 15.0781 18.265 14.9215C17.9035 14.7187 17.7071 14.2457 17.7071 13.6037V11.6286C17.7071 10.6795 17.3269 10.0068 16.6879 9.8225C15.6126 9.51226 14.8084 10.8116 14.4998 11.3L12.5954 14.3379V10.6304C12.5736 9.77643 12.2931 9.26346 11.757 9.10987C11.4048 9.00851 10.8749 9.04844 10.3606 9.8225L6.10295 16.5587C5.53568 15.4928 5.23958 14.3041 5.24581 13.1C5.24581 9.03922 8.53724 5.73718 12.5954 5.73718C16.6536 5.73718 19.9544 9.03922 19.9544 13.1V13.1215C19.9544 13.1215 19.9544 13.1368 19.9544 13.143C19.9949 13.9263 19.7362 14.5529 19.2469 14.857ZM21.6001 13.1V13.06C21.5658 8.11465 17.5388 4.09998 12.5954 4.09998C7.65205 4.09998 3.6001 8.13615 3.6001 13.1C3.6001 18.0638 7.63334 22.1 12.5954 22.1C14.8707 22.1 17.0588 21.2399 18.7107 19.6979C19.0443 19.3877 19.063 18.8716 18.7544 18.5399C18.4552 18.2143 17.9471 18.1897 17.6136 18.4846L17.6105 18.4877C14.6962 21.2123 10.0926 21.0925 7.32789 18.2205C7.25932 18.1498 7.19386 18.0792 7.12841 18.0054L10.9591 11.9327V14.7341C10.9591 16.0795 11.4889 16.5157 11.9315 16.6447C12.3741 16.7737 13.0567 16.6846 13.7674 15.545L15.8869 12.1662C15.9523 12.0587 16.0146 11.9635 16.0739 11.8836V13.6007C16.0739 14.86 16.585 15.8645 17.4858 16.3621C18.318 16.8044 19.3279 16.7645 20.1227 16.2577C21.1107 15.6249 21.65 14.4792 21.5939 13.1H21.6001Z" />
  </Icon>
);

export default CoinMarketCapIcon;
