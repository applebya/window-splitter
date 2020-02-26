import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import Divider from './Divider';

type WrapperProps = {
    widthPercent: number | null;
};

const Wrapper = styled.div.attrs({
    className: 'WindowSplitter-Frame'
})<WrapperProps>`
    display: flex;
    align-items: stretch;
    border: 1px solid rgba(0, 0, 0, 0.5);

    > section {
        flex: 1;

        ${p =>
            p.widthPercent &&
            css`
                :first-child {
                    flex: none;
                    width: ${p.widthPercent}%;
                }
            `}
    }
`;

type PositionState = {
    width: number | null;
    left: number | null;
};

// Custom hook to get the frame container's width & left positioning
const useWrapperPosition = (): [
    React.MutableRefObject<HTMLDivElement>,
    number | null,
    number | null
] => {
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
    const [state, setState] = useState<PositionState>({
        width: null,
        left: null
    });

    useEffect(() => {
        if (ref && ref.current) {
            const { width, left } = ref.current.getBoundingClientRect();

            setState({
                width,
                left
            });
        }
    }, [ref]);

    return [ref, state.width, state.left];
};

const FrameContainer: React.FC = props => {
    const { children, ...rest } = props;

    if (!(children instanceof Array) || children.length < 2) {
        throw new Error('<FrameContainer/> must contain 2 <Frame/> children');
    }

    const [widthPercent, setWidthPercent] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [wrapperRef, width, left] = useWrapperPosition();

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleMouseMove = useCallback(
        ({ clientX }) => {
            if (!left || !width) return;

            setWidthPercent(((clientX - left) / width) * 100);
        },
        [width, left]
    );

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
    }, [isDragging, handleMouseMove, handleMouseUp]);

    return (
        <Wrapper ref={wrapperRef} widthPercent={widthPercent} {...rest}>
            {children[0]}
            <Divider onMouseDown={handleMouseDown} />
            {children[1]}
        </Wrapper>
    );
};

export default FrameContainer;
