import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "service worker registration success with scope " +
                registration.scope
            );
          },
          function (err) {
            console.error(`Service Worker registration failed : ${err}`);
          }
        );
      });
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
