import React, { lazy, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Config from '../../Config';
import HmLazyComponent from '../../shared/components/LazyComponent';
import RootState from '../../shared/types/RootState.type';
import MeAction from '../actions/Me.action';
import hatPNG from '../images/hat.png';
import hatWebP from '../images/hat.webp';
import magicPNG from '../images/magic.png';
import magicWebP from '../images/magic.webp';
import meQuery from '../queries/me.query';
import styles from './Home.module.css';

const HmImage = lazy(() => import('../../shared/components/Image'));
const HmSparkles = lazy(() => import('../../shared/components/Sparkles'));

const connector = connect(
  (state: RootState) => ({
    me: state.me,
  }),
  {
    fetchMe: MeAction.fetchMe,
  }
);

type Props = ConnectedProps<typeof connector>;

const Home: React.FC<Props> = (props) => {
  const { me, fetchMe } = props;

  useEffect(() => {
    fetchMe(meQuery);
  }, [fetchMe]);

  const { bio, name } = me;

  return (
    <div className={styles.hmHome}>
      <div className={`container ${styles.hmContainer}`}>
        <h1 className={styles.hmTitle}>{name}</h1>
        <HmLazyComponent>
          <HmSparkles>
            <a className={styles.hmContent} href={Config.githubURL} target="_blank" rel="noopener noreferrer">
              <HmImage
                webpSrc={hatWebP}
                fallbackSrc={hatPNG}
                style={{ height: '22px', width: '22px' }}
                alt="Magical Hat"
              />
              <div className={styles.hmText}>{bio}</div>
              <HmImage
                webpSrc={magicWebP}
                fallbackSrc={magicPNG}
                style={{ height: '22px', width: '22px' }}
                alt="Magic"
              />
            </a>
          </HmSparkles>
        </HmLazyComponent>
      </div>
    </div>
  );
};

export default connector(Home);
