import Nav from './Nav';

export default function AuthenticatedAppLayout({children}){
    return <div className="bg-blue-900 w-screen h-screen flex">
        <Nav />
        <section className="bg-white m-2 ml-0 grow rounded-md p-4">{children}</section>
    </div>
}