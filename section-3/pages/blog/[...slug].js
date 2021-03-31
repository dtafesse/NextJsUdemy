// notice the file name, it is a catch all.
// "[...slug].js" the slug could be replaced with any text but the "..." is required
// so "/blog/1/2/3" or "/blog/1" will point to the Same blog page
// print how router.query will look like, it will return an array of slugs
// ex "/blog/1/2/3" => slug = [ "1", "2", "3" ]

// can not think of a good use case for this...
import { useRouter } from 'next/router';

export default function BlogPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Blog Page</h1>
    </div>
  );
}
