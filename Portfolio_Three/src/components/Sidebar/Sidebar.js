import style from '../../styles/styles.css'
import ProfilePhoto from './ProfilePhoto';
import Navigation from './Navigation'

const Sidebar = () =>{
	return(
		<div class={style.sidebar}>
			<div class={style.sidebarContainer}>
				<div class={style.One}>
					<ProfilePhoto />
				</div>
				<div class={style.Two}>
					<Navigation />
					</div>
				<div class={style.Three}><h1>THREE</h1></div>
			</div>
		</div>
	)
}

export default Sidebar;