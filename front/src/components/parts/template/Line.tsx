import { css } from '@emotion/react'

export const Line = ({ height }: { height: number }) => {
  return <div css={styles.line(height)} />
}

const styles = {
  line: (height: number) => css`
    height: ${height}px;
    width: 1.5px;
    background-color: #353535;
  `,
}
