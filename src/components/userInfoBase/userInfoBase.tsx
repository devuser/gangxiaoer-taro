import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import {UserInfoBaseProps, UserInfoBaseState} from "./userInfoBase.interface";
import "./userInfoBase.scss";
import {AtForm, AtInput} from "taro-ui";

class UserInfoBase extends Component < UserInfoBaseProps,
UserInfoBaseState > {
  public static options = {
    addGlobalClass: true,
  };
  public static defaultProps: UserInfoBaseProps = {
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
  constructor(props: UserInfoBaseProps) {
    super(props);
    this.state = {};
  }
  public handleInput() {
    //
  }
  public render() {
    const {articleUserInfo} = this.props;
    return (
      <View className="fx-userInfoBase-wrap">
        <View className="panel">
          <View className="panel__title">基本信息</View>
          <View className="panel__content no-padding">
            <View className="component-item">
              <AtForm>

                <AtInput
                  name="nickName"
                  title="别名"
                  type="text"
                  value={articleUserInfo.nickName}
                  onChange={this
                  .handleInput
                  .bind(this, "value1")}
                />

                <AtInput
                  name="firstName"
                  title="姓"
                  value={articleUserInfo.firstName}
                  placeholder="请输入您的姓氏"
                  onChange={this
                  .handleInput
                  .bind(this, "value1")}
                />
                <AtInput
                  title="名"
                  name="lastName"
                  value={articleUserInfo.lastName}
                  placeholder="请输入您的名字"
                  onChange={this
                  .handleInput
                  .bind(this, "value1")}
                />
                <AtInput
                  name="publicMobile"
                  title="手机"
                  value={articleUserInfo.publicMobile}
                  placeholder="请输入您手机号"
                  onChange={this
                  .handleInput
                  .bind(this, "value1")}
                />

              </AtForm>
            </View>
          </View>
        </View >
      </View>
    );
  }
}

export default UserInfoBase;
