// TypeScript with React
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'

// 🐨 add type definitions for each function
type OperationFn = (left: number, right: number) => number
type Operator = '+' | '-' | '/' | '*'

const operations: Record<Operator, OperationFn> = {
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
  '/': (left, right) => left / right,
}

// 🐨 create a type called CalculatorProps
type CalculatorProps = {
  left?: number
  operator?: keyof typeof operations
  right?: number
}
// 🐨 set the type for this props argument to CalculatorProps
function Calculator({left = 0, operator = '+', right = 0}: CalculatorProps) {
  const result = operations[operator](left, right)
  return (
    <div>
      <code>
        {left} {operator} {right} = <output>{result}</output>
      </code>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Calculator</h1>
      <Calculator left={1} operator="+" right={2} />
      <Calculator left={1} operator="-" right={2} />
      <Calculator left={1} operator="*" right={2} />
      <Calculator left={1} operator="/" right={2} />
    </div>
  )
}

export {App}
