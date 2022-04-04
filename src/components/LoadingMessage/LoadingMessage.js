import "./LoadingMessage.css";

function LoadingMessage({ message }) {
  return (
    <div className="loading-message">
      <span className="loading-message__text">{message}</span>
    </div>
  )
}

export default LoadingMessage;
