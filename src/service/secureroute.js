const { Route, Redirect } = require("react-router-dom");

class auth extends React.component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false
        }
    }
    onAuth() {
        this.isLoggedIn=true;
    }
    getLogInStatus() {
        return this.isLoggedIn;
    }
}

function SecuredRoute (props) {
    return(
        <Route path={props.path} render={data => auth.getLogInStatus()? (
            <props.component {...data}></props.component>):
            (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
        )
}

export default SecuredRoute;