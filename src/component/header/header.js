import "./header.scss";
import Switch from "../switch/switch";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import SideNav from "../side-nav/side-nav";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({ onClickMethod }) => {
  function showMenu() {
    document.getElementById("myNav").style.display = "block";
  }
  return (
    <Container fluid="xl">
      <Navbar expand={false}>
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              {" "}
              <div className="logo">
                <svg
                  width="34"
                  height="36"
                  viewBox="0 0 34 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 33V-0.000244141L1 0L2.5 -0.000244141L32.5 0C32.5 0 30.7778 2.5 30 2.5H2.5V33H9L11 35.5H0V33.5V33ZM33.5005 34.5002C33.9624 32.4983 33.5005 1 33.5005 1C33.5005 1 31.0005 2.5 31.0005 3.5C31.0005 4.5 31.4277 21.5002 31.4277 21.5002H23.8667V14.0002L23.6841 14.2185L23.4771 14.4634C22.5146 15.5957 21.5859 16.6882 21.7734 18.3835C21.873 19.2949 21.8496 20.219 21.8262 21.1443C21.8125 21.6794 21.7988 22.2151 21.8091 22.7488C21.8145 23.0322 21.811 23.5149 21.8066 24.1309C21.7822 27.5491 21.729 35.0764 23 35.5C23.2617 35.7632 23.5239 35.824 23.7144 35.7837C23.8872 35.7473 24.0005 35.6274 24.0005 35.5L23.8984 24.0002H31.4951V35.5022C31.4951 35.5022 33.0386 36.5022 33.5005 34.5002ZM10.6748 11.4468C10.6748 11.4468 10.4951 31.5 10.5 32.5C10.5049 33.5 12.7124 35.2048 12.7124 35.2048V15.6245L13.0327 15.501L17.1953 21.5059C17.5488 20.9553 17.9072 20.4121 18.2695 19.8738C18.4609 19.5889 18.6533 19.3054 18.8462 19.0227C19.104 18.6448 19.3628 18.2688 19.6221 17.8936L20.0415 17.2871L20.0444 17.2842C21.3647 15.3748 22.6772 13.4758 23.875 11.4727C22.0483 11.0461 21.7979 11.1458 20.9878 12.3413C20.5054 13.0537 20.0259 13.7747 19.5464 14.4966C19.2212 14.9858 18.8955 15.4756 18.5684 15.9634C18.3169 16.3325 18.0605 16.7036 17.7896 17.0955L17.1655 17.9976C15.8501 16.033 14.6187 14.2061 13.3989 12.3691C12.5654 11.1121 12.2407 10.9905 10.6748 11.4468Z"
                    className="svg-logo"
                  />
                </svg>
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle>
            <div className="sw">
              <Switch onClickMethod={onClickMethod} />
            </div>
            <div className="side-navbar">
              <svg
                onClick={showMenu}
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 24.5H4V21.8333H16V24.5ZM28 17.8333H4V15.1667H28V17.8333ZM28 11.1667H16V8.5H28V11.1667Z"
                  className="svg-logo"
                />
              </svg>
              <SideNav onClickMethod={onClickMethod} />
            </div>
          </Navbar.Toggle>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
