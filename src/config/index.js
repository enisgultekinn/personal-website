export const title = 'Enis Gültekin';
export const description =
  'Enis Gültekin is a frontend developer and writer. He writes about JavaScript and his experiences here.';
export const url = 'https://enisgultekin.me';
export const author = {
  name: 'Enis Gültekin',
  email: 'enisgltekn@gmail.com',
  link: 'https://enisgultekin.me'
};

export const alternates = path => ({
  canonical: path,
  types: {
    'application/rss+xml': `${url}/rss.xml`
  }
});
