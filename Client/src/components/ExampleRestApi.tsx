import React, { useState, useEffect } from 'react';

function ExampleRestApi() {
	const [posts, setPosts] = useState<any[]>([]);
	useEffect(() => {
		fetch('https://localhost:49153/WeatherForecast/cors', { mode: 'cors' })
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);
				setPosts(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);
	return (
		<div className="posts-container">
			{posts.map((post) => {
				return <div className="post-card" key={post.temperatureC}></div>;
			})}
		</div>
	);
}

export default ExampleRestApi;
