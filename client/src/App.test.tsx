import { render, screen } from '@testing-library/react'
import App from './App'

jest.mock('swr', () => ({
  __esModule: true,
  default: () => ({
    data: 'Test Message',
  }),
}))

describe('App', () => {
  it('renders Vite + React heading', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  it('renders message from API', () => {
    render(<App />)
    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  it('renders logo images', () => {
    render(<App />)
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument()
    expect(screen.getByAltText('React logo')).toBeInTheDocument()
  })
})
