import Taro, {Component, Config} from "@tarojs/taro";
import {Image, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import {AtNavBar} from "taro-ui";
import marked from "marked";
// import onlyIf from 'react-only-if/dist/index'
import {ViewArticleProps, ViewArticleState} from "./index.interface";
import "./index.scss";
import {ArticleDetailInterface, AuxImageInteface} from "../common/ts/index";
// import { ArticleDetailInterface } from '../common/ts/common.interface';
import {AuxImageView, ViewArticleArea, ViewArticleFooter} from "../../components/index";
// import ViewShareTokenArea from
// '../../components/viewShareTokenArea/viewShareTokenArea'

@connect(({viewArticle}) => ({
  ...viewArticle,
}))

class ViewArticle extends Component <ViewArticleProps,
ViewArticleState> {
  public config: Config = {
    navigationBarTitleText: "博雅塔",
  };
  public contentArea: any;
  constructor(props: ViewArticleProps) {
    super(props);
    this.state = {
      dummy: "gangxiaoer-h5",
      shareToken: "",
    };
  }
  public async getArticleShareToken() {
    const {shareToken} = this.state;
    const token = "";
    console.log(`getArticleShareToken.shareToken: ${shareToken}`);
    await this
      .props
      .dispatch({
        type: "viewArticle/getArticleShareToken",
        payload: {
          token,
          shareToken,
        },
      });
  }

  public async getArticleDetail() {
    const {token, articleId} = this.props;
    console.log(`getArticleDetail.articleId: ${articleId}`);
    await this
      .props
      .dispatch({
        type: "viewArticle/getArticleDetail",
        payload: {
          token,
          articleId,
        },
      });
  }

  public async componentWillMount() {
    console.log("componentWillMount");
    console.log(this.$router.params);
    // 输出 { id: 2, type: 'test' }
    const shareToken = this.$router.params.shareToken;
    console.log(`shareToken: ${shareToken}`);
    this.setState({
      shareToken,
    }, () => {
      this.getData();
    });
  }
  public async getData() {
    await this.getArticleShareToken();
    await this.getArticleDetail();
  }
  public componentDidMount() {}
  public handleClick(e: any) {
    //
    console.log(e);
    Taro.redirectTo({url: `/pages/index/index`});
  }

  public render() {
    // const { shareToken, dummy } = this.state
    let {articleDetail} = this.props;
    // const foo = (articleDetail : ArticleDetailInterface) => {   if
    // (articleDetail) {     return ( < View > <View>       {articleDetail.subject}
    // </View> < View > {       articleDetail.content     } < /View>    < /View >) }
    // }
    if (articleDetail && articleDetail.content) {
      const htmlContent: string = marked(articleDetail.content);
      articleDetail.htmlContent = htmlContent;
    } else {
      articleDetail = {
        htmlContent: "",
        ...articleDetail,
      };
    }

    const EmptyContentView = () => {
      return "无正文 ......";
    };
    const HtmlContentView = (articleDetail: ArticleDetailInterface) => {
      return articleDetail.htmlContent;
    };
    return (
      <View className="fx-viewArticle-wrap">
        <AtNavBar
          onClickRgIconSt={this
          .handleClick
          .bind(this)}
          onClickRgIconNd={this
          .handleClick
          .bind(this)}
          onClickLeftIcon={this
          .handleClick
          .bind(this)}
          color="#000"
          title="博雅塔"
          leftText="返回"
          rightFirstIconType="bullet-list"
          rightSecondIconType="user"
        />
        <ViewArticleArea articleDetail={articleDetail} /> {/* 主图 */}
        <View className="at-row">
          <View
            className="at-col at-col-12"
            key="main-image-area"
            ref={(e: any) => {
            this.contentArea = e;
          }}
          >
            <Image src={articleDetail.mainimage} mode="widthFix" />
          </View>
        </View>
        {/* 正文 */}
        <View className="at-row">
          <View
            className="at-col at-col-12"
            key="content-area"
            ref={(e: any) => {
            this.contentArea = e;
          }}
          >
            {((articleDetail.htmlContent === undefined) || (articleDetail.htmlContent === ""))
              ? EmptyContentView()
              : HtmlContentView(articleDetail)
}
          </View>
        </View>
        {/* 附图 */}
        {articleDetail.auximages && articleDetail
          .auximages
          .map((auxImage: AuxImageInteface, index: number, _) => {
            if (auxImage.isDefault === false) {
              return (<AuxImageView auxImage={auxImage} index={index} />);
            }
          })
}

        <ViewArticleFooter articleDetail={articleDetail} />
      </View >
    );
  }
}

export default ViewArticle;
