import Link from 'next/link';

export default function Clients() {
  const clients = [
    {
      id: 'max',
      name: 'Max',
    },
    {
      id: 'tom',
      name: 'Tom',
    },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((c) => (
          <li key={c.id}>
            {/* <Link href={{ pathname: '/clients/[id]', query: { id: c.id } }}>
              {c.name}
            </Link> */}
            <Link href={`/clients/${c.id}`}>{c.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
