import "./LoginForm.css"
import { Link } from "react-router-dom"
import { useLoginForm } from "../../hooks/useLoginForm"


export default function LoginForm() {
   const { input, errors, isLoading, handleOnInputChange, handleOnSubmit } = useLoginForm()

    return (
        <div className="login-form">
           <div className="input-field">
                <label htmlFor="email">Email</label>
                <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="user@gmail.com"
                    value={input.email}
                    onChange={handleOnInputChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
           </div>

           <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                    className="form-input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={input.password}
                    onChange={handleOnInputChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
           </div>

           <button className="submit-login" onClick={handleOnSubmit} >Login</button>
           <div className="footer">
            <p>
              Don't have an account? Sign up <Link to="/register">here</Link>
            </p>
          </div>
        </div>
    )
}