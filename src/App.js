import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {

  const [editMode, setEditMode] = useState(false);

  const handleEditMode = (e) => {
    e.stopPropagation()
    setEditMode(true);
  }

  const modalElementRef = useRef(null);

  useEffect( () => {
    const handleOutsideClick = (e) => {
      if (modalElementRef.current && !modalElementRef.current.contains(e.target)){
        setEditMode(false);
      }
    }
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick)
  } )



  return (
    <div className="App">

      { editMode ? <div ref={modalElementRef} > EditMode </div> : <div> <button onClick={ handleEditMode } > Go Edit mode </button>  Not edit mode </div> }


    </div>
  );
}

export default App;
