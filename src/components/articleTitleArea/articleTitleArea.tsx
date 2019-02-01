import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { ArticleTitleAreaProps, ArticleTitleAreaState } from "./articleTitleArea.interface";
import "./articleTitleArea.scss";

class ArticleTitleArea extends Component<ArticleTitleAreaProps, ArticleTitleAreaState > {
  public static options = {
    addGlobalClass: true,
  };
  public static defaultProps: ArticleTitleAreaProps = {};
  constructor(props: ArticleTitleAreaProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <View className="fx-articleTitleArea-wrap">

      </View>
    );
  }
}

export default ArticleTitleArea;
