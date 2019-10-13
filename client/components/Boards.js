import React, { PropTypes } from "react";
import { addModifiers } from "../utils";
import BoardTileContainer from "../containers/BoardTileContainer";
import BoardsSpinner from "./BoardsSpinner";

import { List, Card, Avatar } from "antd";
const { Meta } = Card;
const dappData = [
  {
    title: "DeFi.Review",
    src: "https://defi.review/favicon.ico",
    desc: "Tracking the key metrics of DeFi projects"
  },
  {
    title: "Dapp.Review",
    src: "https://dapp.review/favicon.ico",
    desc: "提供最准确的DApp数据用户见解和市场分析"
  },
  {
    title: "DAppTotal",
    src: "https://m.dapptotal.com/static/img/icon.png",
    desc: "a world leading DApp data service platform"
  }
];

const newsData = [
  {
    title: "Block123",
    src: "https://realsatoshi.net/wp-content/uploads/2019/08/block123.jpg",
    desc: "区块链项目导航大全"
  },
  {
    title: "CoinGecko",
    src:
      "https://realsatoshi.net/wp-content/uploads/2019/08/JTajbfS_400x400.jpg",
    desc: "加密数据综合查询"
  },
  {
    title: "CoinMarketCap",
    src:
      "https://realsatoshi.net/wp-content/uploads/2019/08/OEj1fTFp_400x400.jpg",
    desc: "常用加密数据查询"
  },
  {
    title: "Twitter",
    src:
      "https://realsatoshi.net/wp-content/uploads/2019/08/zRim1x6M_400x400.jpg",
    desc: "连接加密世界的大门"
  },
  {
    title: "链闻",
    src:
      "https://realsatoshi.net/wp-content/uploads/2019/08/kjmVTJtS_400x400.jpg",
    desc: "区块链资讯与深度分析"
  },
  {
    title: "Messari",
    src:
      "https://realsatoshi.net/wp-content/uploads/2019/08/TNls9ggU_400x400.jpg",
    desc: "加密综合信息数据服务商"
  },
  {
    title: "币未来",
    src:
      "https://realsatoshi.net/wp-content/uploads/2019/09/cropped-bilogo2-270x270.jpg",
    desc: "每周三篇加密文献翻译"
  },
  {
    title: "Smith and Crown",
    src:
      "https://realsatoshi.net/wp-content/uploads/2019/09/1DZYY55_400x400.png",
    desc: "山寨版Messari"
  },
  {
    title: "链向财经",
    src: "https://realsatoshi.net/wp-content/uploads/2019/09/chainfor-1.jpeg",
    desc: "区块链项目服务平台"
  },
  {
    title: "4chan",
    src: "https://realsatoshi.net/wp-content/uploads/2019/08/4chan.png",
    desc: "实时跟踪热门币种"
  },
  {
    title: "区块律动",
    src: "https://realsatoshi.net/wp-content/uploads/2019/08/blockbeats.png",
    desc: "区块链研究机构与资讯平台"
  }
];

const exChangeData = [
  {
    title: "BitMax",
    src: "https://realsatoshi.net/wp-content/uploads/2019/08/bitmax.jpg",
    desc: "玩法很多的交易所"
  },
  {
    title: "Bittrex",
    src: "https://realsatoshi.net/wp-content/uploads/2019/08/bittrex-1.jpg",
    desc: "国外老牌山寨交易网"
  },
  {
    title: "Gate",
    src:
      "https://realsatoshi.net/wp-content/uploads/2019/08/dxrS0XbM_400x400.jpg",
    desc: ""
  },
  {
    title: "IDEX",
    src: "https://realsatoshi.net/wp-content/uploads/2019/08/idex_400x400.png",
    desc: "小市值币天堂"
  },
  {
    title: "KuCoin",
    src: "https://realsatoshi.net/wp-content/uploads/2019/08/1L_400x400.jpg",
    desc: "人民交易所"
  },
  {
    title: "Poloniex",
    src:
      "https://realsatoshi.net/wp-content/uploads/2019/08/wjGAadvs_400x400.jpg",
    desc: "合规之后能否崛起"
  },
  {
    title: "币安",
    src:
      "https://realsatoshi.net/wp-content/uploads/2019/08/FNue6te7_400x400.jpg",
    desc: "巨头交易所"
  },
  {
    title: "抹茶交易所",
    src: "https://realsatoshi.net/wp-content/uploads/2019/08/mxc_400x400.png",
    desc: "快速崛起的黑马交易所"
  },
  {
    title: "火币",
    src:
      "https://realsatoshi.net/wp-content/uploads/2019/08/R65FAGxg_400x400.jpg",
    desc: "综合性加密货币服务商"
  },
  {
    title: "BiHODL",
    src:
      "https://realsatoshi.net/wp-content/uploads/2019/08/kbGqBXUK_400x400.png",
    desc: "Web3.0时代的龙头交易所，2-3年内必将崛起"
  },
  {
    title: "虎符",
    src: "https://realsatoshi.net/wp-content/uploads/2019/09/Hoo-wallet.png",
    desc: "新用户友好型交易所"
  }
];

