import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import {UserInfoExtProps, UserInfoExtState} from "./userInfoExt.interface";
import "./userInfoExt.scss";
import {AtForm, AtInput} from "taro-ui";

class UserInfoExt extends Component < UserInfoExtProps,
UserInfoExtState > {
  public static options = {
    addGlobalClass: true,
  };
  public static defaultProps: UserInfoExtProps = {
    articleUserInfo: {
      nickName: "",
      firstName: "",
      lastName: "",
      publicMobile: "",
      mainActivityArea: "",
      address1: "",
      address2: "",
      address3: "",
      avatarUrl: "",
      dirty: false,
    },
  };
  constructor(props: UserInfoExtProps) {
    super(props);
    this.state = {};
  }

  public handleInput(e: any) {
    console.log(e);
  }

  public render() {
    const {articleUserInfo} = this.props;
    return (
      <View className="fx-userInfoExt-wrap">
        <View className="panel">
          <View className="panel__title">经营信息</View>
          <View className="panel__content no-padding">
            <View className="component-item">
              <AtForm>

                <AtInput
                  name="mainActivityArea"
                  title="经营地点"
                  value={articleUserInfo.mainActivityArea}
                  placeholder="请输入的经营地点"
                  onChange={this
                  .handleInput
                  .bind(this, "value1")}
                />
                <AtInput
                  name="address1"
                  title="省"
                  value={articleUserInfo.address1}
                  placeholder="请输入所在省份"
                  onChange={this
                  .handleInput
                  .bind(this, "value1")}
                />
                <AtInput
                  name="address2"
                  title="县市"
                  value={articleUserInfo.address2}
                  placeholder="请输入所在县市"
                  onChange={this
                  .handleInput
                  .bind(this, "value1")}
                />
                <AtInput
                  name="address3"
                  title="乡镇或街道"
                  value={articleUserInfo.address3}
                  placeholder="请输入所在乡镇或街道"
                  onChange={this
                  .handleInput
                  .bind(this, "value1")}
                />

              </AtForm>
            </View>
          </View >
        </View >
      </View>

    );
  }
}

export default UserInfoExt;
