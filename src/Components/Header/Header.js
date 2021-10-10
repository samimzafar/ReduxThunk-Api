import React from "react";
import Submit from "../Submit";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  header: {
    width: "100%",
    height: "90vh",
    position: "absolute",
    top: 68,
    backgroundImage:
      "linear-gradient(to bottom, rgb(83 115 67 / 0%), rgb(63 255 58))",
  },
});
export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Submit />
    </div>
  );
}
