export default function Layout({children}:{
    children: React.ReactNode
}){
    return <div className="">

    <div className="border bottom-b text-center ">
        20% off for the next 5 days
    </div>
    {children}
    </div>
}