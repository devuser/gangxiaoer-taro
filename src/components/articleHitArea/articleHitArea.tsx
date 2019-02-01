import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { ArticleHitAreaProps, ArticleHitAreaState } from "./articleHitArea.interface";
import "./articleHitArea.scss";

class ArticleHitArea extends Component<ArticleHitAreaProps, ArticleHitAreaState > {
  public static options = {
    addGlobalClass: true,
  };
  public static defaultProps: ArticleHitAreaProps = {};
  constructor(props: ArticleHitAreaProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <View className="fx-articleHitArea-wrap">

      </View>
    );
  }
}

export default ArticleHitArea;
