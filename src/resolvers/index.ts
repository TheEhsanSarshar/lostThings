const books = [
   {
      title: 'The Awakening',
      author: 'Kate Chopin',
   },
   {
      title: 'City of Glass',
      author: 'Paul Auster',
   },
];

let x = 23
const resolvers = {
   Query: {
      books: () => books,
   },
};
export { resolvers };