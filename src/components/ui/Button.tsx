import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'btn',
          {
            'btn-primary': variant === 'primary',
            'btn-secondary': variant === 'secondary',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export default Button 