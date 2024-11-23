import headerImage from ".././assets/dog-api-logo.svg";

function Header() {
  return (
    <div className="search-widget__header py-5 bg-gray-300 flex items-center w-full justify-center">
      <img className="search-widget__image max-w-32" src={headerImage} alt="" />
      <p className="text-2xl font-extrabold capitalize my-2 mx-10 md:mx-16 lg:mx-20">
        Find a dog
      </p>
    </div>
  );
}

export default Header;
