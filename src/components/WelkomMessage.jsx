import { LoginMessage } from "../data";

export default function WelkomMessage({title, message}) {
  return (
    <div>
      <h3>{title}</h3>
      <p className="message">{message}</p>
    </div>
  );
}