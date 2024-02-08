import React from 'react';

const Pagination = ({handleNext,page,handlePrev}) => {
    return (
        <div>
            <p onClick={handlePrev}>prev</p>
            {page}
            <p onClick={handleNext}>next</p>
        </div>
    );
};

export default Pagination;