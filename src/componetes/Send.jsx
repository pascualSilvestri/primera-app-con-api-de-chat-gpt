import './Send.css';

const Send = ({ accion }) => {
  const handleClick = () => {
    const inputValue = document.querySelector('.input-mjs').value;
    accion('user',inputValue);
    document.querySelector('.input-mjs').value = '';
  };

  return (
    <button className="send" type="button" onClick={handleClick}>
      Send
    </button>
  );
};

export default Send;
