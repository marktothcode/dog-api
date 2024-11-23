interface IProps {
  readonly breed: string;
  readonly onClick: (breed: string) => void;
}

function SearchResult(props: IProps) {
  const breed = props.breed;
  const onClick = props.onClick;
  return (
    <div
      className="search-result text-lg bg-white hover:bg-gray-300 w-11/12 pl-2 py-1 my-0.5 mx-auto cursor-pointer transition"
      onClick={() => onClick(breed)}
    >
      <p>{breed}</p>
    </div>
  );
}

export default SearchResult;
