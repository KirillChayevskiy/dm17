import {Button} from "@chakra-ui/react";
import * as React from "react";

interface Props {
    title: string;
    onClick: () => void;
}

export function SearchButton({title, onClick}: Props) {
    return (
        <Button
            colorScheme="brand"
            height={'42px'}
            width={'100px'}
            fontSize={'16px'}
            padding={'10px'}
            onClick={onClick}>
            {title}
        </Button>
    )
}
