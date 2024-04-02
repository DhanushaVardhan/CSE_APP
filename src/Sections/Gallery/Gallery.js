// import { GalleryData } from "./GalleryData";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import GalleryData from "./GalleryData";
// import './Gallery.css'
// import RotatingImage from "./rotae";

function Gallery() {
  const [isHovered, setIsHovered] = useState(false);
  const springProps = useSpring({
    transform: `rotate(${isHovered ? 30 : 0}deg)`, // Rotate the image 360 degrees when hovered
  });
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.title))]);
  }, []);
  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.title === itemData);
    setData(filterData);
  };
  return (
    <div className="App">
      <h1>Computer Science and Engineering Gallery</h1>
      <div className="galleryWrapper">
        <div className="filterItem">
          <nav className="Navbar">
            <ul>
              <li>
                <button onClick={() => setData(GalleryData)}>All</button>
              </li>
              {collection.map((item) => (
                <li>
                  <button
                    onClick={() => {
                      gallery_filter(item);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="galleryContainer">
          {data.map((item) => (
            // <div className="galleryItem">
            //   <animated.img
            //     src={item.image}
            //     key={item.id}
            //     alt="your image"
            //     onMouseEnter={() => setIsHovered(true)}
            //     onMouseLeave={() => setIsHovered(false)}
            //     style={springProps}
            //   />
            // </div>

            <RotatingImage src={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const RotatingImage = ({ src }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define spring animation properties
  const springProps = useSpring({
    scale: isHovered ? 1.1 : 1, // Rotate the image 360 degrees when hovered
  });

  return (
    <div className="galleryItem">
      <animated.img
        src={src}
        alt="Your Image"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={springProps}
      />
    </div>
  );
};

export default Gallery;