import "./App.css";
import Button from "@mui/material/Button";
import useStyles from "./utils/styles";

const App = () => {
  const classes = useStyles();
  return (
    <div className="App_Base">
      <h2 className="crimson-text-regular">
        Hello ther TRRE is good lokking theire aldbl gabbage.
      </h2>
      <p className={classes.error}>
        Hello ther TRRE is good lokking theire aldbl gabbage.dd
      </p>
      <div>
        <Button variant="contained">Hello world</Button>
      </div>
    </div>
  );
};

export default App;
