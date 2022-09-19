import React, { CSSProperties, FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Search, AtSign, ChevronDown } from 'react-feather';

interface IIcon extends HTMLAttributes<HTMLDivElement> {
  id: string;
  size: number;
  strokeWidth: number;
}

const icons: any = {
  search: Search,
  'at-sign': AtSign,
  'chevron-down': ChevronDown,
};

const Icon: FC<IIcon> = ({ id, size, strokeWidth = 1, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper
      style={
        {
          '--size': size + 'px',
          '--stroke-width': strokeWidth + 'px',
        } as CSSProperties
      }
      {...delegated}
    >
      <Component color="currentColor" size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);
  & > svg {
    display: block;
    stroke-width: var(--stroke-width);
  }
`;

export default Icon;
