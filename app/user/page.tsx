import React from "react";

import client from "../../db"


async function fetchData() {
    const user = await client.user.findFirst();

    return {
        username: user?.username,
        password: user?.password
    }
}

export default async function User() {
    const data = await fetchData();
    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div className="border p-8 rounded">
                    <div>
                        username: {data?.username}
                    </div>

                    password: {data?.password}  
                </div>
            </div>
        </div>
    );
}