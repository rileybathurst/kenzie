import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import List from "./list";
import { Link } from "gatsby";

function Button() {

  const [slide, setSlide] = useState('firstload');
  const [amount, setAmount] = useState(0);
  const ref = useRef();

  // if (ref?.current?.clientHeight) {
  useEffect(() => {
    setAmount(ref?.current?.clientHeight);
  });
  // }

  // ? I wonder if I can do some fancy stuff with ternary operators here

  if (slide == "firstload") {

    return (
      <>
        <button
          className="button-styles"
          onClick={() => setSlide('close')}
        >
          <span
            style={{ transform: 'translateY(-2rem)' }}
            className="span-styles"
          >close<br />menu
          </span>
        </button>
        <nav
          id="menu_small"
          style={{
            transform: 'translateY(-' + amount + 'px)',
            marginBottom: '-' + amount + 'px',
          }}
          ref={ref}
        >
          <List />
        </nav>
      </>
    );
  } else if (slide == "menu") {
    // console.log(ref);

    return (
      <>
        <button
          className="button-styles"
          onClick={() => setSlide('close')}
        >
          <span
            style={{ transform: 'translateY(-2rem)' }}
            className="span-styles"
          >close<br />menu
          </span>
        </button>
        <nav
          style={{
            transform: 'translateY(-' + amount + 'px)',
            marginBottom: '-' + amount + 'px',
            transition: '2s ease',
          }}
          ref={ref}
          id="menu_small"
        >
          <List />
        </nav>
      </>
    );
  } else {

    // console.log(ref);
    return (
      <>
        <button
          className="button-styles"
          onClick={() => setSlide('menu')}
        >
          <span
            style={{ transform: 'translateY(0)' }}
            className="span-styles"
          >close<br />menu
          </span>
        </button>
        <nav
          style={{
            transform: 'translateY(0)',
            marginBottom: '-' + amount + 'px',
            transition: '2s ease',
          }}
          ref={ref}
          id="menu_small"
        >
          <List />
        </nav>
      </>
    );
  }
}

const Header = () => {

  return (
    <header className='headingStyles'>
      <h1 className="">
        <Link to="/" activeClassName="dont-style-home highlighter">
          {useSiteMetadata().title}
        </Link>
      </h1>
      {/* <Button /> */}
    </header>
  )
}

export default Header