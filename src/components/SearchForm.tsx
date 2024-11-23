interface IProps {
  readonly handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchForm(props: IProps) {
  const handleChange = props.handleChange;

  return (
    <form
      className="search-form flex justify-center items-center w-11/12 md:w-2/4 lg:w-96  mx-auto mb-2 mt-1"
      action=""
    >
      <label className="text-xl w-11/12 mt-4">
        Search by dog breed
        <input
          className="search-form__input block text-lg mt-2 border border-black border-solid pl-2 py-1 w-full .focus:shadow-outline transition-shadow"
          id="search"
          onChange={handleChange}
          placeholder="Great Dane, Dalmatian, Chihuahua"
          type="text"
        />
      </label>
    </form>
  );
}

export default SearchForm;
