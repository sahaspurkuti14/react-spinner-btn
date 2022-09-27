import Spinner from "react-bootstrap/Spinner";

function SpinnerButton(props) {
  const style = {
    opacity: "50%",
    cursor: "default",
    width: props.width || "100%",
    height: props.height || "40px",
  };

  //image preview
  const [imageURL, setImageURL] = useState("");
  //   create image preview
  useEffect(() => {
    if (image) {
      if (image.name) {
        const url = URL.createObjectURL(image);
        setImageURL(url);
      } else {
        setImageURL(image);
      }
    }
  }, [image]);

  return (
    <div>
      {/* image preview  */}
      <div>
        {imageURL && (
          <img src={imageURL} alt="cover image" className="cover-image" />
        )}
      </div>

      {/* buttons */}
      {!props.isSubmitting ? (
        <button
          className={`btn btn-primary ${props.className}`}
          onClick={props.onClick}
          style={{
            width: props.width || "100%",
            height: props.height || "40px",
            ...props.style,
          }}
        >
          {props.title}
        </button>
      ) : (
        <button
          className={`${props.className} btn btn-primary d-flex align-items-center justify-content-center gap-1`}
          style={style}
        >
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          {props.title}
        </button>
      )}
    </div>
  );
}

export default SpinnerButton;
