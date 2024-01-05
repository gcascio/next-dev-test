import { auth } from '@/auth';
import { LoginButton } from '@/componets/LoginButton';

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const session = await auth();

  session?.user?.name

  return (
    <main>
      {session?.user
        ? `Welcome ${session.user.name}`
        : <LoginButton />
      }
    </main>
  )
}
