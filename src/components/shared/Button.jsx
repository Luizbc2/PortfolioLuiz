export const Button = ({ children, variant = 'primary', as: Component = 'button', className = '', ...props }) => (
  <Component className={`button button--${variant} ${className}`.trim()} {...props}>
    {children}
  </Component>
);
