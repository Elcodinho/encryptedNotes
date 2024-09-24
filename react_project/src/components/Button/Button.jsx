import "./Button.css";
export function Button({ text, onClick }) {
  return (
    <div className="button-container">
      <button
        type="submit"
        className="send-button"
        onClick={onClick ? onClick : undefined}
      >
        {text}
      </button>
    </div>
  );
}
