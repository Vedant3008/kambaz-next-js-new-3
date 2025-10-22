export default function VariablesAndConstant(){
<<<<<<< HEAD
    var functionScoped = 2;
    let blockScoped = 5;
=======
    let functionScoped = 2;
    const blockScoped = 5;
>>>>>>> 35421d4 (Fix: ignore ESLint during build)
    const constant1 = functionScoped - blockScoped;
    return(
        <div id = "wd-variables-and-constants">
            <h4>Variables and Constants</h4>
            functionScoped = {functionScoped}<br />
            blockScoped = { blockScoped }<br/>
            constant1 = { constant1 }<hr/>
        </div>
    );}