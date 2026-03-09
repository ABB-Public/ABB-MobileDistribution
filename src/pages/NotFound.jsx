import { Link } from "react-router-dom";
import "../styles/notFound.css";

export default function NotFound() {
  return (
    <main className="abb-404">
      <div className="abb-404__bg" aria-hidden="true">
        <span className="abb-404__orb" />
        <span className="abb-404__orb abb-404__orb--alt" />
        <span className="abb-404__grid" />
      </div>

      <section className="abb-404__card">
        <div className="abb-404__brand">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ABB_Logo_Screen_RGB_29px_@2x.png`}
            alt="ABB"
            className="abb-404__logo"
          />
          <span className="abb-404__tag">Mobile Distribution</span>
        </div>

        <div className="abb-404__headline">
          <span className="abb-404__code">404</span>
          <div className="abb-404__text">
            <h1>Page not found</h1>
            <p>
              The address you requested does not exist or has been moved. If you
              came from a link, it might be out of date.
            </p>
          </div>
        </div>

        <div className="abb-404__actions">
          <Link className="abb-404__btn" to="/">
            Go to home
          </Link>
          <a
            className="abb-404__link"
            href="https://go.insideplus.abb.com/information-systems/gf-is/is-teams/innovation/our-services/mobile-distribution"
          >
            Visit Insideplus
          </a>
        </div>

        <div className="abb-404__footer">
          <span className="abb-404__dot" />
          <span>ABB • Reliability in motion</span>
        </div>
      </section>
    </main>
  );
}
