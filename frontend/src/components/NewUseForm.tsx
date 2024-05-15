import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react"
import { GET_USER } from "../App";

const CREATE_USER = gql`
  mutation ($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`;

export function NewUseForm() {
  const [name, setName] = useState('')
  const [createUser, { data }] = useMutation(CREATE_USER)

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    if (!name) return;

    await createUser({
      variables: {
        name,
      },
      refetchQueries: [GET_USER]
    })
  }

  return (
    <form onSubmit={handleCreateUser}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  )
}