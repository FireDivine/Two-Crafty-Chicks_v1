import React,{ useEffect } from 'react'
import { fetchCollections } from '../actions/collections'
import { Link } from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux'

function Collections() {
  const fullCollection = useSelector((state)=>state.Collections)
 // const [collections, setCollections] = useState([])
 console.log(fullCollection)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCollections())
     
  }, [])
  return (
    <>
    <h2 className='text-center'> -- Collections --</h2>
      <div className="d-flex container">
      <Link className=' inpop' to={`/collections/add`}>
        <button className="btn btn-info  inpop">Add New</button>
        </Link>
      </div>
      <div className="container mr-3 w-75 d-flex justify-content-center">
        <table className="table ">
          <thead>
           
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
             
            </tr>
          </thead>
          <tbody>
            {fullCollection.map((col)=>(
              <tr key={col.id}>
              <th scope="row">{col.id}</th>
              <td>{col.name}</td>
              
              <td>

               <Link className=' inpop' to={`/collections/${col.id}`}>
               <button  className="btn btn-info inpop">Edit</button>
               </Link>
                
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Collections
