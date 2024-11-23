import SearchResult from "./SearchResult";

interface IProps {
  readonly filteredBreeds: string[];
  readonly getDogData: (breed: string) => void;
}

function SearchResults(props: IProps) {
  const filteredBreeds = props.filteredBreeds;
  const getDogData = props.getDogData;

  return (
    <div className="search-results w-11/12 md:w-2/4 lg:w-96 mx-auto my-0">
      {filteredBreeds?.map((breed) => (
        <SearchResult key={breed} breed={breed} onClick={getDogData} />
      ))}
    </div>
  );
}

export default SearchResults;
