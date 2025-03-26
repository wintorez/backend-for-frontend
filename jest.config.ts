import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  projects: [
    {
      displayName: 'client',
      testEnvironment: 'jsdom',
      transform: {
        '^.+\\.[tj]sx?$': [
          'ts-jest',
          {
            tsconfig: '<rootDir>/client/tsconfig.json',
          },
        ],
      },
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
      },
      setupFilesAfterEnv: ['<rootDir>/client/src/setupTests.ts'],
      testMatch: ['<rootDir>/client/src/**/*.test.{ts,tsx}'],
    },
    {
      displayName: 'server',
      testEnvironment: 'node',
      transform: {
        '^.+\\.ts$': [
          'ts-jest',
          {
            tsconfig: '<rootDir>/server/tsconfig.json',
          },
        ],
      },
      testMatch: ['<rootDir>/server/src/**/*.test.ts'],
    },
  ],
}

export default config
