import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return <ButtonContainer as="button" onClick={onClick} disabled>{title}</ButtonContainer>;
};

export default Button;
