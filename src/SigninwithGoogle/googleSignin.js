import React from 'react';
import{GoogleAuth} from 'google-auth-library';

const SignInWithGoogle=()=>{
    const handleSignIn = async()=>{
        const auth = new GoogleAuth({
            clientId:'438433550665-ub1bs6d9u8qp1kga2h3puvc1sm2gjonk.apps.googleusercontent.com',
            scope:'feleen@edulabs.co.in'
        })
    }
    return(
        <button onClick={handleSignIn}>
            Sign Up With Google
        </button>
    )
}
export default SignInWithGoogle;