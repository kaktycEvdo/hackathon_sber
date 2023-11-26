import { Component } from "react";
import classes from './Header.module.css';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

        if (this.props.menu){
            this.menu = Array.from(this.props.menu);
            for (let index = 0; index < this.menu.length; index++) {
                const element = this.menu[index];
                this.menu[index] = <li>{element}</li>;
            }
        }
    }
    render() { 
        return ( 
            <header className={this.props.class}>
                <div className={classes.logo}><Link to="/">{this.props.logo}</Link></div>
                
                {this.menu 
                ? <ul className={classes.menu} >
                    {...this.menu}
                </ul> 
                : null}
                

                {this.props.lk_href
                ? <div className={classes.lk}><Link to={this.props.lk_href}>{this.props.lk_icon}</Link></div>
                : null}

                {this.props.children}
            </header>
        );
    }
}
 
export default Header;