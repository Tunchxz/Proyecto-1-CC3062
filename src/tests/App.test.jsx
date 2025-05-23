import { render, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App', () => {
    // Test 1: Cálculo correcto de operaciones encadenadas
    it('calcula correctamente operaciones encadenadas: 2 + 3 * 4', () => {
        const { getByText, getByTestId } = render(<App />)
        fireEvent.click(getByTestId("key-2"))
        fireEvent.click(getByTestId("key-+"))
        fireEvent.click(getByTestId("key-3"))
        fireEvent.click(getByTestId("key-="))
        fireEvent.click(getByTestId("key-*"))
        fireEvent.click(getByTestId("key-4"))
        fireEvent.click(getByTestId("key-="))
        // (2 + 3) = 5, luego 5 * 4 = 20
        expect(getByText("20")).toBeTruthy()
    })

    // Test 2: Muestra ERROR si el resultado es negativo
    it('muestra ERROR si el resultado es negativo', () => {
        const { getByText, getByTestId } = render(<App />)
        fireEvent.click(getByTestId("key-3"))
        fireEvent.click(getByTestId("key--"))
        fireEvent.click(getByTestId("key-5"))
        fireEvent.click(getByTestId("key-="))
        expect(getByText("ERROR")).toBeTruthy()
    })

    // Test 3: Muestra ERROR si el resultado es mayor que 999999999
    it('muestra ERROR si el resultado es mayor que 999999999', () => {
        const { getByText, getByTestId } = render(<App />)
        for (let i = 0; i < 10; i++) {
            fireEvent.click(getByTestId("key-9"))
        }
        fireEvent.click(getByTestId("key-*"))
        fireEvent.click(getByTestId("key-9"))
        fireEvent.click(getByTestId("key-="))
        expect(getByText("ERROR")).toBeTruthy()
    })

    // Test 4: El display no debe aceptar más de 9 caracteres numéricos
    it('limita el display a 9 caracteres', () => {
        const { getByText, getByTestId } = render(<App />)
        fireEvent.click(getByTestId("key-2"))
        fireEvent.click(getByTestId("key-2"))
        fireEvent.click(getByTestId("key-/"))
        fireEvent.click(getByTestId("key-7"))
        fireEvent.click(getByTestId("key-="))
        // 22 / 7 = 3.14285714
        expect(getByText("3.1428571")).toBeTruthy()
    })
})