import React from 'react';

interface CardProps {
  children: JSX.Element | JSX.Element[];
}

export const Card: React.FC<CardProps> = ({
  children,
}: CardProps): JSX.Element => {
  return <div className="card">{children}</div>;
};
