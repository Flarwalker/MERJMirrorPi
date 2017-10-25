let NewsAPI= require('newsapi');

let newsapi = new NewsAPI('b534fc994e2d41158d033455ba123406');

// To query articles:
newsapi.articles({
  source: 'associated-press', // required
  sortBy: 'top' // optional
}).then(articlesResponse => {
  console.log(articlesResponse);
    /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
});

// To query sources:
newsapi.sources({
  category: 'technology', // optional
  language: 'en', // optional
  country: 'us' // optional
}).then(sourcesResponse => {
  console.log(sourcesResponse);
  /*
    {
      status: "ok",
      sources: [
        ...
      ]
    }
  */
});

// For both methods you can also use traditional Node callback style:
newsapi.articles({
  source: 'associated-press',
  sortBy: 'top'
}, (err, articlesResponse) => {
  if (err) console.error(err);
  else console.log(articlesResponse);
});
