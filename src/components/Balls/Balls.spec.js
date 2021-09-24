import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Balls from './Balls'

// Mocks
import { profile } from '../../mocks/profile.json';
import profileSuccess from '../../mocks/profileSuccess.json';
import esferas from '../../mocks/esferas.json';
import esferasSuccess from '../../mocks/esferasSuccess.json';

it('Renderizar quando há problemas com a renderização ds esferas', () => {
  const { getByText } = render(<Balls balls={{}} profile={{}} />)
  expect(getByText('Houve algum problema na busca das esferas').toBeTruthy)
})

it('Renderizar filtro queryAllByText as esferas encontradas e não encontradas, quando existem esferas encontradas e não encontradas', () => {
  const { getByText, queryAllByText } = render(<Balls balls={esferas.balls} profile={profile} />)
  const filter = getByText('Todas as esferas')

  fireEvent.click(filter)
  fireEvent.click(filter)

  const found = queryAllByText('Encontrada')
  const notFound = queryAllByText('Não encontrada')

  expect(found.length).toBe(4)
  expect(notFound.length).toBe(3)
})

it('Renderizar filtro todas as esferas encontradas e não encontradas, quando existem apenas esferas encontradas', () => {
  const { getByText, queryAllByText } = render(<Balls balls={esferasSuccess.balls} profile={profileSuccess.profile} />)
  const filter = getByText('Todas as esferas')

  fireEvent.click(filter)
  fireEvent.click(filter)

  const found = queryAllByText('Encontrada')
  const notFound = queryAllByText('Não encontrada')

  expect(found.length).toBe(7)
  expect(notFound.length).toBe(0)
})

it('Renderizar filtro todas as esferas encontradas e não encontradas, quando existem apenas não encontradas', () => {
  const { getByText, queryAllByText } = render(<Balls balls={esferas.balls} profile={{}} />)
  const filter = getByText('Todas as esferas')

  fireEvent.click(filter)
  fireEvent.click(filter)

  const found = queryAllByText('Encontrada')
  const notFound = queryAllByText('Não encontrada')

  expect(found.length).toBe(0)
  expect(notFound.length).toBe(7)
})

it('Renderizar filtro das minhas esferas, quando existem esferas encontradas', async () => {
  const { queryAllByText, getByTestId } = render(<Balls balls={esferas.balls} profile={profile} />)
  const filter = getByTestId('filter')

  fireEvent.change(filter, { target: { value: 'me' } })

  const found = queryAllByText('Encontrada')
  const notFound = queryAllByText('Não encontrada')

  expect(found.length).toBe(4)
  expect(notFound.length).toBe(0)
})

it('Renderizar filtro apenas esferas encontradas, quando não existem esferas encontradas', () => {
  const { getByText, queryAllByText, getByTestId } = render(<Balls balls={esferasSuccess.balls} profile={{}} />)
  const filter = getByTestId('filter')
  
  fireEvent.change(filter, { target: { value: 'me' } })
  
  const found = queryAllByText('Encontrada')
  const notFound = queryAllByText('Não encontrada')
  
  expect(found.length).toBe(0)
  expect(notFound.length).toBe(0)
})
  
it('Renderizar filtro apenas esferas que não tenho, quando existem esferas não encontradas', () => {
  const { queryAllByText, getByTestId } = render(<Balls balls={esferas.balls} profile={profile} />)
  const filter = getByTestId('filter')
  
  fireEvent.change(filter, { target: { value: 'notme' } })
  
  const found = queryAllByText('Encontrada')
  const notFound = queryAllByText('Não encontrada')
  
  expect(found.length).toBe(0)
  expect(notFound.length).toBe(3)
})  

it('Renderizar filtro apenas esferas que não tenho, quando não existem esferas não encontradas', () => {
  const { queryAllByText, getByTestId } = render(<Balls balls={esferasSuccess.balls} profile={profileSuccess.profile} />)
  const filter = getByTestId('filter')
  
  fireEvent.change(filter, { target: { value: 'notme' } })
  
  const found = queryAllByText('Encontrada')
  const notFound = queryAllByText('Não encontrada')
  
  expect(found.length).toBe(0)
  expect(notFound.length).toBe(0)
})