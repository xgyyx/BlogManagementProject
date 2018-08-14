import styled from 'styled-components';

import {Layout, Button} from 'antd';
const {Sider} = Layout;

export const NavBarWrapper = styled(Sider)`
  overflow: hidden;
  box-shadow: 2px 0 2px -1px rgba(0, 0, 0, .2);
  background: #4BA6EF !important;
  .MenuWrapper {
    background: #4BA6EF;
  }
  .ant-menu-item-selected {
    background: #3B86CB !important;
  }
`;

export const LogoWrapper = styled.div`
  background: #4BA6EF;
  color: #fff;
  height: 64px;
  line-height: 64px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: 40px;
  width: 100%;
`;

export const CollapsedButton = styled(Button)`
  background: #4BA6EF !important;
  border: none !important;
`;