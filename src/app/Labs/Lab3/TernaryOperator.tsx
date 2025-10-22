export default function TernaryOperator(){
<<<<<<< HEAD
    let loggedIn = true;
=======
    const loggedIn = true;
>>>>>>> 35421d4 (Fix: ignore ESLint during build)
    return(
    <div id="wd-ternary-operator">
       <h4>Logged In</h4>
       { loggedIn ? <p>Welcome</p>
                  : <p>Please login</p> } <hr/>
    </div>
 );
}