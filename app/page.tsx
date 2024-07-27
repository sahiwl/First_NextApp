import axios from "axios";

async function fetchData() {
  await new Promise((r)=>setTimeout(r,5000))
  const res = await axios.get("http://localhost:3000/api/user")
  return res.data;
}


//async components
export default async function Home() {
  return(
    <div>
      hi there
    </div>
  )
} 
