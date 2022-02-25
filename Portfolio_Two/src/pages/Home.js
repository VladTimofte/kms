import React from 'react'
import classes from './Home.module.css'
import './Home.module.css'
import TextTransitionEffect from '../components/TextTransition'
import SocialIcons from '../components/SocialIcons'

function HomePage() {
	return (
		<div className={classes.homePageStyled}>
            <div className={classes.backgroundImage}></div>
			<div className={classes.typography}>
				<h1>Hi, I'm Vlad</h1>
					<TextTransitionEffect />
					<SocialIcons />
				<div class={classes.arrowContainer}>
					<div class={classes.arrowDown}></div>
				</div>
			</div>
		</div>
	)
}

export default HomePage;
