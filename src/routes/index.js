import React from "react";
import {Route, Switch} from "react-router-dom";
import {Dashboard, Cart} from "../screens";

function Routes(){
	return (
		<Switch>
			<Route exact path={"/"} component={Dashboard} />
			<Route exact path={"/cart"} component={Cart} />
			<Route path={"*"} component={() => "NOT FOUND"} />
		</Switch>
	)	
}

export default Routes