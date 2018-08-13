import styled from 'styled-components';

import {Layout} from 'antd';

const {Header} = Layout;

export const HeaderWrapper = styled(Header)`
  padding: 0;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, .2);
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #3B86CB;
`;