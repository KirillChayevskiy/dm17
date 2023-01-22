import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Box,
    Td,
} from '@chakra-ui/react'
import {Data} from "../../models/data";



interface Props {
    data: Data[]
}

export function MainTable({data}: Props) {
    return (
        <Box height={'100%'} overflowY="auto" position="relative" borderRadius={'6px'} marginTop={'40px'}>
            <Table>
                <Thead position="sticky" top="0" zIndex={1} bg={'white'} fontWeight={600}>
                    <Tr>
                        <Th>№</Th>
                        <Th>ID</Th>
                        <Th>Артикул</Th>
                        <Th>Название</Th>
                        <Th>Бренд</Th>
                        <Th>Цена, RUB</Th>
                        <Th>Количество</Th>
                    </Tr>
                </Thead>
                <Tbody bg={'white'} fontSize={'14px'}>
                    {data.map((item: Data, index: number) => (
                        <Tr key={item.id}>
                            <Td>{index+1}</Td>
                            <Td>{item.id}</Td>
                            <Td>{item.article}</Td>
                            <Td>{item.name}</Td>
                            <Td>{item.brand?.name}</Td>
                            <Td>{item.price}</Td>
                            <Td>{item.quantity}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
}
