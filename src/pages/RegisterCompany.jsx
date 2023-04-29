export function RegisterCompany(){
    return (
        <form method={"GET"} className={"d-flex align-items-center flex-column"}>
            <h3 className="display-6 justify-content-center mb-4" >Company Registration Form</h3>
            <div className="form-floating mb-3 col-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="Company Name"/>
                <label htmlFor="floatingInput">Company name</label>
            </div>
            <div className="form-floating mb-3 col-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="Adress"/>
                <label htmlFor="floatingInput">Company physical adress</label>
            </div>
            <div className="form-floating mb-3 col-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="Contact Name"/>
                <label htmlFor="floatingInput">Contact Name</label>
            </div>
            <div className="form-floating mb-3 col-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="Contact Phone"/>
                <label htmlFor="floatingInput">Contact Phone</label>
            </div>
            <div className="form-floating mb-3 col-3">
                <button type={"submit"} className={"btn btn-primary"}>Submit</button>
            </div>
        </form>
    )
}