/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const BaseProgressWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
`;

const LargeProgressBar = styled(BaseProgressWrapper)`
  height: 24px;
  padding: 4px;
  border-radius: 8px;
`;

const MediumProgressBar = styled(BaseProgressWrapper)`
  height: 12px;
  border-radius: 4px;
`;

const SmallProgressBar = styled(BaseProgressWrapper)`
  border-radius: 4px;
  height: 8px;
`;


const BarContainer = styled.div`
  border-radius: 4px;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${p => p.value}%;
`;

const ProgressBar = ({ value, size }) => {
  const sizes = {
    large: LargeProgressBar,
    medium: MediumProgressBar,
    small: SmallProgressBar,
  };
  const BarWrapper = sizes[size] ? sizes[size] : sizes.medium;
  
  return <BarWrapper>
    <BarContainer>
      <Bar value={value} />
    </BarContainer>
  </BarWrapper>;
};

export default ProgressBar;
