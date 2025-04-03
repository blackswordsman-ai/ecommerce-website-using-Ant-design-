import { Col, Row } from 'antd';
import './ProductCategories.css'; // You'll need to create this CSS file

const productCategories = [
  {
    key: 1,
    image: "https://media.istockphoto.com/id/626119856/photo/stir-fry-vegetables-frozen-and-roasted-chicken-food.jpg?s=612x612&w=0&k=20&c=XuART0KFtedHmA45JzuTDNcT-kUPUTjmI0581hYC-Pk=", // Updated Frozen Foods image
    title: "Frozen Foods",
    backgroundRepeat: "no-repeat"
  },
  {
    key: 2,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
    title: "Men's Fashion",
    backgroundRepeat: "repeat"
  },
  {
    key: 3,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
    title: "Kitchen Appliances",
    backgroundRepeat: "no-repeat"
  },
  {
    key: 4,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    title: "Skincare Essentials",
    backgroundRepeat: "repeat"
  },
  {
    key: 5,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    title: "Fitness Gear",
    backgroundRepeat: "no-repeat"
  },
  {
    key: 6,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    title: "Board Games",
    backgroundRepeat: "repeat"
  }, 
  {
    key: 7,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Smartphones",
    backgroundRepeat: "no-repeat"
  },
  {
    key: 8,
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9",
    title: "Women's Dresses",
    backgroundRepeat: "repeat"
  },
  {
    key: 9,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    title: "Refrigerators",
    backgroundRepeat: "no-repeat"
  },
  {
    key: 10,
    image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137",
    title: "Makeup Products",
    backgroundRepeat: "repeat"
  },
  {
    key: 11,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635",
    title: "Camping Equipment",
    backgroundRepeat: "no-repeat"
  },
  {
    key: 12,
    image: "https://media.gettyimages.com/id/1151224308/photo/teachers-with-children-learning-at-preschool.jpg?s=612x612&w=gi&k=20&c=7z5dnX_NsIQFjRGzFF-ECd8tAy6mDjYPuo8SwpGuy0I=",
    title: "Educational Toys",
    backgroundRepeat: "repeat"
  }
];

function ProductCategories() {
  return (
    <div className='productCategories'>
      <h2>Product Categories</h2>
      <Row gutter={[24, 24]}>
        {productCategories.map(category => (
          <Col xs={24} sm={12} md={8} lg={6} xl={4} key={category.key}>
            <div className='category-content'>
              <div 
                className='category-image'
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundRepeat: category.backgroundRepeat,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <h3>{category.title}</h3>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductCategories;