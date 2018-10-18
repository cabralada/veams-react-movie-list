// Generic libraries
import React from 'react';

const Movielists = props => {
	return (
		<ul data-c-movielist>
			{props.listData.map(movie => {
				const IMG = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

				return (
					<li className="movielist--list" key={movie.id}>
						<img className="movielist--img" src={IMG} />
						<div className="movielist--info">
							<h2 className="movielist--title">{movie.title}</h2>
							<p className="movielist--description">{movie.overview}</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default Movielists;
