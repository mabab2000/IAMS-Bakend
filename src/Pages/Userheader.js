import './index.css';
function userheader(){
const role=localStorage.getItem('role');
const first_name=localStorage.getItem('first_name');
const last_name=localStorage.getItem('last_name');
const id=localStorage.getItem('id');
return (
   <><div class="text-white-500 bg-blue-200 h-20 w-500 flex items-center justify-center">
   <h1 class="text-4xl text-black font-bold">Welcome in Internship Application Managment System</h1>
 </div><div class="bg-green-800 h-10">
        <h3 class="text-blue-200 font-bold text-2xl">Welcome {role}
       
        <font color='white'>    {first_name}  {last_name}</font></h3>
        </div></> )
}
export default userheader