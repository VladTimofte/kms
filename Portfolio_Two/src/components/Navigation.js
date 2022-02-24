import classes from './Navigation.module.css'
import profileImg from '../../src/images/Profile.png';
import { NavLink } from "react-router-dom";

function Navigation() {
	return (
		<div className={classes.navigationStyled}>
			<div className={classes.avatar}>
				<img src={profileImg} className={classes.image} alt="" />
				<h3>Vlad Timofte</h3>
			</div>
			<ul className={classes.navItems}>
				<li className={classes.navItem}>
					<NavLink className={(state) => (state.isActive === true ? classes.active : classes.inActive)} to="/home" >Home</NavLink>
				</li>
				<li className={classes.navItem}>
					<NavLink className={(state) => (state.isActive === true ? classes.active : classes.inActive)} to="/about-me" >About Me</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className={(state) => (state.isActive === true ? classes.active : classes.inActive)} to="/what-i-do" >What I Do</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className={(state) => (state.isActive === true ? classes.active : classes.inActive)} to="/resume" >Resume</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className={(state) => (state.isActive === true ? classes.active : classes.inActive)} to="/portfolio" >Portfolio</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className={(state) => (state.isActive === true ? classes.active : classes.inActive)} to="/contact" >Contact</NavLink>
				</li>
			</ul>
			<footer className={classes.footerText}>
				<p className={classes.footerText}>@2022</p>
			</footer>
		</div>
	)
}

export default Navigation;