import React, { useEffect, useState } from "react";
import * as Popover from '@radix-ui/react-popover';
import { styled } from "../../../stitches.config";
import { handleFetchCategories } from "./utils";
import List from "./List";
import Button from "./Button";

const Wrapper = styled('div', {
    display: 'none',
    justifyContent: 'center',
    position: 'relative',
    '@md': {
        display: 'flex',
    },
});

export default () => {
    const [categories, setCategories] = useState([]);
    const [isOpening, setOpen] = useState(false);
    const handleToggleMenu = () => { setOpen(!isOpening); };

    const handleClickOutside = (e) => {
        if (e.target.id !== "show-category-button" && e.target.id !== "show-category-button-text") setOpen(false);
    }

    useEffect(() => {
        handleFetchCategories(setCategories);
    }, []);

    return (
        <Wrapper>
            <Button onClick={handleToggleMenu} />
            <Popover.Root open={isOpening} defaultOpen={false}>
                <Popover.Anchor>
                    <Popover.Trigger />
                </Popover.Anchor>
                <Popover.Content onPointerDownOutside={handleClickOutside}>
                    <List onClick={() => { setOpen(false); }} {...{ categories }} side="left" />
                </Popover.Content>
            </Popover.Root>
        </Wrapper>
    );
}