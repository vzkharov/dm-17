const articleRegex = /[^A-Z0-9]/gi;

const formatProductArticle = (article: string) => {
  return article.replace(articleRegex, '').toUpperCase();
};

export { formatProductArticle };
