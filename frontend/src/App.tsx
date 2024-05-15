import { gql, useQuery } from "@apollo/client";
import { NewUseForm } from "./components/NewUseForm";

type User = {
  id: string;
  name: string;
}

export const GET_USER = gql`

  query {
    users {
      id 
      name
    }
  }
`;

export default function App() {
  const { data, loading } = useQuery<{users: User[]}>(GET_USER);

  if (loading) return <p>Carregando...</p>

  return (
    <div>
      <ul>
        {data?.users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <NewUseForm />
    </div>
  )
}