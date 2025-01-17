import { css } from '@emotion/react'
import { Line } from './Line'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

// ToDo フッターの下にcopyrightを表示する
export const Footer = ({ className }: { className?: string }) => {
  return (
    <div css={styles.footer} className={className}>
      <div css={styles.icon}>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <Line height={100} />
    </div>
  )
}

const styles = {
  footer: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  `,
  icon: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
    transform: translateX(45%);

    svg {
      font-size: 1.5rem;
      color: #333;
      transition: color 0.3s ease;
      cursor: pointer;

      &:hover {
        color: #31414b;
      }
    }
  `,
}
