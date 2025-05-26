import React from "react";
// import "./index.css"
function Navbar() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          padding: "0px 70px",
          height: "70px",
          justifyContent: "space-between",
          position: "fixed",
          width: "100%",
          backgroundColor: "rgb(240, 240, 245)",
          alignItems: "center",
          fontSize: "30px",
        }}
      >
        <div>Two Birds & a Fox</div>
        <div style={{ display: "flex", gap: "20px" }}>
          <p>This Us.</p>
          <p>Our Work.</p>
          <p>Get in Touch.</p>
        </div>
      </nav>
      <section style={{ height: "calc(100vh-70px)", display: "flex" }}>
        <div style={{ width: "50%", height: "100%", marginTop: "70px" }}>
          <div style={{ height: "100vh" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "80px",
                color: "rgb(66, 64, 55)",
              }}
            >
              <h1 style={{ fontSize: "90px" }}>
                <strong>
                  Make your <br /> story sing.
                </strong>
              </h1>
              <p style={{ fontSize: "25px", marginTop: "40px" }}>
                Striking the right note that cuts through. Finding the tone that
                resonates. <br /> Amplifying across a complex media landscape.{" "}
                <br />
                <br />
                In a noisy world, we believe your communications should sing.
              </p>
            </div>
          </div>
        </div>
        <div style={{ width: "50%", height: "100%", marginTop: "50px" }}>
          <div style={{ position: "fixed", zIndex: "-5" }}>
            <video
              src="https://cdn.sanity.io/files/9pxljqkt/production/06a9bd4a108fde377df44401d4f6ee9769b7bf3e.mp4"
              preload="auto"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </section>
      <h1 style={{ color: "rgb(66, 64, 55)", fontSize: "50px",padding:'30px' }}>Our work.</h1>
      <section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ height: "90vh", width: "100%", padding: "30px" }}>
            <img
              style={{ height: "100%" }}
              src="https://cdn.sanity.io/images/9pxljqkt/production/59a2593ea5665e277811337e56fdca877c21d026-1312x1240.jpg"
              alt=""
            />
            <h2 className="sec2">Delivering Value Through Insights.</h2>
            <p style={{ color: "rgb(66, 64, 55)" }}>
              Mining proprietary insights to demonstrate a bank’s reach and
              relevance drove <br /> value and secured top-tier media
              engagement.
            </p>
            <ul style={{ display: "flex", listStyle: "none", gap: "12px" }}>
              <li style={{ borderRight: "1px solid gray" }}>DATA INSIGHTS</li>
              <li style={{ borderRight: "1px solid gray" }}>
                MARKETING & COMMUNICATIONS
              </li>
              <li>BRANDING</li>
            </ul>
          </div>
          <div style={{ height: "100vh", width: "100%" }}>
            <img
              style={{ height: "80%", padding: "30px" }}
              src="https://cdn.sanity.io/images/9pxljqkt/production/1524439c1a396847fc66926cba7dc4b3fc08d7f9-1314x850.jpg"
              alt=""
            />
            <h2 className="sec2">Charting a Course to Number One.</h2>
            <p style={{ color: "rgb(66, 64, 55)" }}>
              Convincing a large bank to package up its offerings in line with a
              regulatory challenge, and market itself as the only firm with a
              comprehensive solution, made it the number-one provider.
            </p>
            <ul style={{ display: "flex", listStyle: "none", gap: "12px" }}>
              <li style={{ borderRight: "1px solid gray" }}>DATA INSIGHTS</li>
              <li style={{ borderRight: "1px solid gray" }}>
                MARKETING & COMMUNICATIONS
              </li>
              <li>Digital</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        style={{
          height: "120vh",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "120%",
              padding: "30px",
            }}
          >
            <video
              src="https://cdn.sanity.io/files/9pxljqkt/production/066a18b3fefb3e192bb2ecf55610f454342bcbc2.mp4"
              preload="auto"
              autoPlay
              loop
              playsInline
              muted
              style={{ width: "100%", height: "90vh" }}
            />
            <div>
              <h2 className="sec2">Putting a Business on the Map.</h2>
              <p style={{ color: "rgb(66, 64, 55)" }}>
                Transforming a spreadsheet-based dataset into a slick digital
                experience gave a top-10 FX sellside provider a competitive
                edge.
              </p>
              <ul style={{ display: "flex", listStyle: "none", gap: "12px" }}>
                <li style={{ borderRight: "1px solid gray" }}>BRANDING</li>
                <li style={{ borderRight: "1px solid gray" }}>
                  MARKETING & COMMUNICATIONS
                </li>
                <li>Digital</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              height: "100vh",
              width: "100%",
              padding: "30px",
              marginLeft: "80px",
            }}
          >
            <video
              src="https://cdn.sanity.io/files/9pxljqkt/production/d2ac87bffe5ffc095e492c78d8256474f11e318a.mp4"
              preload="auto"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "107%", marginTop: "-80px" }}
            />
            <h2 className="sec2">The Future of Finance in Soundbites.</h2>
            <p style={{ color: "rgb(66, 64, 55)" }}>
              A video channel convening conversations with some of the brightest
              minds in finance showcased a large bank’s unique perspective and
              market connectedness.
            </p>
            <ul style={{ display: "flex", listStyle: "none", gap: "12px" }}>
              <li style={{ borderRight: "1px solid gray" }}>Content</li>
              <li style={{ borderRight: "1px solid gray" }}>
                MARKETING & COMMUNICATIONS
              </li>
              <li>Digital</li>
            </ul>
          </div>
        </div>
      </section>
      <section
        style={{
          height: "120vh",
          display: "flex",
          padding: "30px",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <div>
          <img
            style={{ height: "80vh", width: "100%" }}
            src="https://cdn.sanity.io/images/9pxljqkt/production/cbd01adb64e9263777bfe4faa80cc0ac2ae1fdae-2704x1200.jpg"
            alt=""
          />
        </div>
        <div>
          <h2 className="sec2">Breathing New Life into a Brand.</h2> <br />
          <p style={{ color: "rgb(66, 64, 55)" }}>
            An elegant rebrand for a large market utility threw the spotlight on
            its bold new commercial aspirations following a recent merger.
          </p>
          <br />
          <ul style={{ display: "flex", listStyle: "none", gap: "12px" }}>
            <li style={{ borderRight: "1px solid gray" }}>Content</li>
            <li style={{ borderRight: "1px solid gray" }}>
              MARKETING & COMMUNICATIONS
            </li>
            <li>Digital</li>
          </ul>
          <br />
          <br />
          <button
            className="sec2"
            style={{ borderRadius: "20px", height: "55px", width: "220px" }}
          >
            Explore More
          </button>
        </div>
      </section>
      <section
        style={{
          height: "80vh",
          display: "flex",
          padding: "50px",
          width: "auto",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "rgb(236, 236, 235)",
        }}
      >
        <h1 style={{ fontSize: "50px" }}>
          We won’t settle for anything ordinary. Our work is insightful,
          visually stunning and occasionally disruptive—and we always connect
          the marketing strategy back to your business strategy.
        </h1>
        <br />
        <br />
        <br />
        <button
          className="sec2"
          style={{ borderRadius: "20px", height: "55px", width: "220px" }}
        >
          About Us.
        </button>
      </section>
      <section
        style={{
          height: "40vh",
          display: "flex",
          padding: "50px",
          width: "auto",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "rgb(240, 240, 245)",
        }}
      >
        <div>
          <h1 style={{ fontSize: "120px", color: "rgb(66, 64, 55)" }}>
            Get In <br /> Touch.
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "250px",
            fontSize: "20px",
            marginTop: "55px",
            flexDirection: "column",
          }}
        >
          <p>
            <span style={{ fontWeight: "bolder" }}>Email: </span>{" "}
            contact@twobirdsandafox.com
          </p>
          <br />
          <p>
            <span style={{ fontWeight: "bolder" }}>Call: </span> +1 212 257 7557
          </p>
          <br />
          <p>
            <span style={{ fontWeight: "bolder" }}>Address: </span> 450 Park
            Avenue South, New York, NY, 10016
          </p>
        </div>
      </section>
      <section
        style={{
          height: "15vh",
          display: "flex",
          padding: "50px",
          width: "auto",

          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "rgb(240, 240, 245)",
        }}
      >
        <div
          style={{ height: "1px", width: "100%", border: "2px solid black" }}
        ></div>
        <br />
        <div>
          <p>@Two Birds & a Fox 2024</p>
        </div>
      </section>
    </>
  );
}

export default Navbar;