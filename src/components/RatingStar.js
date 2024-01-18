import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';
import { useMemo } from 'react';
import { styled } from "../stitches.config";

const Wrapper = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, auto)',
    color: '#ffc600'
});

const createStarComponents = (value) => {
    let components = [];

    for (let i = 0; i < value; i+=1) {
        components = [...components, <StarFilledIcon key={i} />]
    }

    for (let i = 0; i < (5 - value); i+=1) {
        components = [...components, <StarIcon key={5+i} />]
    }

    return components;
}

const RatingStar = ({ value }) => {
    const components = useMemo(() => createStarComponents(value), [value]);

    return (
        <Wrapper>
            {components}
        </Wrapper>
    )
}

export default RatingStar;