const biDataBaseData = [
  {
    title: "CryptoMiso",
    src:
      "https://realsatoshi.net/wp-content/uploads/2019/08/FcnOBLYm_400x400.jpg",
    desc: "通过代码编辑次数评估加密货币"
  },
  {
    title: "Fifty one",
    src:
      "https://realsatoshi.net/wp-content/uploads/2019/08/odxGWCsD_400x400.png",
    desc: "通过影响力值来评估加密货币"
  },
  {
    title: "ICODrops",
    src:
      "https://realsatoshi.net/wp-content/uploads/2019/08/YygF9NdQ_400x400.jpg",
    desc: "ICO 项目数据库"
  },
  {
    title: "牛币圈",
    src: "https://realsatoshi.net/wp-content/uploads/2019/08/logo.png",
    desc: "找百倍小矿币，就上牛币圈"
  },
  {
    title: "Github",
    src:
      "https://realsatoshi.net/wp-content/uploads/2019/08/iuxTnT5g_400x400.jpg",
    desc: "项目代码勤不勤奋就看Github"
  }
];
function Boards({ ids = [], spinner, error }) {
  return (
    <div className="b-boards">
      {error ? (
        <div className="b-boards__message">Error loading boards.</div>
      ) : !ids.length ? (
        <div className="b-boards__message">Boards not found.</div>
      ) : (
        <div style={{ background: "#ECECEC", padding: "30px" }}>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3
            }}
            header={"资讯"}
            dataSource={newsData}
            renderItem={item => (
              <List.Item>
                <Card>
                  <Meta
                    avatar={<Avatar src={item.src} />}
                    title={item.title}
                    description={item.desc || "This is the description"}
                  />
                </Card>
              </List.Item>
            )}
          />
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3
            }}
            header={"Dapp"}
            dataSource={dappData}
            renderItem={item => (
              <List.Item>
                <Card>
                  <Meta
                    avatar={<Avatar src={item.src} />}
                    title={item.title}
                    description={item.desc || "This is the description"}
                  />
                </Card>
              </List.Item>
            )}
          />
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3
            }}
            header={"交易所"}
            dataSource={exChangeData}
            renderItem={item => (
              <List.Item>
                <Card>
                  <Meta
                    avatar={<Avatar src={item.src} />}
                    title={item.title}
                    description={item.desc || "This is the description"}
                  />
                </Card>
              </List.Item>
            )}
          />
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3
            }}
            header={"炒币数据库"}
            dataSource={biDataBaseData}
            renderItem={item => (
              <List.Item>
                <Card>
                  <Meta
                    avatar={<Avatar src={item.src} />}
                    title={item.title}
                    description={item.desc || "This is the description"}
                  />
                </Card>
              </List.Item>
            )}
          />
        </div>
        // <div className="b-boards__items">
        //   {ids.map((id, i) =>
        //     <div
        //       className="b-boards__item"
        //       key={id}
        //     >
        //       <BoardTileContainer id={id} />
        //     </div>
        //       )
        //       }
        // </div>
      )}
      {spinner ? (
        <div className="b-boards__spinner">
          <BoardsSpinner />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

Boards.propTypes = {
  ids: PropTypes.array.isRequired,
  spinner: PropTypes.bool,
  error: PropTypes.bool
};

export default Boards;
