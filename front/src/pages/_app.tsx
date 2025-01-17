import { css, Global } from '@emotion/react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import normalize from 'normalize.css'
import { useEffect, useState } from 'react'
import { RecoilRoot } from 'recoil'
import { Template } from '../components/parts/template/Template'
import type { AppProps } from 'next/app'

const globalStyle = css`
  ${normalize}
  a {
    text-decoration: none;
    color: inherit;
  }

  *,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  a {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Yu Gothic', 'Noto Sans JP', sans-serif;
  }

  html {
    font-size: 16px;
  }

  body {
  }

  button {
    &:not(:disabled) {
      cursor: pointer;
    }
  }

  ul {
    li {
      list-style: none;
    }
  }
`

const App = ({ Component, pageProps }: AppProps) => {
  // hydration mismatch error回避
  // https://react.dev/reference/react-dom/client/hydrateRoot#handling-different-client-and-server-content
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [setIsMounted])

  return (
    <RecoilRoot>
      <Global styles={globalStyle} />
      {isMounted && (
        <Template>
          <Component {...pageProps} />
        </Template>
      )}
    </RecoilRoot>
  )
}

export default App
