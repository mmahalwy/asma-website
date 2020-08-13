import React from 'react';
import styled, { css } from 'styled-components';

const middleAlign = css`
  align-items: center;
`;

const FlexRowBase = styled.div<{ middleAlign?: boolean; fullHeight?: boolean }>`
  display: flex;
  ${(props) => props.middleAlign && middleAlign};
  ${(props) => props.fullHeight && 'height: 100%;'}
`;

const FlexRowBefore = styled.div<{ middleAlign?: boolean; noPadding?: boolean }>`
  padding-right: ${(props) => (props.noPadding ? 0 : `${props.theme.base.px * 1}px`)};
  flex-shrink: 0;
  display: flex;

  ${(props) => props.middleAlign && middleAlign};
`;

const FlexRowAfter = styled.div<{ middleAlign?: boolean; noPadding?: boolean }>`
  padding-left: ${(props) => props.theme.base.px * 1}px;
  flex-shrink: 0;
  display: flex;

  ${(props) => props.middleAlign && middleAlign};
`;

const middleAlignContent = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FlexRowContent = styled.div<{ middleAlign?: boolean }>`
  flex: 1;
  max-width: 100%;

  ${(props) => props.middleAlign && middleAlignContent};
`;

export type FlexRowProps = {
  after?: React.ReactNode;
  baseline?: boolean;
  beforeMiddleAlign?: boolean;
  afterMiddleAlign?: boolean;
  before?: React.ReactNode;
  children: NonNullable<React.ReactNode>;
  compact?: boolean;
  inline?: boolean;
  maxHeight?: number | string;
  middleAlign?: boolean;
  noPadding?: boolean;
  minHeight?: number | string;
  spacious?: boolean;
  topline?: boolean;
  truncated?: boolean;
  fullHeight?: boolean;
};

const FlexRow = ({
  after,
  afterMiddleAlign,
  beforeMiddleAlign,
  baseline,
  before,
  children,
  compact,
  inline,
  maxHeight,
  middleAlign,
  noPadding,
  minHeight,
  spacious,
  topline,
  truncated,
  fullHeight,
}: FlexRowProps) => {
  return (
    <FlexRowBase fullHeight={fullHeight}>
      {before && (
        <FlexRowBefore noPadding={noPadding} middleAlign={beforeMiddleAlign}>
          {before}
        </FlexRowBefore>
      )}

      <FlexRowContent middleAlign={middleAlign}>{children}</FlexRowContent>

      {after && (
        <FlexRowAfter noPadding={noPadding} middleAlign={afterMiddleAlign}>
          {after}
        </FlexRowAfter>
      )}
    </FlexRowBase>
  );
};

export default FlexRow;
