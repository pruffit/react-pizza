import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
	return (
		<div className={styles.root}>
			<h1>
				<span>🤕</span>
				<br/>
				Что-то пошло не так...
			</h1>
			<p>К сожалению иногда все идет вопреки нашим планам</p>
		</div>
	)
}

export default NotFoundBlock
