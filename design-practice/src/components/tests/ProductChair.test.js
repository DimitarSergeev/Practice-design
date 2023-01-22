import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { ProductChair } from '../ProductChair/ProductChair'
import Swal from 'sweetalert2'


describe('Tests ProductChair commponent ', () => {
    afterEach(() => {
        cleanup()
        Swal.close()
    })


    test('Should product code', () => {
        render(<ProductChair />)
        const codeElement = screen.getByTestId('code')
        expect(codeElement).toBeInTheDocument()

    })

    test('Should render info container with correct info', () => {
        render(<ProductChair />)
        const infoContainerElement = screen.getByTestId('info-container')
        expect(infoContainerElement).toBeInTheDocument()
        expect(infoContainerElement).toHaveTextContent('Modern Yellow Chair')
        expect(infoContainerElement).toHaveTextContent('Chairs')
        expect(infoContainerElement).toHaveTextContent('Tinners House')
        expect(infoContainerElement).toHaveTextContent('$420')
    })

    test('Should render description container with correct info', () => {
        render(<ProductChair />)
        const descContainerElement = screen.getByTestId('desc-container')
        expect(descContainerElement).toBeInTheDocument()

        const descBtn = screen.getByRole("button", {
            name: 'DESCRIPTION'
        })
        expect(descBtn).toBeInTheDocument()

        const detailsBtn = screen.getByRole("button", {
            name: 'DETAILS'
        })
        expect(detailsBtn).toBeInTheDocument()
        const commentsBtn = screen.getByRole("button", {
            name: 'COMMENTS'
        })
        expect(commentsBtn).toBeInTheDocument()

        const descElemet = screen.getByTestId('desc')
        expect(descElemet).toBeInTheDocument()
        expect(descElemet).toHaveTextContent('Lorem ipsum dolor')
    })

    test('Should render order info with correct default data', () => {
        render(<ProductChair />)
        const decrementBtn = screen.getByTestId('decrement')
        const incrementBtn = screen.getByTestId('increment')
        const picesElement = screen.getByTestId('pices')
        const totlaPriceElement = screen.getByTestId('totalPrice')

        expect(decrementBtn).toBeInTheDocument()
        expect(incrementBtn).toBeInTheDocument()
        expect(picesElement).toBeInTheDocument()
        expect(totlaPriceElement).toBeInTheDocument()

        expect(picesElement).toHaveTextContent('1')
        expect(totlaPriceElement).toHaveTextContent('$420')

    })

    test('Testing the functionality of the buttons and the correct visualization', async () => {
        render(<ProductChair />)
        const picesElement = screen.getByTestId('pices')
        const totlaPriceElement = screen.getByTestId('totalPrice')

        const decrementBtn = screen.getByTestId('decrement')
        const incrementBtn = screen.getByTestId('increment')

        await act(async () => {
            fireEvent.click(decrementBtn)
        })

        expect(picesElement).toHaveTextContent('1')
        expect(totlaPriceElement).toHaveTextContent('$420')

        await act(async () => {
            fireEvent.click(incrementBtn)
        })

        expect(picesElement).toHaveTextContent('2')
        expect(totlaPriceElement).toHaveTextContent('$840')

        await act(async () => {
            fireEvent.click(incrementBtn)
        })
        expect(picesElement).toHaveTextContent('3')
        expect(totlaPriceElement).toHaveTextContent('$1260')
    })

    test('Should render action buttons', () => {
        render(<ProductChair />)
        const wishListBtn = screen.getByRole("button", {
            name: 'ADD TO MY WISHLIST'
        })
        const addBtn = screen.getByRole("button", {
            name: 'ADD TO CART'
        })

        expect(wishListBtn).toBeInTheDocument()
        expect(addBtn).toBeInTheDocument()
    })

    test('Should sent request after click action button watchList', async () => {
        render(<ProductChair />)
        const wishListBtn = screen.getByRole("button", {
            name: 'ADD TO MY WISHLIST'
        })

        await act(async () => {
            fireEvent.click(wishListBtn)
        })
        await waitFor(() => {
            const modal = document.querySelector('.swal2-modal');
            expect(modal).not.toBeNull();
            expect(modal.textContent).toContain('Good job!')
            expect(modal.textContent).toContain('The product has been added!')
        });
    })
    test('Should sent request after click action button add cart', async () => {
        render(<ProductChair />)
        const addBtn = screen.getByRole("button", {
            name: 'ADD TO CART'
        })

        await act(async () => {
            fireEvent.click(addBtn)
        })
        await waitFor(() => {
            const modal = document.querySelector('.swal2-modal');
            expect(modal).not.toBeNull();
            expect(modal.textContent).toContain('Good job!')
            expect(modal.textContent).toContain('The product has been added!')
        });
    })

})