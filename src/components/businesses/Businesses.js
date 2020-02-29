import React from 'react';
import BusinessItem from './BusinessItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Businesses = ({ businesses, loading }) => {
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div style={businessStyle}>
				{businesses.map(business => (
					<BusinessItem
						key={business.id}
						image_url={business.image_url}
						name={business.name}
						business={business}
					/>
				))}
			</div>
		);
	}
};
Businesses.propTypes = {
	businesses: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
};
const businessStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default Businesses;