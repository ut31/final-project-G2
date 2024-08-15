import React from 'react'
import './Input.css'

const Input = () => {

  // const [searchTerm, setSearchTerm]=useState('');

  // const searchMovies = async (Title) => {
  //   const response = await fetch(`${API_URL}&s=${Title}`);
  //   const data = await response.json();

  //   setMovies(data.Search);
  // };

  // useEffect(() => {
  //   searchMovies("Spiderman");
  // }, []);

  return (

    <>
    <div>
    <form action="action_page.php"> 
        <button type="submit " className='searchBtn'>🔎</button>
        <input className="searchSpace" type="text" placeholder="Search the Website..." name="search"></input> 
        </form>
    </div>
    </>
    
    )
}

export default Input