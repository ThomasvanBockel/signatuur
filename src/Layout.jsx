import {Link, Outlet} from "react-router";

function Layout() {
    return (
        <div>
            <header>
                {/*<nav>*/}
                {/*    <Link className="bg-white border border-black text-black px-4 py-2 rounded" to={`/`}>Home</Link>*/}

                {/*</nav>*/}
            </header>
            <main className="min-h-screen bg-[var(--background)]">
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;