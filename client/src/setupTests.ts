/* eslint-disable node/no-extraneous-import */
import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'

afterEach(() => {
  cleanup()
})
