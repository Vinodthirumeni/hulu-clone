import React, { forwardRef, useState } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpAltSharpIcon from "@material-ui/icons/ThumbUpAltSharp";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
const base_url = "https://image.tmdb.org/t/p/original/";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    height: "390",
    width: "640",
    padding: theme.spacing(2, 4, 3),
  },
}));
const VideoCard = forwardRef(({ movie }, ref) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (movie) => {
    setOpen(true);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div ref={ref} className="videoCard">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          </div>
        </Fade>
      </Modal>
      <img
        onClick={() => handleOpen(movie)}
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate
        line={2}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} .`}
        {movie.release_date || movie.first_air_date} .
        <ThumbUpAltSharpIcon />
        {movie.vote_count}
      </p>
    </div>
  );
});
export default VideoCard;
