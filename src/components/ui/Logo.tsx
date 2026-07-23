import React from 'react';

const Logo: React.FC<{ isDark?: boolean }> = ({ isDark = false }) => (
  <div className="flex flex-col items-center justify-center select-none group cursor-pointer">
      <span className={`font-playfair text-2xl md:text-3xl font-semibold tracking-wide transition-colors duration-300 ${isDark ? 'text-[#1D1D1D]' : 'text-white'}`}>
            MatchStick
                </span>
                    <span className={`text-[10px] md:text-[12px] tracking-[0.3em] font-medium transition-colors duration-300 uppercase ${isDark ? 'text-[#666666]' : 'text-white/80'}`}>
                          Events
                              </span>
                                </div>
                                );

                                export default Logo;