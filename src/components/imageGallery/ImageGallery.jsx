import ImageCard from '../imageCard/ImageCard';
function ImageGallery({ images }) {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard item={image} />
    
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery;
