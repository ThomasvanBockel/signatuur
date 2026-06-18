import {useEffect, useState} from "react";

export function Card({children, title, setOpen, open, id}) {
    const [state, setState] = useState(false)
    const [loaded, setLoaded] = useState(false)


    function submitHandler(e) {
        e.preventDefault()
        if (state) {

            setState(!state)
        } else {
            setState(true)
        }
        console.log(open)
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('states')) || []

        const item = items.find(item => item.id === id);

        setState(item ? item.state : false);
    }, []);

    useEffect(() => {
        if (!loaded) {
            setLoaded(true);
            return;
        }

        setOpen(prev => {
            const safePrev = Array.isArray(prev) ? prev : [];
            const exists = safePrev.find(item => item.id === id);

            if (exists) {
                return safePrev.map(item =>
                    item.id === id
                        ? {...item, state}
                        : item
                );
            }

            return [
                ...safePrev,
                {
                    id,
                    state
                }
            ];
        });
    }, [state]);

    return (
        <div
            className="bg-gradient-to-r from-[var(--card-start)] to-[var(--card-end)] flex flex-col min-w-full border-2 border-white p-3 text-xl rounded-2xl ">
            <div className="flex">
                <div className="text-2xl pb-2 pl-2 font-bold text-red-800 mr-auto">
                    {title}
                </div>
                <form className="mr-10" onSubmit={submitHandler}>
                    <button
                        className=" text-white rotate-90 font-boldf text-2xl border-2 border-white rounded-4xl text-center pb-1 hover:border-red-600"
                        type="submit">{state ? '<' : '>'}</button>
                </form>
            </div>
            {state ? children : null}
        </div>
    )
}

export function HeadCard({children}) {
    return (
        <div
            className="bg-gradient-to-r from-[var(--card-start)] to-[var(--card-end)] flex flex-col min-w-full text-center border-2 border-white border-r-2  p-3 text-5xl rounded-2xl font-bold text-red-600">
            {children}
        </div>
    )
}