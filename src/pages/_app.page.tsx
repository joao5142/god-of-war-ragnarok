import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import 'keen-slider/keen-slider.min.css'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
