// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement
}

interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

function UsernameForm({
  onSubmitUsername,
}: {
  onSubmitUsername: (username: string) => void
}) {
  const [username, setUsername] = React.useState<string>('')
  function handleSubmit(event: React.SyntheticEvent<UsernameFormElement>) {
    event.preventDefault()
    onSubmitUsername(event.currentTarget.elements.username.value)
  }

  function handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    const {value} = event.currentTarget
    setUsername(value.toLowerCase())
  }

  const [error, setError] = React.useState<string | null>(null)

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (username: string) =>
    alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export {App}
