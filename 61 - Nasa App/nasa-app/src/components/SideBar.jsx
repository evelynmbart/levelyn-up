export function SideBar({ handleToggleModal, data }) {
  return (
    <div className="sidebar">
      <div className="background-overlay"></div>
      <div className="sidebar-content">
        <h2>{data?.title}</h2>
        <div className="description-container">
          <p className="desciption-title">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i class="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
}
