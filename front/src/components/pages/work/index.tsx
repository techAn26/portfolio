import { css } from '@emotion/react'
import { Colors } from '@/consts/Colors'

export const Work = () => {
  const works = [
    {
      id: 1,
      title: 'プロジェクト1',
      description: 'プロジェクトの説明文がここに入ります',
      image: '/path/to/image1.jpg',
      technologies: ['React', 'TypeScript', 'Next.js'],
    },
    {
      id: 2,
      title: 'プロジェクト2',
      description: 'プロジェクトの説明文がここに入ります',
      image: '/path/to/image2.jpg',
      technologies: ['Node.js', 'Express', 'MongoDB'],
    },
    // 必要に応じて作品を追加
  ]

  return (
    <div css={styles.container}>
      <div css={styles.workGrid}>
        {works.map((work) => (
          <div key={work.id} css={styles.workCard}>
            <div css={styles.imageWrapper}>
              <img
                src={work.image}
                alt={work.title}
                css={css`
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                `}
              />
            </div>
            <div css={styles.cardContent}>
              <h2 css={styles.workTitle}>{work.title}</h2>
              <p css={styles.description}>{work.description}</p>
              <div css={styles.techStack}>
                {work.technologies.map((tech, index) => (
                  <span key={index} css={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: css`
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px 24px;
  `,
  title: css`
    font-size: 28px;
    font-weight: bold;
    color: ${Colors.font.main};
    margin-bottom: 40px;
  `,
  workGrid: css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `,
  workCard: css`
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-4px);
    }
  `,
  imageWrapper: css`
    position: relative;
    width: 100%;
    height: 200px;
  `,
  cardContent: css`
    padding: 20px;
  `,
  workTitle: css`
    font-size: 20px;
    font-weight: 500;
    color: ${Colors.font.main};
    margin-bottom: 12px;
  `,
  description: css`
    font-size: 14px;
    color: ${Colors.font.sub};
    margin-bottom: 16px;
    line-height: 1.6;
  `,
  techStack: css`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `,
  techTag: css`
    background: ${Colors.main.normal};
    color: ${Colors.main.dark};
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 12px;
  `,
}
