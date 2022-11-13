import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
