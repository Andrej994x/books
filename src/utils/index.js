export const SorterFunction = (a, b) => a.author.localeCompare(b.author)

export const FilterFunction = (bookData, { author, genre, title }) => {
    if (author === "" && genre === "" && title === "") {
      console.log("EMPTY FILTERS");
      return bookData?.sort(SorterFunction);
    }

    console.log('Filter function called with: ', { author, genre, title });
    const filtered = bookData?.filter((book) => {

      const hasAuthor = book.author.toLowerCase().includes(author.toLowerCase());
      const hasTitle = book.title.toLowerCase().includes(title.toLowerCase());
      const hasGenre = book.genre.toLowerCase().includes(genre.toLowerCase());

      if (author !== '' && title !== '' && genre !== '') {
        return hasAuthor && hasTitle && hasGenre
      } else if (author === '' && title !== '' && genre !== '') {
        return hasTitle && hasGenre
      } else if (author !== '' && title === '' && genre !== '') {
        return hasAuthor && hasGenre
      } else if (author !== '' && title !== '' && genre === '') {
        return hasAuthor && hasTitle
      } else if (author !== '' && title === '' && genre === '') {
        return hasAuthor;
      } else if (author === '' && title !== '' && genre === '') {
        return hasTitle;
      } else if (author === '' && title === '' && genre !== '') {
        return hasGenre
      } else {
        return bookData;
      }
    });

    return filtered?.sort(SorterFunction);
  }