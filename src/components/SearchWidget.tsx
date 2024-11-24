import { useState, useEffect, ChangeEvent } from "react";
import useFetch from "../hooks/useFetch";
import Header from "./Header";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import ImageContainer from "./ImageContainer";

const allBreedsURL = "https://dog.ceo/api/breeds/list/all";

function SearchWidget() {
  //destructure useFetch to get access to isLoading and the fetchData method
  const { isLoading, fetchData } = useFetch();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [randomImage, setRandomImage] = useState<string | null>(null);
  const [allBreeds, setAllBreeds] = useState<string[]>([]);

  // only need to fetch all the dog breeds once
  useEffect(() => {
    fetchData<{ message: Array<string> }>(allBreedsURL, (data) => {
      setAllBreeds(Object.keys(data.message));
    });
  }, []);

  // only run the filter once we've got at least two characters in the input to lessen load
  const filteredBreeds =
    searchTerm.length >= 2
      ? allBreeds.filter((breed) => breed.toLowerCase().startsWith(searchTerm))
      : [];

  const getDogData = (breed: string) => {
    fetchData<{ message: string }>(
      `https://dog.ceo/api/breed/${breed}/images/random`,
      (data) => {
        setRandomImage(data.message);
      }
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
    // get rid of the image when the input is empty
    if (e.target.value.trim() === "") {
      setRandomImage(null);
    }
  };

  return (
    <div className="search-widget block max-w-7xl w-full mx-auto my-0">
      <div className="search-widget__inner">
        <Header />
        <SearchForm handleChange={handleChange} />
        <SearchResults
          filteredBreeds={filteredBreeds}
          getDogData={getDogData}
        />
        {isLoading ? (
          <p className="w-11/12 md:w-2/4 lg:w-96 mx-auto my-2">Loading...</p>
        ) : (
          <ImageContainer randomImage={randomImage} />
        )}
      </div>
    </div>
  );
}

export default SearchWidget;
