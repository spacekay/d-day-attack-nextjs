import 'bootstrap/dist/css/bootstrap.min.css';
import { NextPageContext } from 'next';
import cookies from 'next-cookies';
import type { AppContext, AppProps } from 'next/app';
import { Gowun_Dodum } from 'next/font/google';
import { Router } from 'next/router';
import RootLayout from "../components/layout";
import '../styles/global.css';
import base64, {decode} from 'js-base64';
import { SessionProvider } from 'next-auth/react';

const krFont = Gowun_Dodum({
  subsets: ['latin'],
  weight: '400'
});

function MyApp({ Component, pageProps }: AppProps) {
  
  return <>
    <main className={krFont.className}>
    <SessionProvider session={pageProps.session}>
  <RootLayout>
  <p>common</p>
  </RootLayout>
  <p><br/><br/></p>
  <Component {...pageProps} />
  </SessionProvider>
  </main>
  {/* <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="anonymous" /> */}
  {/* 이렇게 crossOrigin */}
  </>
}

// MyApp.getInitialProps = async (context: AppContext) =>  {
//   const {ctx, Component} = context;
//   const {token} = cookies(ctx);
//   let pageProps = {};
//   let loginData : any;

//   try{
//     ctx.res?.setHeader('set-cookie', token);
//     const decodedToken = decode(token.split('.')[1]);
//     const decodedUser = JSON.parse(decodedToken);
//     loginData = {
//       'email': decodedUser.email,
//       'name': decodedUser.name
//     };
//   } catch (error: any) {
//     loginData = null;
//   }

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   return {pageProps, loginData};
// }

export default MyApp