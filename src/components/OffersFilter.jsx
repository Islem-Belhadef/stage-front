const OffersFilter = () => {

    return (
        
        <form className="flex flex-col items-center mt-6">
          <label htmlFor="duration" className="label mb-4">
            Internship duration
            <div className="flex gap-4 mt-2">
              <input
                type="number"
                className="input"
                placeholder="Minimum"
                min={0}
                style={{ width: "9rem" }}
              />
              <input
                type="number"
                className="input"
                placeholder="Maximum"
                min={0}
                style={{ width: "9rem" }}
              />
            </div>
          </label>
          <label htmlFor="spots" className="label mb-4">
            Available spots
            <div className="flex gap-4 mt-2">
              <input
                type="number"
                className="input"
                placeholder="Minimum"
                min={0}
                style={{ width: "9rem" }}
              />
              <input
                type="number"
                className="input"
                placeholder="Maximum"
                min={0}
                style={{ width: "9rem" }}
              />
            </div>
          </label>
          <label htmlFor="level" className="label mb-4">
            Level
            <select
              name="level"
              id="level"
              className="input mt-2 bg-transparent"
            >
              <option value="">Any</option>
              <option value="L-3">L-3</option>
              <option value="M-2">M-2</option>
            </select>
          </label>
          <label htmlFor="order" className="label mb-4">
            Order by
            <select
              name="order"
              id="order"
              className="input mt-2 bg-transparent"
            >
              <option value="">Offer date (ascending)</option>
              <option value="">Offer date (descending)</option>
              <option value="">Internship duration (ascending)</option>
              <option value="">Internship duration (descending)</option>
            </select>
          </label>
          <div className="flex gap-4 mt-4">
            <button type="reset" className="secondary-btn">
              Reset
            </button>
            <button type="submit" className="primary-btn">
              Apply
            </button>
          </div>
        </form>
   
    )
}

export default OffersFilter 