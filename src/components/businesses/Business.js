import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import YelpContext from '../../context/yelp/yelpContext';
const Business = ({ match }) => {
	const yelpContext = useContext(YelpContext);
	const { getBusiness, loading, business } = yelpContext;

	useEffect(() => {
		getBusiness(match.params.id);
		//eslint-disable-next-line
	}, []);
	const {
		name,
		image_url,
		display_phone,
		rating,
		url,
		review_count
	} = business;

	if (loading) return <Spinner />;

	return (
		<Fragment>
			<Link to="/" className="btn btn-light">
				Back to Search
			</Link>
			<div className=" card">
				<div className="all-center">
					<div>
						<img
							src={image_url}
							alt="business"
							style={{ width: '150px' }}
							className="round-img"
						/>
						<h1>{name}</h1>
						<p>Phone: {display_phone}</p>
						<p>Rating: {rating}</p>
						<p>Review Count: {review_count}</p>
					</div>
					<div>
						<strong>Website:</strong>
						<a className="btn btn-dark" href={url}>
							Link
						</a>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Business;
