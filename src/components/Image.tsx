import styled, { css } from 'styled-components';
import { useState } from 'react';

const circle = css`
  border-radius: 50%;
`;

const rounded = css`
  border-radius: 5px;
`;

const cover = css`
  object-fit: cover;
`;

const Image = styled.img<{ circle?: boolean; rounded?: boolean; cover?: boolean }>`
  ${(props) => props.circle && circle};
  ${(props) => props.rounded && rounded};
  ${(props) => props.cover && cover};
`;

export const FallbackImage = ({ srcList, ...props }) => {
  const [srcIndex, setSrcIndex] = useState(0);

  return srcList[srcIndex] ? (
    <Image
      {...props}
      src={srcList[srcIndex]}
      onError={(e) => {
        setSrcIndex(srcIndex + 1);
      }}
    />
  ) : null;
};

export default Image;
