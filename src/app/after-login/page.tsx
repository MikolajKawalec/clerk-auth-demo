import { currentUser } from '@clerk/nextjs';

export default async function Home() {
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;
  return <div>Hello {user?.emailAddresses[0].emailAddress}</div>;
}
