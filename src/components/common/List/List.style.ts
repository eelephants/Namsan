import { font, mediaQuery } from '@Styles/mixin.style';
import styled from 'styled-components';

export const List = styled.ul`
  margin: 0px;
  padding: 0px;
`;

export const ListItem = styled.li`
  list-style-type: none;
  margin-bottom: 2px;
`;

export const HR = styled.hr`
  border: 0;
  height: 2px;
  background: ${({ theme }) => theme.color.dividerBlack};
  margin-bottom: 15px;

  ${mediaQuery(
    'mobile',
    `
    height: 1px;
    margin-bottom: 13px;
  `,
  )}
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover > a {
    color: ${({ theme }) => theme.color.blue100};
    background-color: transparent;
  }
`;
export const Anchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.textBlackHigh};
  height: auto;
  padding: 13px 12px;

  font-size: 20px;

  display: block;
  &:hover {
    background-color: ${({ theme }) => theme.color.grey100};
  }

  ${mediaQuery(
    'mobile',
    `
    ${font('mobile16', 'regular')}
    padding-left: 0px;
    padding-bottom: 8px;
    padding-top: 8px;
  `,
  )}
`;

export const MainAnchor = styled(Anchor)`
  line-height: 38px;
  padding-bottom: 9px;

  ${font('title24', 'bold')}
  ${mediaQuery(
    'mobile',
    `
    padding-left: 0px;
    ${font('mobile18', 'bold')}
  `,
  )}
`;

export const Wrapper = styled.div`
  /* margin: 12px; */
`;
