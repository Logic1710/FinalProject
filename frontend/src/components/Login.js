import React, {useState} from 'react';

function Login() {
    const [adminData, setAdminData] = useState({username:" ", password: " "});
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        setAdminData((prevState) => {
            return{
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            adminData.username.toLowerCase() === "admin" &&
            adminData.password === "dylansayangedo"
        ) {
            //success
            localStorage.setItem("isAuthenticated", "true");
            window.location.pathname = "/admin";
        } else if (
            adminData.username.toLowerCase() !== "admin" &&
            adminData.password !== "dylansayangedo"
        ) {
            setErrorMessage("Invalid Username or Password. Please try again")
            alert(errorMessage)
        } else {
            // failed
            setErrorMessage("Failed. Please refresh and try again.");
            alert(errorMessage)
            console.error(errorMessage)
        }
    };
    return(
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control mt-1" onChange={(e) => handleInputChange(e)}
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1" onChange={(e) => handleInputChange(e)}
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Login