import cheerio from 'cheerio';

export const createSummary = (body: string) => {
  return cheerio.load(body).root().text();
};
