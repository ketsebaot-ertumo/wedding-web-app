// 6. components/ImageGrid.js - Grid Layout
export default function ImageGrid({ images }) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border p-4">
        {images.map((img, index) => (
          <img key={index} src={img} alt="guest upload" className="rounded-lg shadow" />
        ))}
      </div>
    );
  }