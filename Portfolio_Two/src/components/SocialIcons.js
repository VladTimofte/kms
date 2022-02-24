import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import classes from './SocialIcons.module.css'

const SocialIcons = () => {
  return (
	  <div className={classes.icons}>
		  <a href="https://www.linkedin.com/in/vlad-timofte/" className={classes.iLinkedin} target="blank">
			  <LinkedInIcon />
		  </a>
		  <a href="https://github.com/VladTimofte" className={classes.iGithub} target="blank">
			  <GithubIcon />
		  </a>
		  <a href="https://wa.me/+40770746731" className={classes.iWhatsApp} target="blank">
			  <WhatsAppIcon />
		  </a>
	  </div>
  )
}

export default SocialIcons
