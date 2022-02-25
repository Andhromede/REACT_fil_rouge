import React from 'react';
import { useSpring, animated } from 'react-spring';
require('./css/textScroller.css');


const TextScroller = (props) => {
    const {text} = props;

    const scrolling = useSpring({
        from: { transform: "translate(200%,0)" },
        to: { transform: "translate(-200%,0)" },
        config: { duration: 20000 },
        loop: true,
    });

    return (
        <div className='scroller'>
            <animated.div style={scrolling}>{text}</animated.div>
        </div>
    );
};

export default TextScroller;