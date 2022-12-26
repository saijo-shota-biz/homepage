import cheerio from 'cheerio';

import TagElement = cheerio.TagElement;

export const createTOC = (body: string) => {
  const $ = cheerio.load(body);
  const headings = $('h2, h3').toArray();
  return headings.map((data) => {
    const d = data as TagElement;
    return {
      text: d.children[0].data,
      id: d.attribs.id,
      name: d.name,
    };
  });
};
