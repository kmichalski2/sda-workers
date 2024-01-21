export function ConfirmModal(props: {
  show: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <>
      <div
        className={"modal fade " + (props.show ? "d-block show" : "")}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {props.title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{props.description}</div>
            <div className="modal-footer">
            <button className="btn" onClick={props.onCancel}>No</button>
             <button className="btn btn-primary" onClick={props.onConfirm}>
            Yes
          </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
