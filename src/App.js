import { useState, useEffect } from "react";
import Card from "./components/Card";
import Error from "./components/Error";
import Select from "./components/Select";
import Spinner from "./components/Spinner";
import {getDog} from './model/breedsModel';


const initialDog = {
  img:"https://cdn3.volusion.com/euhfr.xvuyx/v/vspfiles/photos/EG1155-1374-2.jpg?v-cache=1325487014",
  breed: {
    id: "1",
    name: "Sorry, no Dog!"
  }
}

function App() {
  const [dog, setDog] = useState(initialDog);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(null);

  const updateDog = (dogID) => {
    setFetching(true);
    getDog(dogID)
    .then(data => {
      const [dog] = data;
      let {url:img, breeds:[breed]} = dog;
      if(!breed){
        breed = {
          id:0,
          name:'random'
        }
      }
      console.log("Todo bien. ")
      const newDog = {
        img,
        breed
      }
      setDog(newDog);
      setFetching(false);
      setError(null);
    })
    .catch((error)=>{
      console.log(error);
      setError("Error loading the dog");
      setFetching(false);
    })
  }

  useEffect(() => {
    updateDog();
  }, []);

  return (
    <div className="app">
      <Select updateDog={updateDog}/>
      {error && <Error error={error}/>}
      {fetching ? <Spinner /> : <Card dog={dog} updateDog={updateDog}/>} 
      
    </div>
  );
}

export default App;
