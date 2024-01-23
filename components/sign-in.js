import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button className="bg-white p-2 rounded-lg" type="submit">Signin with GitHub</button>
    </form>
  )
} 