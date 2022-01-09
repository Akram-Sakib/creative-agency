import Image from "next/image";
import { Container } from "react-bootstrap";
import logo from "./../images/logo.png";
import Link from "next/link";

const Login = () => {
    return (
      <section className="login-section">
        <Container>
          <div className="login-top mb-5">
            <div className="top-logo text-center">
              <Link href="/">
                <a>
                  <Image
                    alt=""
                    src={logo}
                    width={150}
                    height={50}
                    className="d-inline-block align-top"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="login-bottom w-50 mx-auto py-5 px-2 text-center">
            <h2>Login With</h2>
            <button type="button" className="login-with-google-btn">
              Continue with Google
            </button>
            <p>
              Dont have an account? <a href="">Create an account</a>
            </p>
          </div>
        </Container>
      </section>
    );
}
 
export default Login;