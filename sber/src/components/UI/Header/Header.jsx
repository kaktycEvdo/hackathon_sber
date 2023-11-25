import { Component } from "react";
import classes from './Header.module.css';

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
            <header>
                <div className={classes.logo}><a href="/">{this.props.logo}</a></div>
                
                {this.menu 
                ? <ul className={classes.menu} >
                    {...this.menu}
                </ul> 
                : null}
                

                {this.props.lk_href
                ? <div className={classes.lk}><a href={this.props.lk_href}>{this.props.lk_icon}</a></div>
                : null}
            </header>
        );
    }
}
 
export default Header;