import {Box, Text} from "@chakra-ui/react";
import Icon from "./Icon";

interface Props {
    title: string;
}

export function ErrorBox({title}: Props) {
    return (
        <Box
            maxW={'500px'}
            bg={'#FFF7F7'}
            display={'flex'}
            borderColor={'#FFD0D0'}
            borderRadius={'6px'}
            borderWidth={'1px'}
            marginBottom={'20px'}>
            <Box padding={'12px'}>
                <Icon/>
            </Box>
            <Text
                size={'14px'}
                lineHeight={'18.76px'}
                fontFamily={'Montserrat'}
                padding={'12px'}>
                {title}
            </Text>
        </Box>
    )
}
