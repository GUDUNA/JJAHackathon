export function RegisterUser(){
    return (
        <form method={"GET"} className={"d-flex align-items-center flex-column mb-3"}>
            <h3 className="display-6 justify-content-center mb-4" >User Registration Form</h3>
            <div className="form-floating mb-3 col-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name"/>
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3 col-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="Phone number"/>
                <label htmlFor="floatingInput">Company physical adress</label>
            </div>
            <div className="form-floating mb-3 col-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="radius"/>
                <label htmlFor="floatingInput">Radius to search for</label>
            </div>
            <div className="form-floating mb-3 col-3">
                <button type={"submit"} className={"btn btn-primary"}>Submit</button>
            </div>
        </form>
    )
}