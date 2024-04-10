import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../store/slices/filterSlice';

const FilterByCategory = () => {
  const dispatch = useDispatch();

  const categories = [
    'ALLA', 'VÅRD', 'IT', 'HR', 'EKONOMI', 'BANK', 'FINANS', 
    'JURIDIK', 'KONTOR', 'LÖN', 'MANAGEMENT', 'SÄLJ', 'MARKNAD', 'REACT', 'JAVASCRIPT', 'VUE', 'SVELTE', 'ANGULAR', 'FRONTEND', 'BACKEND', 'TEKNIK'
  ];  

  const handleCategoryClick = (category: string) => {
  const searchTerm = category === "ALLA" ? "" : category;
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {categories.map((category) => (
        <button 
          key={category} 
          onClick={() => handleCategoryClick(category)}
          style={{
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            border: '1px solid #ccc',
            background: 'white',
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterByCategory;
