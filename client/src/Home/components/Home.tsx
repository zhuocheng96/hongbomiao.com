import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import config from '../../config';
import { RootState } from '../../reducer';
import HmImage from '../../shared/components/Image';
import HmLazyComponent from '../../shared/components/LazyComponent';
import MeActions from '../actions/me.action';
import hatPNG from '../images/hat.png';
import hatWebP from '../images/hat.webp';
import magicPNG from '../images/magic.png';
import magicWebP from '../images/magic.webp';
import styles from './Home.module.css';

const connector = connect(
  (state: RootState) => ({
    me: state.me,
  }),
  {
    getMe: MeActions.getMe,
  }
);

type Props = ConnectedProps<typeof connector>;

const Home: React.FC<Props> = (props) => {
  const { me, getMe } = props;

  useEffect(() => {
    getMe();
  }, [getMe]);

  const { name, slogan } = me;

  return (
    <div className={styles.hmHome}>
      <div className={`container ${styles.hmContainer}`}>
        <h1 className={styles.hmTitle}>{name}</h1>
        <a className={styles.hmContent} href={config.githubUrl} target="_blank" rel="noopener noreferrer">
          <HmLazyComponent>
            <HmImage className={styles.hmEmoji} alt="Magical Hat" src={hatPNG} webpSrc={hatWebP} />
          </HmLazyComponent>
          <div className={styles.hmText}>{slogan}</div>
          <HmLazyComponent>
            <HmImage className={styles.hmEmoji} alt="Magic" src={magicPNG} webpSrc={magicWebP} />
          </HmLazyComponent>
        </a>
      </div>
    </div>
  );
};

export default connector(Home);
