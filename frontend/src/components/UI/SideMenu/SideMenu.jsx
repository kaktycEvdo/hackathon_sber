import classNames from "classnames";
import classes from "./SideMenu.module.css";
import { Component } from "react";

class SideMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <menu className={this.props.slided ? classNames(classes['--slided'], classes['side_menu']) : classes['side_menu']}>
                {this.props.children}
            </menu>
         );
    }
}
 
export default SideMenu;