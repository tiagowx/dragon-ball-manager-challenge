import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Manager from './Manager'

it.only('Insere códigos faltantes e renderiza shenlong', () => {
  const { getByText, getAllByText, getByPlaceholderText, getByTestId } = render(<Manager />)
  const notFoundBalls = getAllByText('encontrei')
  let i = notFoundBalls.length;
  while (i > 0) {
    i--
    fireEvent.click(notFoundBalls[i])
    fireEvent.change(
      getByPlaceholderText('Ex: 23412'),
      { targets: { value: '123' } })
    fireEvent.click(getByText('Validar'))
    console.log(notFoundBalls.length)
  }

  fireEvent.click(getByText('Invocar')) 

  const shenlong = getByTestId('shenlong')
  expect(shenlong).toBeInTheDocument()
})