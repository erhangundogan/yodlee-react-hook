import typescript from 'rollup-plugin-typescript'

export default {
  input: './src/index.ts',
  output: {
    file: './dist/bundle.js',
    format: 'es',
    name: 'YodleeFastLink',
    globals: {
      react: 'react'
    }
  },
  plugins: [
    typescript()
  ],
  external: [
    'react'
  ],
}
