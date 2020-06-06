import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from "@frontendmasters/pet"; //Custom API
import useDropdown from './useDropdown';

const SearchParams = () => {
    const [location, setLocation] = useState("San Fracisco, CA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog",ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

    //uesEffect will only render after SearchParams have gone through. NOT IMMEDIATE
    useEffect(() => {
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then(({ breeds: apiBreeds }) => {
            const breedStrings = apiBreeds.map(( { name }) => name);
            setBreeds(breedStrings); 
        }, console.error);
    }, [animal, setBreed, setBreeds]); //[animal, setBreed, setBreeds] if anything changes on this, render again
    //You can also use empty brackets line 20 '}, [animal, setBreed, setBreeds]);' and it wont allow it load the animals again


    return(
        <div className="search-params">
            <form>
                <label htmlFor= "location">
                    Location
                    <input 
                    id="location" 
                    value={location}
                     placeholder="Location" onChange={e => setLocation(e.target.value)}
                    />
                </label>

                <AnimalDropdown />
                <BreedDropdown />
                
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;

//Most Common Hooks are useEffect and useState(most common)