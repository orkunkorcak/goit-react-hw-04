
function ImageCard({ item }) {
  return (
    <div>
      <img src={item.urls.small} alt={item.description} />
    </div>
  );
}
export default ImageCard;