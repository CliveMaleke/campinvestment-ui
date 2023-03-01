// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const TwitterIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M21.911 6.422a8.387 8.387 0 0 1-2.024.56c.326-.054.805-.623.996-.853.29-.348.51-.744.651-1.17 0-.031.033-.076 0-.099a.114.114 0 0 0-.107 0c-.756.397-1.561.7-2.395.903a.173.173 0 0 1-.168-.04 2.302 2.302 0 0 0-.21-.213 4.382 4.382 0 0 0-1.144-.718 4.134 4.134 0 0 0-1.781-.284c-.59.036-1.167.19-1.694.451a4.36 4.36 0 0 0-1.34 1.102 4.125 4.125 0 0 0-.814 1.58 4.212 4.212 0 0 0-.042 1.67c0 .095 0 .109-.083.095C8.439 8.932 5.717 7.79 3.494 5.34c-.098-.109-.149-.109-.228 0-.968 1.426-.498 3.684.712 4.799.162.149.33.293.507.428a4.25 4.25 0 0 1-1.591-.428c-.093-.06-.144-.027-.15.08a2.842 2.842 0 0 0 0 .452c.098.72.39 1.402.848 1.977A4.213 4.213 0 0 0 5.35 13.94c.17.07.345.123.526.158a4.901 4.901 0 0 1-1.559.045c-.111-.022-.153.036-.111.14.683 1.806 2.167 2.357 3.256 2.664.149.022.298.022.465.058l-.028.028c-.32.568-1.619.952-2.214 1.15a8.184 8.184 0 0 1-3.396.425c-.181-.027-.223-.022-.27 0-.046.023 0 .072.051.118a11.329 11.329 0 0 0 2.977 1.31c4.085 1.091 8.681.288 11.747-2.67 2.41-2.32 3.256-5.52 3.256-8.726 0-.122.154-.194.242-.258a7.86 7.86 0 0 0 1.596-1.616.465.465 0 0 0 .111-.325c0-.068 0-.054-.088-.018Z" />
  </Icon>
);

export default TwitterIcon;