import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const InputIcon = styled(Icon)``

const Input = styled.input`
  border: none;
  padding-left: 1.5em;
  border-bottom: 1px solid ${COLORS.black};
  font-size: 14px;
  outline-offset: 2px;
  color: inherit;
  font-weight: 700;
  display: inline-block;
  width: ${(p) => p.width + 'px'};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const SmallWrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  ${InputIcon} {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;

    :hover & {
      --stroke-width: 2px;
    }
  }
`;

const LargeWrapper = styled(SmallWrapper)`
  ${Input} {
    font-size: 18px;
  }
`

const sizes = {
  small: SmallWrapper,
  large: LargeWrapper,
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const Wrapper = sizes[size];

  return <>
    <VisuallyHidden>{label}</VisuallyHidden>
    <Wrapper>
      <InputIcon strokeWidth={2} size={size === 'small' ? 12 : 16 } id={typeof icon !== undefined ? icon : 'search'} />
      <Input type="text" width={width} size={size} placeholder={placeholder} />
    </Wrapper>
  </>;
};

export default IconInput;
