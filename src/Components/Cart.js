import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dogAction } from "../store/DogStore";
const useStyles = makeStyles({
  CartStyle: {
    position: "absolute",
    top: 50,
    width: "100%",
    height: "100vh",
  },
  CartDataStyle: {
    display: "flex",
    paddingTop: "3rem",
    width: "100%",
    justifyContent: "center",
    "& img": {
      width: "30%",
      height: "50vh",
    },
  },
  btnNameStyle: {
    display: "flex",
    flexDirection: "column",
    " & h2": {
      backgroundColor: "#581845",
      color: "white",
    },
    "& button": {
      padding: 10,
      border: "none",
      backgroundColor: "#581845",
      color: "white",
      fontSize: "1rem",
      fontWeight: "bold",
    },
    "& button:hover": {
      backgroundColor: "red",
      color: "white",
      cursor: "pointer",
      transition: ".8s ease-in-out",
    },
  },
});
export default function Cart() {
  const classes = useStyles();
  const cartUser = useSelector((state) => state.Dog.cartUser);
  const dispatch = useDispatch();
  console.log("cartUser lenght = ", cartUser.length);
  return (
    <div className={classes.CartStyle}>
      {cartUser
        ? cartUser.map((val, i) => (
            <div className={classes.CartDataStyle}>
              <img src={val.breedImage} />
              <div className={classes.btnNameStyle}>
                <h2>Breed = {val.breedName}</h2>
                <button
                  onClick={() => {
                    dispatch(dogAction.deletefromCart(val));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}
