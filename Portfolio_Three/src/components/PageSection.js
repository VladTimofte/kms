import style from '../styles/styles.css'

const PageSection = (props) => {
	return (
		<div class={style.page}>
			<div class={style.main}>{props.children}
			</div>
		</div>
	)
}

export default PageSection;