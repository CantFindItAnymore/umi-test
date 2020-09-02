import React from 'react';
import {Helmet} from 'react-helmet';

import styles from './index.less';

export default () => {
  return (
    <div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>404</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>

      <h1 className={styles.title}>Page 404</h1>
    </div>
  );
}
