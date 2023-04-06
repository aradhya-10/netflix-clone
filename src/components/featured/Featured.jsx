import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import './featured.scss'

const Featured = ({type}) => {
  return (
	<div className="featured">
		{type && (
			<div className="category">
				<span>{type==="movie"? "Movies" : "TV Shows"}</span>
				<select name="genre" id="genre">
					<option >Genre</option>
					<option value="adventure">Adventure</option>
					<option value="comedy">Comedy</option>
					<option value="crime">Crime</option>
					<option value="fantasy">Fantasy</option>
					<option value="historical">Historical</option>
					<option value="horror">Horror</option>
					<option value="romance">Romance</option>
					<option value="sci-fi">Sci-fi</option>
					<option value="thriller">Thriller</option>
					<option value="western">Western</option>
					<option value="animation">Animation</option>
					<option value="drama">Drama</option>
					<option value="documentary">Documentary</option>
				</select>
			</div>
		
		)}
		<img
			src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
			alt="bg" 
		/>
		<div className="info">
			<img 
				src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Your_name_movie_logo.png" 
				alt="name" 
				/>
			<span className="desc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic dolore voluptatem soluta necessitatibus minus laboriosam iste dignissimos. Dicta debitis, architecto quod laboriosam alias placeat? Accusamus cum obcaecati perspiciatis dolor.
			</span>
			<div className="buttons">
				<button className="play">
					<PlayArrow/>
					<span>Play</span>
				</button>
				<button className="more">
					<InfoOutlined/>
					<span>More</span>
				</button>
			</div>
		</div>
	</div>
  )
}

export default Featured