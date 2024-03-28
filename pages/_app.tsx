import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { Gowun_Dodum } from 'next/font/google';
import RootLayout from "../components/layout";
import '../styles/global.css';

const krFont = Gowun_Dodum({
  subsets: ['latin'],
  weight: '400'
});

function MyApp({ Component, pageProps }: AppProps) {
  
  return <>
    <main className={krFont.className}>
  <RootLayout>
  <p>common</p>
  </RootLayout>
  <p><br/><br/></p>
  <Component {...pageProps} />
  </main>
  {/* <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="anonymous" /> */}
  {/* 이렇게 crossOrigin */}
  </>
}

export default MyApp