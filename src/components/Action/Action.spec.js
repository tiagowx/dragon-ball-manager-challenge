import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Action from './Action'

// Mocks
import { profile } from '../../mocks/profile.json';
import profileSuccess from '../../mocks/profileSuccess.json';

it('Should render action', () => {
  const { getByText } = render(<Action />)

  const button = getByText('Invocar').closest('button')
  fireEvent.click(button)

  expect(getByText('Você não tem todas as esferas para invocar o shenlong')).toBeTruthy()

  const backButton = getByText('Voltar').closest('button')
  fireEvent.click(backButton)

  expect(getByText('Invocar shenlong')).toBeInTheDocument()
})

// Novos testes 
it('Renderiza modal de invocação, quando não existem esferas suficientes para invocação', () => {
  const { queryByTestId, getByText } = render(<Action balls={profile.balls} />)
  const button = getByText('Invocar')

  fireEvent.click(button)

  expect(getByText('Você não tem todas as esferas para invocar o shenlong')).toBeTruthy()

  const shenlong = queryByTestId('shenlong')

  expect(shenlong).not.toBeInTheDocument()

})
it('Renderiza modal de invocação, quando existe esferas suficientes para invocação', () => {
  const { getByTestId, getByText } = render(<Action balls={profileSuccess.profile.balls} />)
  const button = getByText('Invocar')

  fireEvent.click(button)

  const shenlong = getByTestId('shenlong')

  expect(shenlong).toBeInTheDocument()

})