interface Props {
    text: string;
    styles: string;
    buttonHandler?: () => void;
}

const Button = ({ text, styles, buttonHandler }: Props) => {
    return (
      <button
        type="button"
        className={`w-full ${styles} drop-shadow-md rounded-md transition-opacity duration-200 ease hover:brightness-90`}
        onClick={buttonHandler}
      >
        <p className="drop-shadow-md font-bold">{text}</p>
      </button>
    );
  };
  
export default Button;
