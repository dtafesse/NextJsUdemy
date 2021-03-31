import { useRouter } from 'next/router';

export default function ClientProjectsPage() {
  const router = useRouter();

  const loadProjectHandler = () => {
    // router.push('/clients/max/projecta');
    router.push(`/clients/${router.query.clientId}/projecta`);
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
