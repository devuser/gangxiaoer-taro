import Taro, {Component} from "@tarojs/taro";

import {Image, View} from "@tarojs/components";
import {UserInfoAreaProps, UserInfoAreaState} from "./userInfoArea.interface";
import "./userInfoArea.scss";

class UserInfoArea extends Component < UserInfoAreaProps,
UserInfoAreaState > {
  public static options = {
    addGlobalClass: true,
  };
  public static defaultProps: UserInfoAreaProps = {};
  constructor(props: UserInfoAreaProps) {
    super(props);
    this.state = {};
  }
  /**
   *
   */
  public render() {
    const {userInfo} = this.props;

    const avatar: string = userInfo && userInfo.avatar;

    return (
      <View className="fx-userInfoArea-wrap">
        <View className="at-row at-row__justify--center">
          <View className="at-col-auto">
            <Image
              key="user-info-avatar"
              src={
  avatar
}
              mode="scaleToFill"
              className="fx-userInfoArea-wrap-myinfo-userinfo-avatar"
            />
          </View>
        </View>
        <View className="at-row at-row__justify--center">
          <View className="at-col-auto">
            {userInfo && userInfo.nickName
}
          </View>
        </View>
      </View>
    );
  }
}

export default UserInfoArea;
