import "./ProjectItem.scss";
function ProjectItem(props) {
  const redirectTo = (item) => {
    window.location.href = item;
  };

  return (
    <div className="project-item_container">
      <div className="image_item" style={{ backgroundImage: `url(${props?.data?.image})` }}></div>
      <div className="desc_item">
        <div className="desc_name" title={props?.data?.name}>
          {props?.data?.name}
        </div>
        <div className="desc_link">
          {props?.data?.githubUrlFE ? (
            <i onClick={() => redirectTo(props?.data?.githubUrlFE)} className="bx bx-laptop" title="Front-end"></i>
          ) : (
            ""
          )}
          {props?.data?.githubUrlBE ? (
            <i onClick={() => redirectTo(props?.data?.githubUrlBE)} className="bx bxs-cog" title="Back-end"></i>
          ) : (
            ""
          )}
          {props?.data?.webUrl ? (
            <i onClick={() => redirectTo(props?.data?.webUrl)} className="bx bx-link-external" title="Web link"></i>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
