import React from "react";

export const Organisations = ({ organisations, loading }) => {
  if (loading) return null;

  return (
    <ul>
      {organisations.map(item => (
        <li key={item.id}>
          <h3>
            {organisations.type} {item.name}
          </h3>
          <p>{item.goal}</p>
          <p>{item.needs}</p>
        </li>
      ))}
    </ul>
  );
};
