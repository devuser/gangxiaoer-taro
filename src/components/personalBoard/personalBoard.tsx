import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { PersonalBoardProps, PersonalBoardState } from "./personalBoard.interface";
import "./personalBoard.scss";

class PersonalBoard extends Component<PersonalBoardProps, PersonalBoardState > {
  public static options = {
    addGlobalClass: true,
  };
  public static defaultProps: PersonalBoardProps = {};
  constructor(props: PersonalBoardProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <View className="fx-personalBoard-wrap">

      </View>
    );
  }
}

export default PersonalBoard;
