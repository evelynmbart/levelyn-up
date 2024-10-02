export function Main({ data }) {
  return (
    <div className="image-container">
      <img
        className="background-img"
        src={data.url}
        alt={data?.title || "background-image"}
      />
      ;
    </div>
  );
}
