import { useRouter } from 'next/router';

export default function PortfolioProject() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Portfolio Project</h1>
    </div>
  );
}
