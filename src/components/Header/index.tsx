import {Heading} from "@chakra-ui/react";

interface Props {
    title: string;
}

export function Header({title}: Props) {
    return (
        <Heading
            fontSize={'32px'}
            fontWeight={600}
            marginBottom={'20px'}
            lineHeight={'51.55px'}>
            {title}
        </Heading>
    )
}
