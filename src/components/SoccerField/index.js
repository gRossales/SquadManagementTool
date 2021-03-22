import styles from "./styles.module.css";
import Position from "../Position";

function SoccerField({ formation }) {
  function generateFormation() {
    var renderPositions = [];
    (formation || "3-2-2-3")
      .split("-")
      .reverse()
      .forEach((n, index) => {
        let row = parseInt(n);
        let i = 0;
        switch (row) {
          case 1:
          case 4:
            renderPositions.push(<Position spanSize={6} key={`${index}0`} />);
            i += 1;
            break;

          case 2:
          case 5:
            renderPositions.push(<Position spanSize={3} key={`${index}0`} />);
            renderPositions.push(<Position spanSize={3} key={`${index}1`} />);
            i += 2;
            break;
          default:
            break;
        }
        for (; i < row; i++) {
          renderPositions.push(<Position spanSize={2} key={`${index}${i}`} />);
        }
      });
    renderPositions.push(<Position spanSize={6} key="40" />);
    return renderPositions;
  }

  return (
    <div className={styles.container}>
      <div className={styles.field}>{generateFormation()}</div>
    </div>
  );
}

export default SoccerField;
