import React, { Component } from "react";
// import { Link } from "react-router-dom";
import '../App.css';

class Landing extends Component {
  render() {
    return (
      <div>

        <header className="masthead text-center text-white">
          <div className="masthead-content">
            <div className="container">
              <h1 className="masthead-heading mb-0">Borq</h1>
              <h2 className="masthead-subheading mb-0">A Dog Meetup App</h2>
            </div>
          </div>
          <div className="bg-circle-1 bg-circle" />
          <div className="bg-circle-2 bg-circle" />
          <div className="bg-circle-3 bg-circle" />
          <div className="bg-circle-4 bg-circle" />
        </header>

        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img
                    className="img-fluid rounded-circle"
                    src="/dog1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">For those who love to BORQ...</h2>
                  <p>
                    For dog owners who want to spoil their pups with pawsitively pawfect parties, sign up for BORQ today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="p-5">
                  <img
                    className="img-fluid rounded-circle"
                    src="/dog2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-5">
                  <h2 className="display-4">A borqing good time</h2>
                  <p>
                    All of our events are chosen with dog friendly locations in mind, have BORQ staff on hand with 
                    treats for the dogs and refreshments for the humans, and are a great way for your dog to make friends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img
                    className="img-fluid rounded-circle"
                    src="/dog3.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">Find your next playdate today</h2>
                  <p>
                    Register for an account, add your dog's profiles, and browse the exciting events we have available! RSVP for an
                    event to guarantee your spot and BORQ goodies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-5 bg-black">
          <div className="container">
            <p className="m-0 text-center text-white small">
              Copyright &copy; Your Website 2019
            </p>
          </div>
        </footer>


      </div>
    );
  }
}

export default Landing;