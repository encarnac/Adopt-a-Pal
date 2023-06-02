import { React, useEffect, useState } from "react";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import FilterBar from "./filterbar";
import CarouselCard from '../../components/CarouselCard';

function Browse(props) {
  const [animalUrl, setAnimalUrl] = useState("/api/animals");
  const handleAnimalUrl = (e) => {
    setAnimalUrl(e);
  }

  const [ animals, setAnimals ] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch( animalUrl ); 

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const animalData = await response.json();

        setAnimals(animalData);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [animalUrl]);

//  const animals = [
//    {
//      added: "2023-05-08 17:30:22.420313+00:00",
//      avatars: [
//        "https://storage.googleapis.com/adopt-a-pal-pics/Buttterscotch2673-721",
//        "https://storage.googleapis.com/adopt-a-pal-pics/Buttterscotch2673-4382",
//        "https://storage.googleapis.com/adopt-a-pal-pics/Buttterscotch2673-3876",
//      ],
//      availability: "Available",
//      species: "Cat",
//      breed: "Medium Hair",
//      dispositions: [
//        "Good with other animals",
//        "Good with children",
//        "Animal must be leashed at all times",
//      ],
//      name: "Buttterscotch",
//      id: 5143677177430016,
//    },
//    {
//      added: "2023-04-29 17:30:35.750316+00:00",
//      avatars: [
//        "https://storage.googleapis.com/adopt-a-pal-pics/Clair8747-5528",
//        "https://storage.googleapis.com/adopt-a-pal-pics/Clair8747-2300",
//        "https://storage.googleapis.com/adopt-a-pal-pics/Clair8747-8854",
//      ],
//      availability: "Available",
//      species: "Dog",
//      breed: "Cattle Dog",
//      dispositions: [
//        "Good with other animals",
//        "Animal must be leashed at all times",
//      ],
//      name: "Clair",
//      id: 5168126949851136,
//    },
//  ];

  return (
    <>
      <NavBar currentPage={"browse"} />
      <div className="w-[1280px] flex flex-col mt-36 mb-10 mx-auto justify-center ">
        {/* PAGE TITLE */}
        <div className="mb-8 text-start text-2xl font-bold text-brown">
          Browse Pets
        </div>

        {/* FILTER AND SEARCH BAR*/}
        <FilterBar handleAnimalUrl={handleAnimalUrl} />

        {/* PAGE CONTENT */}
        <div className="carousel carousel-center w-[50em] mx-auto mt-12 mb-28 space-x-8 rounded-box">
          {/* Creates CarouselCard for each item in list of animal instances */}
          {animals?.map((animal, i) => (
            <div className="carousel-item">
              <CarouselCard animal={animal} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Browse;
