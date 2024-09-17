import React from 'react';
import { twMerge } from 'tailwind-merge';

const Container = ({ children, className }) => {
      return (
            <div className={twMerge("max-w-screen-xl mx-auto lg:px-0 px-4", className)}>
                  {children}
            </div>
      );
};

export default Container;