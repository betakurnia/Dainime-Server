import React, { Component } from "react";

// Redux
import { getLastEpisode } from "../../../actions/episodeAnimeActions";
import { getEpisodeCount } from "../../../actions/helperActions";

// npm
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import dateFormat from "dateformat";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class RecentEpisode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRenderData: true,
      data: [],
      data2: [],
      data3: [],
      data4: []
    };
  }

  componentDidMount() {
    this.props.getLastEpisode(this.props.title);

    this.props.getEpisodeCount(this.props.title);
  }

  render() {
    dateFormat.i18n = {
      dayNames: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jum'at",
        "Sabtu"
      ],
      monthNames: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"]
    };

    const FakeComoponent = (
      <div className={this.props.column}>
        <div className="utility_visibility_hidden">
          <Link to={`/blabla`}>
            <a
              href="/#"
              className=" text-light-black utility_text-decoration_underline  anime-header__title_text_18px"
            >
              <h5>Episode </h5>
            </a>
          </Link>
          <p className="text-light-gray utility_text_14px"> 1 Jan 2020</p>
          <Link to={`blabla`}>
            <img
              src={`/image/helper/FakeImage.jpg`}
              alt="fakeImage"
              className="img-fluid"
            />
          </Link>
        </div>
      </div>
    );

    const lastEpisod = Array.from(this.props.episodeAnime.lastEpisode);

    let dataLength = lastEpisod.length;

    if (dataLength >= 6) {
      dataLength = 6;
    }

    const lastEpisode = lastEpisod.slice(0, 6).reverse();

    let temp = [];

    if (dataLength > 1 && dataLength <= 2) {
      lastEpisode.reverse();
    }

    if (dataLength > 2 && dataLength <= 4) {
      let removed = dataLength % 2;
      if (removed === 0) {
        removed = 2;
      }
      temp = lastEpisode.slice(2, dataLength).reverse();
      lastEpisode.splice(2, removed);
      lastEpisode.reverse();
      lastEpisode.push(...temp);
    }

    if (dataLength > 4 && dataLength <= 6) {
      let removed = dataLength % 2;
      if (removed === 0) {
        removed = 2;
      }
      temp = lastEpisode.slice(4, dataLength).reverse();
      lastEpisode.splice(4, removed);
      lastEpisode.reverse();
      lastEpisode.push(...temp);
    }

    let data = [];
    let data2 = [];
    let data3 = [];

    let FakeComponented;
    let FakeComponented2;
    let FakeComponented3;

    if (dataLength === 1) {
      FakeComponented = [FakeComoponent];
    }

    if (dataLength === 3) {
      FakeComponented2 = [FakeComoponent];
    }

    if (dataLength === 5) {
      FakeComponented3 = [FakeComoponent];
    }

    if (dataLength >= 2) {
      data = lastEpisode.slice(0, 2);
      if (dataLength >= 4) {
        data2 = lastEpisode.slice(2, 4);
        if (dataLength >= 6) {
          data3 = lastEpisode.slice(4, 6);
        } else {
          data3 = lastEpisode.slice(4, dataLength);
        }
      } else {
        data2 = lastEpisode.slice(2, dataLength);
      }
    } else {
      data = lastEpisode.slice(0, dataLength);
    }

    const lastEpisoded = data.reverse().map(lastEpisode => (
      <React.Fragment>
        <div className={this.props.column}>
          <Link
            to={`/${lastEpisode.title
              .toLowerCase()
              .split(" ")
              .join("-")}/episode-${lastEpisode.episode}`}
          >
            <a
              href="/#"
              className=" text-light-black utility_text-decoration_underline  anime-header__title_text_18px"
            >
              <h5>Episode {lastEpisode.episode}</h5>
            </a>
          </Link>
          <p className="text-light-gray utility_text_14px">
            {" "}
            {dateFormat(lastEpisode.date, "h:MM TT ")}
          </p>
          <img
            src={`/image/episode-anime/${lastEpisode.imageEpisode}`}
            alt={lastEpisode.imageEpisode}
            className="img-fluid utlity__z-index_1"
          />
        </div>
      </React.Fragment>
    ));

    const lastEpisoded2 = data2.reverse().map(lastEpisode => (
      <React.Fragment>
        <div className={this.props.column}>
          <Link
            to={`/${lastEpisode.title
              .toLowerCase()
              .split(" ")
              .join("-")}/episode-${lastEpisode.episode}`}
          >
            <a
              href="/#"
              className=" text-light-black utility_text-decoration_underline  anime-header__title_text_18px"
            >
              <h5>Episode {lastEpisode.episode}</h5>
            </a>
          </Link>
          <p className="text-light-gray utility_text_14px">
            {" "}
            {dateFormat(lastEpisode.date, "h:MM TT ")}
          </p>
          <img
            src={`/image/episode-anime/${lastEpisode.imageEpisode}`}
            alt={lastEpisode.imageEpisode}
            className="img-fluid"
          />
        </div>
      </React.Fragment>
    ));

    const lastEpisoded3 = data3.reverse().map(lastEpisode => (
      <React.Fragment>
        <div className={this.props.column}>
          <Link
            to={`/${lastEpisode.title
              .toLowerCase()
              .split(" ")
              .join("-")}/episode-${lastEpisode.episode}`}
          >
            <a
              href="/#"
              className=" text-light-black utility_text-decoration_underline  anime-header__title_text_18px"
            >
              <h5>Episode {lastEpisode.episode}</h5>
            </a>
          </Link>
          <p className="text-light-gray utility_text_14px">
            {" "}
            {dateFormat(lastEpisode.date, "h:MM TT ")}
          </p>
          <img
            src={`/image/episode-anime/${lastEpisode.imageEpisode}`}
            alt={lastEpisode.imageEpisode}
            className="img-fluid"
          />
        </div>
      </React.Fragment>
    ));

    let totalData = [];

    if (dataLength >= 1) {
      totalData.unshift(
        <div className="d-flex utility_background_white">
          <div className="row">
            <div className="offset-1"></div>
            {lastEpisoded}
            {FakeComponented}
            <div className="offset-1"></div>
          </div>
        </div>
      );
    }

    if (dataLength > 2) {
      totalData.unshift(
        <div className="d-flex utility_background_white">
          <div className="row">
            <div className="offset-1"></div>
            {lastEpisoded2}
            {FakeComponented2}
            <div className="offset-1"></div>
          </div>{" "}
        </div>
      );
    }

    if (dataLength > 4) {
      totalData.unshift(
        <div className="d-flex utility_background_white">
          <div className="row">
            <div className="offset-1"></div>
            {lastEpisoded3}
            {FakeComponented3}
            <div className="offset-1"></div>
          </div>{" "}
        </div>
      );
    }

    return (
      <div>
        <div className="mt-4"></div>
        <div className="card">
          <div className="utility_background_light-black text-white  ">
            <div className="card-header   ">
              <h5>Episode Terakhir</h5>
            </div>
          </div>
          <div className="card-body">
            <div className="row ">
              <Carousel
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                width="100%"
              >
                {totalData}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RecentEpisode.propTypes = {
  episodeAnime: PropTypes.object.isRequired,
  helper: PropTypes.object.isRequired,
  getLastEpisode: PropTypes.func.isRequired,
  getEpisodeCount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  episodeAnime: state.episodeAnime,
  helper: state.helper
});

export default connect(mapStateToProps, {
  getLastEpisode,
  getEpisodeCount
})(RecentEpisode);
