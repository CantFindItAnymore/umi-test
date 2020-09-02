import React from 'react';
import {Helmet} from 'react-helmet';
import Home from '../Home';

export default () => {
  return (
    <div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>index</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>

      <Home />
    </div>
  );
}
