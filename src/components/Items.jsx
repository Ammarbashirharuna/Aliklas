import Item from "./item"
import products from '../products.json'

const Items = () => {
  return (
      <>
          <h2 className="text-center text-3xl font-bold">OUR PRODUCT</h2>
          <div>
              {products.map((products) =>  (<Item key={products.id} title={products.title} img={products.img} />))}
          </div>
      
    </>
  )
}

export default Items
