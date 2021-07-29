import '../styles/globals.css'
import "../register-web-components";

import { applyPolyfills, defineCustomElements } from 'wc/loader'
import App from 'next/app';

export default class MyApp extends App {
  componentDidMount() {
    applyPolyfills().then(() => {
      defineCustomElements(window);
    });
  }
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}