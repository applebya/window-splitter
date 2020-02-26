import React from 'react';
import styled from 'styled-components';

import FrameInner from './FrameInner';
import FrameContainer from './FrameContainer';

const Frame: React.FC = ({ container, ...rest }) => {
    const Component = container ? FrameContainer : FrameInner;

    return <Component {...rest} />;
};

export default styled(Frame)``;
