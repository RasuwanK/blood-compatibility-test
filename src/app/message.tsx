"use client";
import { useState } from "react";
import Title from "./title";

export default function Message() {
    const [open, setOpen] = useState<boolean>(true);
    return (
        <dialog open={open}>
            <Title />
            <button onClick={() => setOpen(prev => !prev)}>Toggle</button>
        </dialog>
    )
}