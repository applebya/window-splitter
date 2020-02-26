import React from 'react';
import styled from 'styled-components';

import Frame from './components/Frame';

const Wrapper = styled.div`
    h1,
    h2 {
        text-align: center;
    }
`;

const ConstrainedFrame = styled(Frame)`
    width: 75%;
    margin: 0px auto;

    ${Frame}:last-child {
        color: red;
    }
`;

function App() {
    return (
        <Wrapper>
            <h1>Window Splitter Demo</h1>

            <br />
            <br />

            <h2>Full-screen window frames</h2>
            <Frame container>
                <Frame>
                    Sink me square-rigged sutler Jack Ketch rum avast gunwalls
                    Plate Fleet long clothes marooned barkadeer. Take a caulk
                    ballast Letter of Marque case shot black spot hogshead
                    scallywag haul wind draft hornswaggle bilged on her anchor.
                    Parley clipper port lookout lugsail ho bring a spring upon
                    her cable Cat o'nine tails landlubber or just lubber
                    coxswain aye. Cable booty code of conduct reef broadside
                    bilge rat brigantine nipperkin Arr fire ship port. Keelhaul
                    belaying pin handsomely wherry run a rig crack Jennys tea
                    cup coffer brigantine fire in the hole provost bucko. Tack
                    execution dock rigging Chain Shot Letter of Marque fire in
                    the hole galleon Plate Fleet strike colors draft grog.
                </Frame>
                <Frame>
                    Killick spike reef sails brigantine hang the jib Buccaneer
                    American Main jury mast mizzen provost ho. Carouser black
                    jack swing the lead fore gunwalls pink sheet hulk quarter
                    killick booty. Sea Legs hardtack yo-ho-ho lateen sail
                    marooned execution dock coffer lookout furl scurvy American
                    Main. Hearties smartly broadside measured fer yer chains
                    Pirate Round hornswaggle pink Plate Fleet dance the hempen
                    jig bilged on her anchor swing the lead. Brig booty clap of
                    thunder Barbary Coast hands gangplank Chain Shot snow Plate
                    Fleet splice the main brace gabion. Jack reef barkadeer
                    maroon hornswaggle dead men tell no tales code of conduct
                    Buccaneer hempen halter scuttle spirits.
                </Frame>
            </Frame>

            <br />
            <br />

            <h2>Constrained window frames</h2>
            <ConstrainedFrame container>
                <Frame>
                    Hearties smartly broadside measured fer yer chains Pirate
                    Round hornswaggle pink Plate Fleet dance the hempen jig
                    bilged on her anchor swing the lead. Jack reef barkadeer
                    maroon hornswaggle dead men tell no tales code of conduct
                    Buccaneer hempen halter scuttle spirits.
                </Frame>
                <Frame>
                    Hearties smartly broadside measured fer yer chains Pirate
                    Round hornswaggle pink Plate Fleet dance the hempen jig
                    bilged on her anchor swing the lead. Sea Legs hardtack
                    yo-ho-ho lateen sail marooned execution dock coffer lookout
                    furl scurvy American Main. Hearties smartly broadside
                    measured fer yer chains Pirate Round hornswaggle pink Plate
                    Fleet dance the hempen jig bilged on her anchor swing the
                    lead.
                </Frame>
            </ConstrainedFrame>
        </Wrapper>
    );
}

export default App;
