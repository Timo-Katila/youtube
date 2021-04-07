import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';

interface ChildProps {
  onFormSubmit(term : string) : string;
}

const SearchBar : React.FC<ChildProps> = ({onFormSubmit}) => {

  const searchInput = React.useRef<HTMLInputElement>(null);
  const [term, setTerm] = useState('');

  const onSubmit = (event : any) => {
    event.preventDefault();
    onFormSubmit(term);
  }

  useEffect(() => {
    if (searchInput.current) {
      searchInput.current.focus()
    }
   },[]);

  return (
    
    <Form onSubmit={onSubmit} className="mt-3">
      <Form.Label>Search from youtube</Form.Label>
      <Form.Control ref={searchInput} type="text" value={term} onChange={(event => setTerm(event.target.value))}/>
    </Form>
  )
};
export default SearchBar;