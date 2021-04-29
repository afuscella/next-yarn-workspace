import React, { ReactNode } from 'react';

export interface IButton {
  children: ReactNode | ReactNode[]
}

export function Button({ children }: IButton) {
  return (
    <button>
      {children}
    </button>
  );
};
