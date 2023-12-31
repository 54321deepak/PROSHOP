import React, { useEffect  } from 'react'
import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"
import Message from "../components/Message"
import Loader from "../components/Loader"
import {useDispatch , useSelector } from  "react-redux"
import {listProducts} from '../actions/productActons'
import {useParams}  from 'react-router-dom'
import Paginate from '../components/Pagenate'
import { Link } from 'react-router-dom'
import ProductCarousel from '../components/PorductCarousel'
import Meta from '../components/Meta'


const HomeScreen = () => {
  const dispatch = useDispatch()
  const  {keyword ,pageNumber}=useParams()

  const pagenumber = pageNumber || 1


  const productList = useSelector((state) => state.productList)
  const { loading , error , products ,page ,pages } = productList
  

  useEffect(() => {
dispatch(listProducts(keyword, pagenumber))
  },[dispatch , keyword , pagenumber])


  return (
    <> <Meta />
     {!keyword ? (
      <ProductCarousel />
    ) : (
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link> )}
      <h1>Latest Products</h1>
     
      {loading ? (
 <Loader/>
      ) : error ? (
      <Message variant="danger">{error}</Message>
      ) : ( 
      <Row>
        {
          products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))
        }
      </Row>)}
      <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
    </>
  )
}

export default HomeScreen