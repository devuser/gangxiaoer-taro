import Taro, {Component} from "@tarojs/taro";
import {Image, View} from "@tarojs/components";
import {AuxImageViewProps, AuxImageViewState} from "./AuxImageView.interface";
import "./AuxImageView.scss";

class AuxImageView extends Component < AuxImageViewProps,
AuxImageViewState > {
  public static options = {
    addGlobalClass: true,
  };
  constructor(props: AuxImageViewProps) {
    super(props);
    this.state = {
      bannerHeight: 200,
    };
  }

  // 设置轮播容器的高度
  public setContainerHeight(e: any) {

    // 图片的原始宽度
    const imgWidth = e.detail.width;

    // 图片的原始高度
    const imgHeight = e.detail.height;

    // 同步获取设备宽度
    const sysInfo = Taro.getSystemInfoSync();
    console.log("sysInfo:", sysInfo);

    // 获取屏幕的宽度
    const screenWidth = sysInfo.screenWidth;

    // 获取屏幕和原图的比例
    const scale = screenWidth / imgWidth;

    // 设置容器的高度
    this.setState({
      bannerHeight: imgHeight * scale,
    });
    console.log(this.state.bannerHeight);
  }

  /**
   *
   */
  public render() {
    const {auxImage, index} = this.props;

    return (
      <View className="fx-AuxImageView-wrap">
        <Image
          key={index}
          src={auxImage.imageShortURL}
          className="fx-AuxImageView-wrap-auto-img"
          mode="widthFix"
          onLoad={this
          .setContainerHeight
          .bind(this)}
        />
      </View>
    );
  }
}

export default AuxImageView;
