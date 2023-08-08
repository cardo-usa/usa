type Config = {
  forceCustomDomain?: boolean;
};

export const getBaseUrl = ({ forceCustomDomain = false }: Config = {}): URL => {
  let baseUrl: URL;
  if (process.env['VERCEL_URL'] && !forceCustomDomain) {
    baseUrl = new URL(`https://${process.env['VERCEL_URL']}`);
  } else if (forceCustomDomain) {
    baseUrl = new URL('https://usa.dev/');
  } else {
    baseUrl = new URL(`http://localhost:${process.env['PORT'] || 3000}`);
  }

  if (!baseUrl.pathname.endsWith('/')) {
    baseUrl.pathname = `${baseUrl.pathname}/`;
  }

  return baseUrl;
};
