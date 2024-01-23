import React from "react";
import * as Popover from '@radix-ui/react-popover';
import List from "./List";
import Button from "./Button";
import { Wrapper } from "./index.styled-components";
import { useBusinessLogic } from "./index.hooks";

const CategoryList = () => {
    const { onToggleMenu, isOpening, setIsOpening, onClickOutside } = useBusinessLogic();

    return (
        <Wrapper>
            <Button onClick={onToggleMenu} />
            <Popover.Root open={isOpening} defaultOpen={false}>
                <Popover.Anchor>
                    <Popover.Trigger />
                </Popover.Anchor>
                <Popover.Content onPointerDownOutside={onClickOutside}>
                    <List onClick={() => { setIsOpening(false); }} />
                </Popover.Content>
            </Popover.Root>
        </Wrapper>
    );
}

export default CategoryList;