import { useState, useEffect } from "react";
import Card from "./components/Card";
import Select from "./components/Select";
import Spinner from "./components/Spinner";
import {getDog} from './model/breedsModel';


const initialDog = {
  img:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
  breed: {
    id: "1",
    name: "Breed"
  }
}

function App() {
  const [dog, setDog] = useState(initialDog);
  const [fetching, setFetching] = useState(true);

  const updateDog = (dogID) => {
    setFetching(true);
    getDog(dogID).then(data => {
      const [dog] = data;
      let {url:img, breeds:[breed]} = dog;
      if(!breed){
        breed = {
          id:0,
          name:'random'
        }
      }
      const newDog = {
        img,
        breed
      }
      setDog(newDog);
      setFetching(false);
    })
  }

  useEffect(() => {
    updateDog();
  }, []);

  return (
    <div className="app">
      <Select updateDog={updateDog}/>
      {fetching ? <Spinner /> : <Card dog={dog} updateDog={updateDog}/>}
    </div>
  );
}

export default App;
