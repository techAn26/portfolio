import { css } from '@emotion/react'
import { Colors } from '@/consts/Colors'
import Image from 'next/image'
import { useSkill } from './useSkill'

export const Skill = () => {
  const { categories, renderStars, selectedCategory, setSelectedCategory } = useSkill()

  return (
    <div css={styles.container}>
      {/* カテゴリー選択ボタン */}
      <div css={styles.categoryButtons}>
        {categories.map((category, index) => (
          <button
            key={index}
            css={[styles.categoryButton, selectedCategory === index && styles.activeCategoryButton]}
            onClick={() => setSelectedCategory(index)}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* スクロール可能なコンテンツエリア */}
      <div css={styles.contentWrapper}>
        {/* スキルグリッド */}
        <div css={styles.skillCategories}>
          {Object.entries(categories[selectedCategory].groups).map(([groupName, skills]) => (
            <div key={groupName} css={styles.skillGroup}>
              <h3 css={styles.groupTitle}>{groupName}</h3>
              <div css={styles.skillList}>
                {skills.map((skill, index) => (
                  <div key={index} css={styles.skillItem}>
                    <div css={styles.skillHeader}>
                      <div css={styles.iconWrapper}>
                        <Image src={skill.icon} alt={skill.name} width={24} height={24} />
                      </div>
                      <span css={styles.skillName}>{skill.name}</span>
                    </div>
                    <div css={styles.stars}>{renderStars(skill.level)}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: css`
    max-width: 1200px;
  `,
  subtitle: css`
    font-size: 14px;
    color: ${Colors.font.sub};
    margin-bottom: 40px;
    letter-spacing: 0.1em;
  `,
  categoryButtons: css`
    display: flex;
    gap: 24px;
    margin-bottom: 48px;
  `,
  categoryButton: css`
    padding: 8px 32px;
    border: none;
    background: transparent;
    color: ${Colors.font.sub};
    font-size: 16px;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      color: ${Colors.main.dark};
    }

    &:hover::after {
      width: 100%;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background-color: ${Colors.main.dark};
      transition: width 0.3s ease;
    }
  `,
  activeCategoryButton: css`
    color: ${Colors.main.dark};
    font-weight: 500;

    &::after {
      width: 100%;
    }
  `,
  contentWrapper: css`
    width: 100%;
    overflow-x: auto;
    padding-bottom: 20px;

    &::-webkit-scrollbar {
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(49, 65, 75, 0.1);
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${Colors.main.dark};
      border-radius: 4px;
    }

    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  `,
  skillCategories: css`
    display: flex;
    gap: 48px;
    min-width: min-content;
  `,
  skillGroup: css`
    min-width: 280px;
    flex-shrink: 0;
  `,
  groupTitle: css`
    font-size: 20px;
    color: ${Colors.font.main};
    margin-bottom: 24px;
    font-weight: normal;
  `,
  skillList: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  skillItem: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  skillHeader: css`
    display: flex;
    align-items: center;
    gap: 12px;
  `,
  iconWrapper: css`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  skillName: css`
    font-size: 15px;
    color: ${Colors.font.main};
  `,
  stars: css`
    font-size: 12px;
    color: ${Colors.main.dark};
  `,
}
