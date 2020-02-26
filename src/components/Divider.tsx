import styled from 'styled-components';

const Divider = styled.div.attrs({
    className: 'WindowSplitter-Divider'
})`
    display: block;
    position: relative;
    min-width: 6px;
    width: 6px;
    cursor: ew-resize;

    :before {
        content: '';
        display: block;
        left: 2px;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        width: 1px;
    }
`;
export default Divider;
