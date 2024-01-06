import { Link } from "react-router-dom";
import photo from '../assets/e2779a6da61e14cba92c6531a46d8e26.jpeg'
import '../styles/style.css'



function Login() {
  return (

    <div className="wrapper">
      <div className="inner">
        <div className="image-holder">
          <img src={photo} alt="photo" style={{
            height:'100%'
          }}/>
        </div>
        <form className="form">
          <h3>Login</h3>

          <div className="form-wrapper">
            <input
              type="text"
              placeholder="Username or Email"
              className="form-control"

            />

          </div>


          <div className="form-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="form-control"

            />

          </div>

          <div>
            <p>Don't have account <Link to='/register' className='link'>Signup</Link></p>
          </div>

          <button className="glow-on-hover"><Link to='/'  >Login
          </Link></button>


        </form>
      </div>
    </div>


  );
}


export default Login;