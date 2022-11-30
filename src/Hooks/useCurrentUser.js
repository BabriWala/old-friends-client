import React, { useEffect, useState } from 'react';
import axios from 'axios';
const useCurrentUser = (email) => {
    const [currentUser, setCurrentUser] = useState(null)

    
        useEffect(()=>{
            if(email){
            axios.get(`http://localhost:5000/users?email=${email}`)
            .then(res => {
                // if(res.data.status === 'Verified')
                setCurrentUser(res.data)
            // })
            })}
        },[email])
    

    return [currentUser];
};

export default useCurrentUser;