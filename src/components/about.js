import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const AboutSection = () => (
  <ScrollableAnchor id="about">
    <section className="content-section bg-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>From Wall Street to the Great Wall</h2>
            <p className="lead mb-5">
              John is an international motivational speaker and creative
              marketing business consultant. An alumni of Florida A&M
              University, his early career experiences in finance consisted of
              conducting financial and strategy due diligence on Hedge Funds and
              Private Equity firms for internal marketing to ultra high net
              worth clients for several leading investment banks in New York.
              After the financial crisis of 2008, John reacted globally and
              launched his brand strategy group with partnership in Shanghai,
              China. Utilizing this platform John consulted small to mid-sized
              U.S. enterprises on best practices to expand strategic
              relationships within China. In addition to analyzing and
              synthesizing complex market data to advise clients, John created
              original branding strategy for local and multinational companies.
              While living in Hong Kong John served as a trainer, coach and
              counselor to a diverse array of clients with his specialization in
              helping clients get started with cryptocurrency . John along with
              his partners at{" "}
              <a href="https://gemvault.io/">https://gemvault.io</a> offer
              block-chain development services for creating tokens, smart
              contracts, and other software solutions. They also provide code
              audits and project guidance for existing applications.
            </p>
            <a
              className="btn btn-dark btn-md js-scroll-trigger"
              href="#services"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default AboutSection;
