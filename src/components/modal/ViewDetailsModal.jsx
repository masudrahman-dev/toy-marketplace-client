const ViewDetailsModal = () => {
  return (
    <div>
      <input type="checkbox" id="view-details-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className=" flex justify-center">
            <div className=" p-4 w-full max-w-2xl h-full">
              {/* <!-- Modal content --> */}
              <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                {/* <!-- Modal header --> */}
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="view-details-modal" className="btn">
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsModal;
