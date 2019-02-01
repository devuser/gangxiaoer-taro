import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import {PersonalCardProps, PersonalCardState} from "./personalCard.interface";
import "./personalCard.scss";

class PersonalCard extends Component < PersonalCardProps,
PersonalCardState > {
  public static options = {
    addGlobalClass: true,
  };
  public static defaultProps: PersonalCardProps = {
    userInfo: {
      firstName: "谢",
      lastName: "焕昂",
      userName: "devuser",
      nickName: "",
      avatar: "",
    },
  };
  constructor(props: PersonalCardProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const {userInfo} = this.props;
    return (
      <View className="fx-personalCard-wrap">
        <View className="at-row">
          <View className="at-col-4">
            姓名 :
          </View>
          <View className="at-col-1"></View>
          <View className="at-col-7">
            {userInfo.firstName
}
            {userInfo.lastName
}
          </View>
        </View >
      </View>
    );
  }
}

export default PersonalCard;
