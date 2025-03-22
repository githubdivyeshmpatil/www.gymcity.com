export default function GymGrid() {
    const images = [
      { src: "/img/tra1.jpg", span: "col-span-2 row-span-1" },
      { src: "/img/tra1.jpg", span: "col-span-1 row-span-1" },
      { src: "/img/tra6.jpg", span: "col-span-1 row-span-1" },
      { src: "/img/tra3.jpg", span: "col-span-2 row-span-1" },
      { src: "/img/tra5.jpg", span: "col-span-1 row-span-1" },
      { src: "/img/tra4.jpg", span: "col-span-1 row-span-1" },
      { src: "/img/tra3.jpg", span: "col-span-1 row-span-1" },
    ];

    return (
      <div className="grid grid-cols-3 gap-4 p-4 max-w-4xl mx-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index + 1}`}
            className={`${image.span} h-full w-full object-cover`}
          />
        ))}
        <video autoPlay muted loop className="col-span-3 w-full h-full mt-4">
          <source src="/img/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
}
