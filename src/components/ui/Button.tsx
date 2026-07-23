import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
    children: React.ReactNode;
      className?: string;
      }

      const Button: React.FC<ButtonProps> = ({
        variant = 'primary',
          children,
            className = '',
              ...props
              }) => {
                const baseStyles =
                    "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#B89146] focus:ring-offset-2";

                      const variants = {
                          primary:
                                "bg-[#B89146] text-white rounded-[32px] px-8 py-4 hover:bg-[#A07B38] hover:-translate-y-1 shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)] text-[16px]",
                                    secondary:
                                          "bg-white text-[#1D1D1D] border border-[#1D1D1D] rounded-[32px] px-8 py-4 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] text-[16px]",
                                              ghost:
                                                    "bg-transparent text-white border border-white/30 rounded-[32px] px-8 py-4 hover:border-white/50 hover:bg-white/10 text-[16px] backdrop-blur-sm",
                                                      };

                                                        return (
                                                            <button
                                                                  className={`${baseStyles} ${variants[variant]} ${className}`}
                                                                        {...props}
                                                                            >
                                                                                  {children}
                                                                                      </button>
                                                                                        );
                                                                                        };

                                                                                        export default Button;