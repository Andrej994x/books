import { useEffect, useState } from 'react';
import './App.css';
import { Filters, Header, Table } from './components';
import { useBooks } from './hooks/useBooks';
import { FilterFunction } from './utils';

function App() {
  const [filters, setFilters] = useState({ author: "", genre: "", title: "" });
  const [filtered, setFiltered] = useState([]);

  const bookData = useBooks();

  const applyFilters = ({ author, genre, title }) => {
    console.log('Apply filters: ', { author, genre, title })
    setFilters({ author, genre, title })
  }

  useEffect(() => {
    setFiltered(FilterFunction(bookData, filters));
  }, [filters, bookData])

  return (
    <div className="App">
      <Header></Header>
      <div className='app-wrapper'>
        <Filters onApply={applyFilters}></Filters>
        <Table bookData={filtered}></Table>
      </div>
    </div >
  );
}

export default App;
