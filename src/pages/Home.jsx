
export function Home(){
    return (
        <div className={"d-flex align-items-center flex-column mb-3"}>
            <p class="text-center display-6">If you are a restaurant that would like to donate leftover food <br/>
            to those in need, please register your business here:
                <span className={"col-2"}><a className="nav-link bg-primary " aria-current="page" href="/registerCompany">Register Company</a></span>
            </p>
            <p class="text-center  display-6">If you are seeking food please register here:
                <span className={"col-2"}><a className="nav-link bg-primary " aria-current="page" href="/registerUser">Register User</a></span>
            </p>
        </div>
    )
}