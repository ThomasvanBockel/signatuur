import {useEffect, useState} from "react";

function Pipe({open, cards}) {
    const [amount, setAmount] = useState(0)


    useEffect(() => {
        let count = 0;
        if (open !== null) {
            for (const openElement of open) {
                if (openElement.state) {
                    count++;
                }
            }
        }
        let percentage = Math.trunc(count / cards * 100);
      
        setAmount(percentage);
    }, [open]);


    return (
        <div className="flex flex-col h-[100vh] w-[6rem]">
            <div className="bg-[var(--pipe-start-end)] h-[2.5vh] w-full shadow-md"/>
            <div className="bg-[var(--pipe-background)] flex-1 relative">
                <div
                    className="absolute bottom-0 w-full bg-[var(--water-color)] transition-all duration-300"
                    style={{height: `${amount}%`}}
                />
            </div>
            <div className="bg-[var(--pipe-start-end)] h-[2.5vh] w-full shadow-md"/>

        </div>
    );

}

export default Pipe