import SignIn from "./sign-in"

export default function UnauthenticatedApp (){
    return <div className="bg-blue-900 w-screen h-screen flex flex-col justify-center items-center gap-4">
      <SignIn />
    </div>
}