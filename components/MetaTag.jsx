import React from "react";
import Head from "next/head";
const MetaTag = () => {
  const title = "Mushfikunnabi Nijhum | Software Engineer";
  const description =
    "A dreamer who dreams about being a successful person in every aspect of my life. Currently, I have been working as a full time software engineer at Intercloud Limited which is located in Dhaka, Bangladesh. Besides, during my leisure time, you can find me playing FIFA, watching TV-Series, Movies or hanging out with my friends. Whenever I get a chance to do something, I usually do not stop until I finish it.";
  const keywords =
    "Software, Developer, Engineer, Mushfikunnabi, Nijhum, Softaware Engineer, Software Developer, Frontend Developer, React, JavaScript, React Developer, Mushfikunnabi Nijhum, Kishoreganj, kishorgonj, kishoregonj, kgbhs, gurudoyal";

  const site_url = "https://mnijhum.com";
  const image_url = site_url + "/thumbnail.jpg";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Mushfikunnabi Nijhum" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={site_url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image_url} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑‍💻</text></svg>"
      />
    </Head>
  );
};

export default MetaTag;
