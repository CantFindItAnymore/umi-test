import React, {useEffect} from 'react';
import { connect } from 'dva';
import { Helmet } from 'react-helmet';
import styles from './index.less';

const Example = (props) => {

  useEffect(() => {
    props.dispatch({
      type: "getRandomImg"
    });
  })

  return (
    <div>
			<Helmet>
				<title>example</title>
			</Helmet>
			<div className={styles.container}>
      <img src={props.example.randomImg} alt='logo' />
      <p className={styles.title}>
        coded with ❤ by rj
      </p>
    </div>
		</div>
  )
}

export default connect(({ example }) => ({
  example
}))(Example)
