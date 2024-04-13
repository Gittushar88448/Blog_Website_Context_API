import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Bottom = () => {

  const {page , totalPages , handlePageChange} = useContext(AppContext);

  return (
    <div>
      { page > 1 &&
        <button onClick={()=>{
          handlePageChange(page-1);
        }}>
          Previous
        </button>
      }
      {
        page < 6 &&
        <button onClick={()=>{
          handlePageChange(page+1);
        }}>
          Next
        </button>
      }
      {
        <span>
          {`pages ${page} of ${totalPages}`}
        </span>
      }
    </div>
  )
}

export default Bottom