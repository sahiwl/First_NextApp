import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
const client = new PrismaClient();

export async function POST(req:NextRequest){
    //extract the body
    const body = await req.json()
    await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })
    
    return Response.json({
        message: "you're logged in!"
    })
}   