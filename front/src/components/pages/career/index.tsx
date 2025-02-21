import { css } from '@emotion/react'
import { Colors } from '@/consts/Colors'
import { useCareer } from './useCareer'

// カテゴリごとの色を定義
const categoryColors = {
  _職歴: {
    bg: 'rgba(76, 175, 80, 0.08)',
    border: 'rgba(76, 175, 80, 0.3)',
    dot: 'rgb(76, 175, 80)',
  },
  _学歴: {
    bg: 'rgba(233, 30, 99, 0.08)',
    border: 'rgba(233, 30, 99, 0.3)',
    dot: 'rgb(233, 30, 99)',
  },
  '_資格・認定': {
    bg: 'rgba(33, 150, 243, 0.08)',
    border: 'rgba(33, 150, 243, 0.3)',
    dot: 'rgb(33, 150, 243)',
  },
  all: {
    bg: 'rgba(255, 255, 255, 0.5)',
    border: 'rgba(255, 255, 255, 0.8)',
    dot: Colors.main.dark,
  },
}

export const Career = () => {
  const { categories, selectedCategory, setSelectedCategory, filteredData, years } = useCareer()

  const scrollToYear = (year: number) => {
    const element = document.getElementById(`year-${year}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const getCategoryColor = (category: string) => {
    return categoryColors[category as keyof typeof categoryColors] || categoryColors['all']
  }

  return (
    <div css={styles.container}>
      <div css={styles.filter}>
        <button css={styles.filterButton(selectedCategory === 'all')} onClick={() => setSelectedCategory('all')}>
          全て
        </button>
        {categories.map((category) => (
          <button
            key={category}
            css={styles.filterButton(selectedCategory === category)}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div css={styles.timeline}>
        <div css={styles.yearBackground}>
          {years.map((year) => (
            <span key={year} css={styles.yearLabel} onClick={() => scrollToYear(year)}>
              {year}
            </span>
          ))}
        </div>

        <div css={styles.mainContent}>
          {filteredData.map((item) => (
            <div key={`${item.year}-${item.title}`} css={styles.timelineItem} id={`year-${item.year}`}>
              <div css={styles.timelineDate}>
                <span>{item.year}</span>
                <div css={styles.dot(getCategoryColor(item.category))} />
              </div>
              <div css={styles.timelineContent(getCategoryColor(item.category))}>
                <h3>{item.title}</h3>
                {item.subtitle && <p css={styles.subtitle}>{item.subtitle}</p>}
                {item.details && (
                  <ul>
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
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
    width: 100%;
    max-width: 90%;
    position: relative;
    height: calc(100vh - 300px);
    overflow: auto;
    padding: 0 20px;
  `,
  filter: css`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    padding: 20px 0;
    z-index: 10;
    border-bottom: 1px solid rgba(49, 65, 75, 0.1);
  `,
  filterButton: (isSelected: boolean) => css`
    padding: 10px 24px;
    border: none;
    border-radius: 20px;
    background: ${isSelected ? Colors.main.dark : 'rgba(49, 65, 75, 0.05)'};
    color: ${isSelected ? Colors.white.normal : Colors.font.sub};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    letter-spacing: 0.03em;

    &:hover {
      background: ${isSelected ? Colors.main.dark : 'rgba(49, 65, 75, 0.1)'};
      transform: translateY(-1px);
    }
  `,
  timeline: css`
    display: flex;
    position: relative;
    margin-left: 40px;
    padding-top: 20px;
    padding-bottom: 40px;
    min-height: calc(100% - 100px);
    overflow: visible;
  `,
  yearBackground: css`
    position: sticky;
    top: 100px;
    left: 0;
    height: fit-content;
    width: 80px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px 0;
    z-index: 5;
  `,
  yearLabel: css`
    color: ${Colors.font.sub2};
    opacity: 0.3;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    padding-left: 12px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 4px;
      height: 4px;
      background: ${Colors.main.dark};
      border-radius: 50%;
      transform: translateY(-50%) scale(0);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
      opacity: 0.8;
      color: ${Colors.main.dark};
      transform: translateX(8px);
      padding-left: 16px;

      &::before {
        transform: translateY(-50%) scale(1);
        opacity: 1;
      }
    }
  `,
  mainContent: css`
    margin-left: 80px;
    flex: 1;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: -40px;
      top: 0;
      bottom: 0;
      width: 1px;
      background: linear-gradient(
        to bottom,
        transparent,
        ${Colors.main.dark} 10%,
        ${Colors.main.dark} 90%,
        transparent
      );
      opacity: 0.2;
    }
  `,
  timelineItem: css`
    display: flex;
    margin-bottom: 60px;
    position: relative;
    opacity: 0;
    animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  timelineDate: css`
    width: 80px;
    position: relative;

    span {
      color: ${Colors.font.main};
      font-weight: 600;
      font-size: 15px;
      letter-spacing: 0.05em;
    }
  `,
  dot: (categoryColor: (typeof categoryColors)['all']) => css`
    position: absolute;
    left: -44px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${Colors.white.normal};
    border: 2px solid ${categoryColor.dot};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.5);

    &:hover {
      transform: translateY(-50%) scale(1.2);
      box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.7);
    }
  `,
  timelineContent: (categoryColor: (typeof categoryColors)['all']) => css`
    flex: 1;
    padding: 24px 32px;
    background: ${categoryColor.bg};
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(49, 65, 75, 0.05);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(8px);
    border: 1px solid ${categoryColor.border};

    @media (max-width: 768px) {
      padding: 16px 20px;
    }

    &:hover {
      transform: translateY(-2px) translateX(4px);
      box-shadow: 0 8px 28px rgba(49, 65, 75, 0.12);
      background: ${categoryColor.bg.replace('0.08', '0.12')};
    }

    h3 {
      color: ${Colors.font.main};
      margin-bottom: 8px;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0.02em;
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 100%;
        height: 2px;
        background: ${categoryColor.dot};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0.3;
      }
    }

    &:hover h3::after {
      transform: scaleX(1);
    }
  `,
  subtitle: css`
    color: ${Colors.font.sub};
    font-size: 14px;
    letter-spacing: 0.02em;
    margin: 0;
    line-height: 1.6;
  `,
}
