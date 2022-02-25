import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll'
import Home from '../pages/Home';

class ScrollFunction extends React.Component {

	constructor(props) {
		super(props);
		this.scrollToTop = this.scrollToTop.bind(this);
	}

	componentDidMount() {

		Events.scrollEvent.register('begin', function () {
			console.log("begin", arguments);
		});

		Events.scrollEvent.register('end', function () {
			console.log("end", arguments);
		});

	}
	scrollToTop() {
		scroll.scrollToTop();
	}
	scrollTo() {
		scroller.scrollTo('scroll-to-element', {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart'
		})
	}
	scrollToWithContainer() {

		let goToContainer = new Promise((resolve, reject) => {

			Events.scrollEvent.register('end', () => {
				resolve();
				Events.scrollEvent.remove('end');
			});

			scroller.scrollTo('scroll-container', {
				duration: 500,
				delay: 0,
				smooth: 'easeInOutQuart'
			});

		});

		goToContainer.then(() =>
			scroller.scrollTo('scroll-container-second-element', {
				duration: 800,
				delay: 0,
				smooth: 'easeInOutQuart',
				containerId: 'scroll-container'
			}));
	}
	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}
	render() {
		return (
			<div>
							<ul>
								<li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li>
								<li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Test 2</Link></li>
								<li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></li>
								<li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>Test 4</Link></li>
							</ul>

				<Element name="test1">
					test 1
				</Element>

				<Element name="test2">
					test 2
				</Element>

				<Element name="test3">
					test 3
				</Element>

				<Element name="test4">
					<Home />
				</Element>
			</div>
		);
	}
};

export default ScrollFunction

