import * as React from "react"
import {
  ChakraProvider,
  Box
} from "@chakra-ui/react"
import theme from '../src/theme'
import {useState} from "react";
import {ErrorBox, Header, MainTable, SearchButton, TextInput} from "./components";
import {Data} from "./models/data";

function fetchData(searchArticles: string[]) {
  return fetch('https://germsp.ru/test-search-products', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer Vdhgor7ChDlFoNm7JezbOpwicH2RRT2s',
    },
    body: JSON.stringify({
      searchArticles
    })
  }).then((response) => response.json())
}

export function App() {

  let [value, setValue] = useState<string>('')
  let [data, setData] = useState<Data[]>([])
  let [error, setError] = useState<boolean>(false)

  let handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  let handleClick = () => {
    setError(false)
    fetchData(value.split("\n"))
        .then((data) => setData(data))
        .catch(() => {setError(true)})
  }

  return (
    <ChakraProvider theme={theme}>
      <Box
          bg={'#f5f4f6'}
          display={'flex'}
          flexDirection={'column'}
          height={'100vh'}
          padding={'60px'}
          textAlign="left">
        <Header title={'Товары'}/>
        {error && <ErrorBox title={'Внутренняя ошибка сервера. Попробуйте снова.'}/>}
        <TextInput value={value} onChange={handleInputChange}/>
        <SearchButton title={'Поиск'} onClick={handleClick}/>
        {data && data.length !== 0 && <MainTable data={data}/>}
      </Box>
    </ChakraProvider>
  )
}
