import { css } from '@emotion/react'
import { Line } from './Line'
import Link from 'next/link'
import { nav } from '@/navigation/nav'

export const Header = ({ currentPath }: { currentPath: string }) => {
  return (
    <div css={styles.header}>
      <div css={styles.leftComponent}>
        <Line height={700} />
        <HeaderTitle />
        <Line height={540} />
        <HeaderNav currentPath={currentPath} />
      </div>
      <div css={styles.rightComponent}>
        <HeaderNews />
      </div>
    </div>
  )
}

const HeaderTitle = () => {
  return (
    <Link href='/' css={styles.headerTitle}>
      <h1 css={styles.nameJp}>
        {'佐藤哲也'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </h1>
      <div css={styles.nameDivider}>|</div>
      <div css={styles.nameEn}>
        {'SATO  TETSUYA'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
    </Link>
  )
}

const HeaderNav = ({ currentPath }: { currentPath: string }) => {
  return (
    <div css={styles.headerNav}>
      {Object.entries(nav).map(
        ([key, item]) =>
          item.layer === 1 && (
            <Link key={key} href={item.path} css={[styles.navItem, currentPath === item.path && styles.activeNavItem]}>
              {item.title}
            </Link>
          ),
      )}
    </div>
  )
}

const HeaderNews = () => {
  return (
    <div css={styles.headerNews}>
      <span>news</span>
      <span>|</span>
      <span>2024年1月3日 サイト公開</span>
    </div>
  )
}

const styles = {
  header: css`
    display: flex;
    justify-content: space-between;
  `,
  leftComponent: css`
    display: flex;
  `,
  rightComponent: css`
    display: flex;
  `,
  headerTitle: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 77px;
    height: 400px;
    padding: 16px 24px 0;
    background-color: #31414b;
    color: #fff;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50px;
      // ToDo 調整が難しいかもしれないので、画像として取得して背景画像として設定する方が良いかも
      background: linear-gradient(to bottom right, transparent 50%, white 50%);
    }

    > * {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
  nameJp: css`
    font-size: 22px;
    gap: 8px;
  `,
  nameDivider: css`
    color: #b4b4b4;
  `,
  nameEn: css`
    font-size: 9px;
    gap: 3px;
    color: #b4b4b4;
  `,
  headerNav: css`
    height: 48px;
    width: 100%;
    color: #353535;
    border-bottom: 1.5px solid #353535;
    font-size: 12px;
  `,
  navItem: css`
    height: 48px;
    padding: 16px 32px;
    display: inline-block;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(49, 65, 75, 0.15);
    }
  `,
  activeNavItem: css`
    background-color: #31414b;
    opacity: 0.95;
    color: #fff;

    &:hover {
      background-color: #31414b;
    }
  `,
  headerNews: css`
    height: 48px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: #353535;
    border-bottom: 1.5px solid #353535;
  `,
}
