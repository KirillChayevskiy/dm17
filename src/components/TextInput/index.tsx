import {Textarea} from "@chakra-ui/react";
import * as React from "react";

interface Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextInput({onChange}: Props) {
    return (
        <Textarea
            bg="white"
            placeholder='Для поиска введите один или несколько артукулов в столбик'
            marginBottom={'12px'}
            maxW={'500px'}
            minH={'103px'}
            fontSize={'14px'}
            fontWeight={400}
            onChange={onChange}
        />
    )
}
