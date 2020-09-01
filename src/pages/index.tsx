import React from 'react';
import {Helmet} from 'react-helmet';

import styles from './index.less';

export default () => {
  return (
    <div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>index</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>

      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
