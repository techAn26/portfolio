import { css } from '@emotion/react'

export const Title = ({ title, description }: { title: string; description: string }) => {
  if (title === '') {
    return null
  }

  return (
    <div css={styles.container}>
      <h1 css={styles.title}>{title}</h1>
      <p css={styles.description}>{description}</p>
    </div>
  )
}

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  title: css`
    font-size: 28px;
    font-weight: 700;
    color: #3f3f3f;
  `,
  description: css`
    font-size: 16px;
    color: #3f3f3f;
  `,
}
