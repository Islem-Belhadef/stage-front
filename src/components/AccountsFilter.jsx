const AccountsFilter = () => {

    return (
        <form className="flex flex-col items-center mt-6">
                <label htmlFor="type" className="label mb-4">
                  Account type
                  <select
                    name="type"
                    id="type"
                    className="input mt-2 bg-transparent"
                  >
                    <option value="">Any</option>
                    <option value="student">Student</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="hod">Head of Department</option>
                  </select>
                </label>
                <label htmlFor="order" className="label mb-4">
                  Order by
                  <select
                    name="order"
                    id="order"
                    className="input mt-2 bg-transparent"
                  >
                    <option value="">creation date (ascending)</option>
                    <option value="">creation date (descending)</option>
                    <option value="">account type</option>
                  </select>
                </label>
                <div className="flex gap-4 mt-2">
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

export default AccountsFilter 