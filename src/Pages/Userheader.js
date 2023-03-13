
function userheader(){
const role=localStorage.getItem('role');
const first_name=localStorage.getItem('first_name');
const last_name=localStorage.getItem('last_name');
const id=localStorage.getItem('id');
return (
<table width='100%'bgcolor='green'  border={1} >
    <tr><td>
        <h3><font color='white'>Welcome {role}</font></h3>
       
        <h2><font color='white'>{first_name}  {last_name}</font></h2>
        </td></tr>
</table>
)
}
export default userheader