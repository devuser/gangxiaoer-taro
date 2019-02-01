import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { RulerAreaProps, RulerAreaState } from "./rulerArea.interface";
import "./rulerArea.scss";

class RulerArea extends Component<RulerAreaProps, RulerAreaState > {
  public static options = {
    addGlobalClass: true,
  };
  public static defaultProps: RulerAreaProps = {};
  constructor(props: RulerAreaProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <View className="fx-rulerArea-wrap">

      </View>
    );
  }
}

export default RulerArea;
