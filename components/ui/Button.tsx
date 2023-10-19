interface Props {
    text: string;
    buttonHandler?: () => void;
}

const Button = ({ text, buttonHandler }: Props) => {
    return (
      <button
        type="button"
        className='w-full bg-primary text-white shadow-lg px-5 py-3 rounded-md transition-opacity duration-400 ease hover:brightness-90'
        onClick={buttonHandler}
      >
        {text}
      </button>
    );
  };
  
export default Button;
