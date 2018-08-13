import styled from 'styled-components';
import {Layout, Breadcrumb} from 'antd';

const {Content} = Layout;

export const ContentWrapper = styled(Content)`
  margin: 0 16px;
`;

export const BreadcrumbWrapper = styled(Breadcrumb)`
  margin: 16px 0;
`;

export const MainContentWrapper = styled.div`
  padding: 24px;
  background: #fff;
  height: 100%;
`;