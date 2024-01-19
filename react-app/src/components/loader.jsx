import React from 'react';
import "../styles/loader.css";


const Loader = () => {
  return (
    <article className="loader-page">
      <div className="content">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="bars">
            {[...Array(7)].map((_, b) => (
              <div key={b} className="bar"></div>
            ))}
          </div>
        ))}
      </div>
    </article>
  );
};


export default Loader;
