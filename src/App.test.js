import { FilterFunction, SorterFunction } from './utils';

const bookData = [
  { author: 'Jane Austen', title: 'Pride and Prejudice', genre: 'Romance' },
  { author: 'Emily Bronte', title: 'Wuthering Heights', genre: 'Gothic' },
  { author: 'Charlotte Bronte', title: 'Jane Eyre', genre: 'Gothic' },
];

test('should return the original book data if all filter values are empty', () => {
  const filters = { author: '', genre: '', title: '' };
  const result = FilterFunction(bookData, filters);

  expect(result).toEqual(bookData);
});

test('should filter the book data based on the provided filters', () => {
  const filters = { author: 'bronte', genre: 'gothic', title: '' };
  const result = FilterFunction(bookData, filters);

  expect(result).toEqual([
    { author: 'Charlotte Bronte', title: 'Jane Eyre', genre: 'Gothic' },
    { author: 'Emily Bronte', title: 'Wuthering Heights', genre: 'Gothic' },
  ]);
});

test('should log "EMPTY FILTERS" if all filter values are empty', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  const filters = { author: '', genre: '', title: '' };
  FilterFunction(bookData, filters);

  expect(consoleSpy).toHaveBeenCalledWith('EMPTY FILTERS');

  consoleSpy.mockRestore();
});

test('should sort an array of objects by author name', () => {
  const unsortedArray = [
    { author: 'Zoe Smith', title: 'My Book', genre: 'Mystery' },
    { author: 'Alice Brown', title: 'Another Book', genre: 'Thriller' },
    { author: 'John Doe', title: 'A Third Book', genre: 'Romance' },
  ];

  const sortedArray = [
    { author: 'Alice Brown', title: 'Another Book', genre: 'Thriller' },
    { author: 'John Doe', title: 'A Third Book', genre: 'Romance' },
    { author: 'Zoe Smith', title: 'My Book', genre: 'Mystery' },
  ];

  expect(unsortedArray.sort(SorterFunction)).toEqual(sortedArray);
});


