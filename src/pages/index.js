import { useSession, signIn, signOut } from "next-auth/react"




export default function Component() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <img src={session.user.image} /><br/>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut('github')}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('github')}>Sign in</button>
    </>
  )
}