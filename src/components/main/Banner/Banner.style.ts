import { flex, font, lineHeight, mediaQuery } from '@Styles/mixin.style';
import styled from 'styled-components';

const BannerWrapper = styled.div<{ even: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.grey50};
  border-radius: 20px;
  padding: 28px 36px 26px;
  margin-right: ${({ even }) => (even ? '24px' : '0')};
  ${mediaQuery(
    'tablet1024',
    `
     padding: 28px 32px;
    `,
  )};
  ${mediaQuery(
    'mobile',
    `
     margin-right: 0;
     padding: 24px 20px 23px;
    `,
  )};
`;

const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flex('space-between', 'center')};
  ${mediaQuery(
    'tablet1024',
    `
     ${flex('start', 'start')};
     flex-direction: column;
    `,
  )};
  ${mediaQuery(
    'mobile',
    `
     ${flex('start', 'start')};
     flex-direction: column;
    `,
  )};
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.color.textBlackMedium};
  letter-spacing: -0.2px;
  ${font('body16', 'bold')}
  ${lineHeight(16, 26)};
  ${mediaQuery(
    'mobile',
    `
    ${font('caption12', 'bold')};
    ${lineHeight(12, 20)};
    letter-spacing: -0.1px;
    `,
  )};
`;

const Title = styled.div`
  white-space: pre-wrap;
  color: ${({ theme }) => theme.color.textBlackHigh};
  letter-spacing: -0.4px;
  margin-top: 8px;

  ${font('title22', 'bold')}
  ${lineHeight(22, 36)};
  max-width: 90%;

  ${mediaQuery(
    'tablet1024',
    `
    max-width: 100%;
    margin-bottom: 20px;
  `,
  )}

  ${mediaQuery(
    'mobile',
    `
    ${font('mobile18', 'bold')};
    ${lineHeight(18, 26)};
    letter-spacing: -0.2px;
    margin-top: 4px;
    margin-bottom: 16px;
  `,
  )}
`;

export { BannerWrapper, ContentsWrapper, Tag, Title };
