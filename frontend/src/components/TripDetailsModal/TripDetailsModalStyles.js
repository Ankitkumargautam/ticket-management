const blueColor = "#1131f3";

const styles = {
  modalStyle: (isSmallScreen, isMediumScreen) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmallScreen ? "95%" : isMediumScreen ? "75%" : "800px",
    height: "auto",
    // height: isSmallScreen ? "95%" : isMediumScreen ? "80%" : "500px",
    bgcolor: "background.paper",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    // borderRadius: "8px",
    borderRadius: "0 0 16px 16px",
  }),

  headerBox: {
    alignItems: "center",
    display: "flex",
    color: "white",
    backgroundColor: blueColor,
    padding: "5px 10px",
    height: "30px",
    // borderRadius: "8px 8px 0 0",
  },

  headerText: {
    fontSize: "0.625rem",
    fontWeight: "bold",
  },

  firstRowBox: {
    alignItems: "center",
    height: "110px",
    bgcolor: blueColor,
    display: "flex",
  },

  imageBox: {
    flex: 0.6,
    display: "flex",
    justifyContent: "start",
  },

  imageStyle: (isSmallScreen, isMediumScreen) => ({
    width: isSmallScreen ? "160px" : isMediumScreen ? "250px" : "400px",
    height: isSmallScreen ? "60px" : isMediumScreen ? "80px" : "100px",
    // objectFit: "cover",
  }),

  firstRowSideBox: {
    flex: 0.4,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8px",
  },

  firstRowSideBoxOne: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  firstRowSideBoxOneCityCode: (isSmallScreen, isMediumScreen) => ({
    fontSize: isSmallScreen ? "1rem" : isMediumScreen ? "2rem" : "3rem",
    color: "white",
    fontWeight: "bold",
    letterSpacing: -1.7,
  }),

  firstRowSideBoxOneCityName: (isSmallScreen, isMediumScreen) => ({
    color: "white",
    fontSize: isSmallScreen ? "0.6rem" : isMediumScreen ? "0.9rem" : "1rem",
    fontWeight: "bold",
    letterSpacing: -1.2,
  }),

  firstRowSideBoxOneIcon: (isSmallScreen, isMediumScreen) => ({
    fontSize: isSmallScreen ? "1.5rem" : isMediumScreen ? "2.5rem" : "3rem",
    color: "white",
  }),

  secondRowBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    // padding: "10px",
    // gap: "8px",
    bgcolor: blueColor,
    borderRadius: "0 0 16px 16px",
  },

  secondRowBoxInner: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  secondRowBoxInnerFirst: {
    fontWeight: "bold",
    color: "white",
    fontSize: "1rem",
    letterSpacing: -1,
  },

  secondRowBoxInnerSecond: {
    fontWeight: "bold",
    color: "white",
    fontSize: "0.85rem",
    letterSpacing: -1.2,
  },

  thirdRowBox: {
    display: "flex",
    // flexDirection: "row",
    gap: "4px",
    justifyContent: "space-between",
    padding: "5px",
    marginTop: "10px",
    bgcolor: "background.paper",
  },

  cardBox: {
    width: "100%", // 3 cards in a row, adjust for small screens with media queries if needed
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    ml: 1,
    mr: 1,
  },

  cardFirstRow: {
    display: "flex",
    padding: "10px",
    alignItems: "center",
  },

  cardImageBox: {
    height: "50px",
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  cardImageStyle: {
    width: "100%",
    height: "auto",
    borderRadius: "4px",
    objectFit: "cover",
  },

  cardInfoBox: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    paddingLeft: "10px",
  },

  cardInfoBoxTextHeading: {
    fontSize: "12px",
    fontWeight: "bold",
  },

  cardInfoBoxText: {
    fontSize: "11px",
    // fontWeight: 'bold'
  },

  cardSecondRow: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px",
    border: "2px dashed gray",
    margin: "10px",
    // borderRadius: "8px",
  },

  checkItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "0.8rem",
    color: "#333",
  },

  crossIcon: {
    color: "#ffA500",
    fontSize: "1.2rem",
  },

  checkIcon: {
    color: "#ffA500",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },

  forthRowBox: {
    bgcolor: blueColor,
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    pl: 3,
    pr: 3,
    pt: 1.2,
    pb: 1.2,
  },
  forthRowBoxText: {
    fontSize: "1.325rem",
    fontWeight: "1000",
    letterSpacing: -1.2,
  },

  fifthRowBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "10px",
    gap: "8px",
    bgcolor: "white",
    borderRadius: "0 0 16px 16px",
    mt: 1.2,
    mb: 1.2,
  },

  fifthRowBoxInner: {
    color: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },

  fifthRowBoxInnerFirst: {
    fontWeight: "bold",
    color: "black",
    fontSize: "1rem",
    letterSpacing: -1,
  },

  fifthRowBoxInnerSecond: {
    fontWeight: "bold",
    color: "black",
    fontSize: "0.85rem",
    letterSpacing: -1.2,
  },
};

export default styles;
