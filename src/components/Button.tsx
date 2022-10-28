import PropTypes from 'prop-types';
import { ButtonContainer, ButtonVariant } from './Button.styles';

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return (
    <ButtonContainer
      type="button"
      variant={variant}
    >
      Enviar
    </ButtonContainer>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success'] as const),
};

Button.defaultProps = {
  variant: 'primary',
};
