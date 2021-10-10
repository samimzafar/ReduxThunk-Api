import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dogAction } from "../store/DogStore";
const useStyles = makeStyles({
  AddToCartStyles: {
    width: "100%",
    height: "70vh",
    padding: "10px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  breedNameBtnStyle: {
    display: "flex",
    width: "70%",
    justifyContent: "space-around",
    alignItems: "center",
    "& h2": {
      color: "#ff2b2b",
      fontSize: "2rem",
    },
  },

  breedImageStyle: {
    width: "100%",
    height: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      width: "50%",
      height: "40vh",
    },
  },
  breedBtnStyle: {
    "& button": {
      color: "white",
      backgroundColor: "#581845",
      fontSize: "2rem",
      fontWeight: "bold",
      fontFamily: "Cursive",
      border: "none",
      outline: "none",
      borderRadius: 5,
    },
    "& button:hover": {
      backgroundColor: "white",
      color: "#581845",
      transition: ".8s ease-in-out",
      cursor: "pointer",
    },
    "& button:disabled": {
      backgroundColor: "#A1A59B",
      cursor: "not-allowed",
      color: "red",
    },
    "& i": {
      fontSize: "1.8rem",
      color: "#ff2b2b",
    },
  },
});
export default function AddToCart() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const cartUser = useSelector((state) => state.Dog.cartUser);
  const breedName = useSelector((state) => state.Dog.SelectedBreed.breed);
  const breedImage = useSelector((state) => state.Dog.SelectedBreed.message);
  const handleClick = () => {
    cartUser.push({ breedName, breedImage });
    console.log("cartUser = ", cartUser);
    dispatch(dogAction.addToCart(cartUser));
  };
  return (
    <div className={classes.AddToCartStyles}>
      <div className={classes.breedNameBtnStyle}>
        <h2>Breed Name : {breedName}</h2>

        <div className={classes.breedBtnStyle}>
          <button
            onClick={handleClick}
            // disabled={
            //   cartUser.find((i) => i.breedName === breedName) !== undefined
            // }
          >
            Add Cart &nbsp;&nbsp;&nbsp;
            <i class="fas fa-star-half-alt" />
          </button>
        </div>
      </div>

      <div className={classes.breedImageStyle}>
        <img src={breedImage} />
      </div>
    </div>
  );
}
