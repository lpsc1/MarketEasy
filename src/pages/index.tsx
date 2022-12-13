import { useRouter } from 'next/router'
import React from 'react'
import { Header } from '../components/header'
import * as S from './styles'
import {BsTools} from 'react-icons/bs'

export default function Home() {
  const router = useRouter()
  return (
    <S.Container>
     <Header back={false}/>
     <S.Content>
      <S.Text style={{marginBottom: '10vh', fontWeight: 'bold', border: 'none'}}>Selecionar estilo: </S.Text>
        <S.OptionsBox >
        <S.Box onClick={() => router.push('./list')}>
          <img src='/list.png' className='img'/>
        </S.Box>
        <S.Box>
        <S.Text className='text'>Em breve... <BsTools /></S.Text>
        </S.Box>
        </S.OptionsBox>
        </S.Content>
        <S.Footer>
          <S.Text>by</S.Text><S.Text className='footer'>Lucas Carvalho</S.Text>
        </S.Footer>
      
    </S.Container>
  )
}
