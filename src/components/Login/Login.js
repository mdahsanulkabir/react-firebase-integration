import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    
    return (
        <div>
            <h3>Please register now</h3>
            <div style={{margin: '20px'}}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            
            <form>
                <input type="email" placeholder='your email'/>
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="login"/>
            </form>
        </div>
    );
};

export default Login;