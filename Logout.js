import { Redirect } from 'react-router-dom';

function Logout(){
    const role = localStorage.getItem('roles');

    localStorage.removeItem("roles");
    if(!role){
        return <Redirect to='/'/>
    }

    return(
        <div>
            Logged out
        </div>
    )

}

export default Logout