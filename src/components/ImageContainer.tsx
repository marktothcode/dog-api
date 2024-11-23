interface IProps {
  readonly randomImage: string | null;
}

function ImageContainer(props: IProps) {
  const randomImage = props.randomImage;

  return (
    randomImage && (
      <div className="random-image w-3/4 lg:w-1/3 mx-auto my-5">
        <img
          className="block my-0 mx-auto"
          src={randomImage}
          alt="A random dog"
        />
      </div>
    )
  );
}

export default ImageContainer;
