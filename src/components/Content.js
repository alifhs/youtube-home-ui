import React from "react";
import "./content.scss";

import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

let cardItems = [
  "https://pixabay.com/get/gbfe1b355e374da6200dcf86d7a933c309b2e8a7e66ad8f8c324673f0d81a197f1ef142fff5759983b003a8a32a7668ddb9e0671ab5aa567ce999d05eeaea219c_640.jpg",

  "https://pixabay.com/get/gbd03f813ab748ce587e329b4f96c381d4b2c4d4e87a6a78e2ec62275419d288af543de566180c26233e4fc6c6df0422a061c2ce6283a63e51bcb173da7bacbd8_640.jpg",
  "https://pixabay.com/get/gcf598ca48930b54d3b07ef5e4d272c6d556067b96f150db63fc45671fd659d450d61683dfa1503f3475594d8e34072276146dbe6b27128efeb43b0b271ea8271_640.jpg",
  "https://pixabay.com/get/g7352efde7f1f29201153a1cac728e7882ceb821c02e9c4e39fae40e3a14e4c8ef1ae4baa75ab605bc0b58f71b9a4ba671985cafe567dc877144a7f6ee32e8a16_640.jpg",
  "https://pixabay.com/get/g0febb95dd7d28258fbcc47bb0d72ad45131819c0a1000cf9a441241372e2048f18455e52076a4ca2e57c0cb50109e1d84d21a73ccd0dd0aac350fca90dde8d97_640.jpg",
  "https://pixabay.com/get/g8961863ff68bd0e7b7587c8a1cabdbcdc61fa782b7a621005861397d969f02bff68105b637465e371ca651d9efbf1acbbd3e20545bde50b40ec647c36a965b8c_640.jpg",
  "https://pixabay.com/get/g1f5d74b50fdba36e9050568f66238633ac393bddc09418cde6b2d08321a84c5a4773d8f5191e063bbda6610c8b680b1a6c5d1c6f402711151f35195e6e6760d2_640.jpg",
  "https://pixabay.com/get/ga6b1747a92a428ec8124296b13c3ecfd39a3ab4cb48100a93a650ba97cf39ae31b941fe5b4f8bb0a47a01b3db7af080a4b53c3953bcf7e890a46d57e398b37f4_640.jpg",
  "https://pixabay.com/get/g193ee065522cf51b7b9c6d31f9f9b48d13316fb673111697509754e865989cce764d502be050b0cc287aaf84983a2d884238c2d49044badad254b04e778c059a_640.jpg",
  "https://pixabay.com/get/g00fd174982af5817ea41d162b440f591e0d10f9a68e04a9c084edf1882c2b4cd1ac23411ad77ce6cdacc461cbbc7b45a90be63ca5acb049da6ffdb7956c8d85d_640.jpg",
  "https://pixabay.com/get/g89dbad7483a9ec703d8e03f18c01abcaf2a5f7522fdd0c75a01ddc3342bb0d0537448d738db9556c053b75db5b39cdbeb3d13b844649df94429ff7b04c6725c3_640.jpg",
  "https://pixabay.com/get/gea454860165d7999a53f966f91d99b3a2a4feacd27048c3f5e6266bd8d91aaed43b640309104ae84b3ef0ef51512b99a82266528618c4ff41b9e48772f02ff27_640.jpg",
    "https://pixabay.com/get/ge7a89147b358a7b23039f81dde3ccde34718647f8956fca226d3f6a80a52becb9ae8b3a814bc070c580872449212baae41a97a2a52aec6121ece08e72189cdd9_640.jpg",
  "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
];

const Content = () => {
  return (
    <div className="content">
      <div className="grid-container">
        {cardItems.map((item, index) => {
          return (
            <Card
              key={index}
              hoverable
              style={{ width: 220 }}
              cover={<img alt="example" src={item} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
