import { useState } from 'react';
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import './navbar.scss'

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	window.onscroll = () =>{
		setIsScrolled( window.pageYOffset===0? false : true );
		return () => (window.onscroll = null);
		
	}
	return (
		<div className={isScrolled? 'nav scrolled':'nav'}>
			<div className="container">
				<div className="left">
					<img 
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
						alt="" />
					
					<span>Home</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New and Popular</span>
					<span>My List</span>
				</div>
				<div className="right">
					<Search className="icon"/>
					<span>KID</span>
					<Notifications className="icon"/>
					<img 
						src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
						alt="hmm" />
					<div className="profile">
						<ArrowDropDown className="icon"/>
						<div className="options">
							<span>Settings</span>
							<span>Log out</span>
						</div>
					</div>
				</div>
			</div>
		</div>
  	)
}

export default Navbar