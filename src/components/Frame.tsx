import React from 'react';
import styled from 'styled-components';

import FrameInner from './FrameInner';
import FrameContainer from './FrameContainer';

type FrameProps = {
    container?: boolean;
};

const Frame: React.FC<FrameProps> = ({ container, ...rest }) => {
    const Component = container ? FrameContainer : FrameInner;

    return <Component {...rest} />;
};

export default styled(Frame)``;
