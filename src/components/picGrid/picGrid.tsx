import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { PicGridProps, PicGridState } from "./picGrid.interface";
import "./picGrid.scss";

class PicGrid extends Component<PicGridProps, PicGridState > {
  public static options = {
    addGlobalClass: true,
  };
  public static defaultProps: PicGridProps = {};
  constructor(props: PicGridProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <View className="fx-picGrid-wrap">

      </View>
    );
  }
}

export default PicGrid;
