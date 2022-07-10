import Head from "next/head"
import A from './A'

const MainContainer = ({children, keywords}) => {
  return (
    <>
        <Head>
            <meta keywords={`start Next.js app ${keywords}`} />
            {/* <title>Main page</title> */}
        </Head>
        <div>
            <nav className="navbar">
                <A href="/" text="Main" />
                <A href="/users" text="Users" />
            </nav>
        </div>
        <div>
            {children}
        </div>
        <style jsx>
            {`
                .navbar {
                    background: orange;
                    padding: 15px;
                }
            `}
        </style>
    </>
  )
}

export default MainContainer