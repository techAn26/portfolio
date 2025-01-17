import { css } from '@emotion/react'
// import { Colors } from '@/consts/Colors'
import { Header } from './Header'
import { Footer } from './Footer'
import { Title } from './Title'
import { nav } from '@/navigation/nav'
import { useTemplate } from './hook/useTemplate'

export const Template = ({ children }: { children: React.ReactNode }) => {
  const { path } = useTemplate()

  return (
    <div css={styles.container({ path })}>
      <div css={styles.frame}>
        <Header currentPath={path} />
        <div css={styles.main}>
          <Title title={nav[path].title} description={nav[path].description} />
          <div css={styles.content}>{children}</div>
        </div>
        <Footer css={styles.footer} />
      </div>
      <small css={styles.copyright}>&copy; Tetsuya Sato</small>
    </div>
  )
}

const styles = {
  container: ({ path }: { path: string }) => css`
    width: 100%;
    height: 100vh;
    padding: 40px 32px 44px;
    position: relative;
    user-select: none;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: url(${nav[path].bg}) no-repeat center center / cover;
      z-index: -2;
    }

    // About用のcssスタイル定義
    &::after {
      content: '';
      display: ${path === '/about/' ? 'block' : 'none'};
      width: 1000px;
      height: 100%;
      background: #fff;
      opacity: 0.5;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  `,
  frame: css`
    width: 100%;
    height: 100%;
    border-top: 1.5px solid #353535;
    border-bottom: 1.5px solid #353535;
    position: relative;
  `,
  // ToDo positionのtopはNavMenuのコンテンツの高さによって変えるようにする
  main: css`
    position: absolute;
    top: calc(48px + 36px);
    left: calc(80px + 50px);
    user-select: text;
    width: 84vw;
  `,
  content: css`
    margin-top: 32px;
  `,
  footer: css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  `,
  copyright: css`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    text-align: center;
    height: 44px;
    line-height: 44px;
  `,
}
