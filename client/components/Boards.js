import React, { PropTypes, Component } from "react";
// import { addModifiers } from "../utils";
// import BoardTileContainer from "../containers/BoardTileContainer";
// import BoardsSpinner from "./BoardsSpinner";

import { List, Card, Avatar, Row, Col } from "antd";

const { Meta } = Card;

var data = {};
class Title extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center", fontWeight: "bold" }}>
        {this.props.name}
        {<Divider />}
      </div>
    );
  }
}

const titleMap = {
  dapp: "Dapp",
  news: "资讯",
  defi: "Defi",
  exchange: "交易所",
  database: "炒币数据库"
};

function makeList(title) {
  const currentTitle = titleMap[title];
  const currentData = data[title];
  console.log(global.state.menuName, currentData);
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 3
      }}
      // header={<Title name={currentTitle} />}
      dataSource={currentData}
      renderItem={item => (
        <List.Item>
          <Card>
            <Meta
              avatar={<Avatar src={item.src} />}
              title={<a href={item.href}>{item.title}</a>}
              description={
                item.desc.substring(0, 40) || "This is the description"
              }
            />
          </Card>
        </List.Item>
      )}
    />
  );
}

class Boards extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = global.state;
  }
  componentWillMount() {
    var that = this;
    fetch("/static/data.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(val) {
        data = val;
        console.log(">>>>>>>>", data);
        that.setState({});
      });
  }
  componentDidMount() {
    setInterval(() => {
      if (global.state.menuName != this.state.menuName) {
        console.log("setstate");
        this.setState(global.state);
      }
    }, 500);
  }

  render() {
    var { error } = this.props;
    return (
      <div>
        {error ? (
          <div className="b-boards__message">Error loading boards.</div>
        ) : (
          <div
            // className="b-boards__items"
            style={{ background: "#ECECEC", padding: "30px" }}
          >
            {this.state.menuName ? (
              <Row gutter={16}>{makeList(global.state.menuName)}</Row>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}
// function Boards({ ids = [], spinner, error }) {
//   return (
//     <div>
//       {error ? (
//         <div className="b-boards__message">Error loading boards.</div>
//       ) : (
//         <div
//           // className="b-boards__items"
//           style={{ background: "#ECECEC", padding: "30px" }}
//         >
//           {global.menuName ? (
//             <Row gutter={16}>{makeList(global.menuName)}</Row>
//           ) : null}
//         </div>
//       )}
//       {spinner ? (
//         <div className="b-boards__spinner">
//           <BoardsSpinner />
//         </div>
//       ) : (
//         <div />
//       )}
//     </div>
//   );
// }

// Boards.propTypes = {
//   ids: PropTypes.array.isRequired,
//   spinner: PropTypes.bool,
//   error: PropTypes.bool
// };

export default Boards;
