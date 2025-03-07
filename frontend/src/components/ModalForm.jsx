export default function ModalForm({ isOpen, onClose, mode, OnSubmit }) {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Edit Client' : 'Client Details'}</h3>
          <form method="dialog">
            <label className="input">
              Name
              <input type="text" className="grow" placeholder="" />
            </label>
            <label className="input">
              Email
              <input type="text" className="grow" placeholder="" />
            </label>
            <label className="input">
              Job
              <input type="text" className="grow" placeholder="" />
            </label>

            <div className="flex mb-4 justify-between">
              <label className="input">
                Rate
                <input type="number" className="grow" placeholder="" />
              </label>
              <select id="active" className="select select-bordered w-full max-w-xs">
                <option>Inactive</option>
                <option>Active</option>
              </select>
            </div>

            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>
              ✕
            </button>

            <button className="btn btn-success">{mode === 'edit' ? 'Save Changes' : 'Add Client'}</button>
          </form>
        </div>
      </dialog>
    </>
  );
}
