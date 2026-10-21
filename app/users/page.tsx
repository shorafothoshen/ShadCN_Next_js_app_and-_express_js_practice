import UserCard from "@/components/userCard";
import { UserData } from "@/Types/UserTypes";

const Users = async() => {
    const res=await fetch("http://localhost:5000/user")
    const user =await res.json();

  return (
    <div>
       <h1>Total Users: {user.length}</h1>
       <div className="flex items-center justify-center">
        {
            user.map((u:UserData)=>(
               <UserCard key={u._id} user={u} />
            ))
        }
       </div>
    </div>
  )
}

export default Users;
