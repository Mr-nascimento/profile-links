import "./index.scss";

export function CardLink(props: any) {
  return (
    <>
      <a href={props.url} target="_blank" rel="noreferrer">
        <div className="card">
          {props.icon}
          <div className="card-body">
            <h3 className="card-title">{props.name}</h3>
          </div>
        </div>
      </a>
    </>
  );
}
