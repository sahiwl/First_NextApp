"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";
import {signup} from "@/app/actions/user"
export function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="p-4 border rounded pb-4">
                <input type="text" onChange={(e) => {
                    setUsername(e.target.value)
                }} className="p-2 m-2" placeholder="username" />
                <br />
                <input type="password" onChange={(e) => {
                    setPassword(e.target.value)
                }} className="p-2 m-2" placeholder="password" />
                <br />
                <div className="mt-4 flex justify-center">
                    <button type="button" onClick={async () => {
                        // await axios.post('http://localhost:3000/api/user', {
                        //     username,
                        //     password
                        // });
                        signup(username, password);
                    }}>Sign up</button>
                    </div>
            </div>
        </div>
    </div>
}