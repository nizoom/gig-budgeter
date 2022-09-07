const ActionDropdown = () => {
  return (
    <form className="action-dropdown">
      <div className="action-form-section">
        <label htmlFor="item">Item</label>
        <input type="text" id="item" className="action-input" />
      </div>
      <div className="action-form-section">
        <label htmlFor="item">Amount</label>
        <input type="number" id="amount" className="action-input" />
      </div>
      <div className="action-form-section">
        <label htmlFor="item">Recurring</label>
        <select id="item" className="action-input">
          <option value="N/A"> N/A</option>
          <option value="Weekly"> Weekly</option>
          <option value="Monthly"> Monthly</option>
        </select>
      </div>

      <button type="submit" className="submit-action-btn">
        {" "}
        Add{" "}
      </button>
    </form>
  );
};

export default ActionDropdown;
