import { css } from '@emotion/react'
import { Assets } from '@/consts/Assets'
import { Colors } from '@/consts/Colors'

export const About = () => {
  return (
    <div css={styles.container}>
      <div css={styles.profile}>
        <img src={Assets.img.about.profile} alt='profile' />
        <div css={styles.profileText}>
          <p>
            佐藤 哲也 (さとう てつや)
            <br />
            秋田県大館市出身。名古屋大学大学院卒。
            <br />
            ITコンサルティング会社に勤務し、主に開発・研究を担当。
            <br />
            ITを駆使して、夢を持つ誰かのお手伝いをすることに魅力を持っています。
            <br />
            まだまだ未熟者ですが、お手伝いできることがあれば是非お声がけください！
          </p>
        </div>
      </div>
      <div css={styles.news}>
        <h4>news</h4>
        <div css={styles.newsList}>
          <div css={styles.newsItem}>
            <p>2025/01/17</p>
            <p>ポートフォリオサイトを公開しました。</p>
          </div>
          <div css={styles.newsItem}>
            <p>2025/01/17</p>
            <p>AWS Cloud Practitionerに合格しました。</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 56px;
  `,
  profile: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 40px;
  `,
  profileText: css`
    width: 100%;
    height: 100%;
    line-height: 2.5;
    color: ${Colors.font.main};
  `,
  news: css`
    width: 100%;
    height: 100%;
    color: ${Colors.font.sub};
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
  newsList: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
  newsItem: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    color: ${Colors.font.sub};
    font-size: 14px;
  `,
}
