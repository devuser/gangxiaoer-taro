import Taro, {Component, Config} from "@tarojs/taro";
import {Image, ScrollView, Swiper, SwiperItem, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import {AtButton} from "taro-ui";
import "./index.scss";
// import {  } from '../../components'
import UserInfoArea from "../../components/userInfoArea/userInfoArea";
import PersonalCard from "../../components/personalCard/personalCard";
import PersonalBoard from "../../components/personalBoard/personalBoard";

import {GetAuthUserInfoParams, MyProfileProps, MyProfileState} from "./index.interface";
// import my from '../../app-shim';

@connect(({myProfile}) => ({
  ...myProfile,
}))

class MyProfile extends Component <MyProfileProps, MyProfileState > {
  public config: Config = {
    navigationBarTitleText: "我的",
  };
  constructor(props: MyProfileProps) {
    super(props);
    this.state = {
      userInfo: {
        userName: "谢焕昂",
        nickName: "",
        avatar: "",
      },
    };
    this.getAuthUserInfo = this
      .getAuthUserInfo
      .bind(this);
  }
  public getAuthUserInfo(authCode: string) {
    console.log(`getAuthUserInfo.authCode: ${authCode}`);
    my.getAuthUserInfo({
      success: (e: GetAuthUserInfoParams) => {
        const {nickName, avatar} = e;
        console.log({nickName, avatar});
        const {userInfo} = this.state;
        userInfo.nickName = nickName;
        userInfo.avatar = avatar;
        this.setState({userInfo});
      },
    });
  }
  public onDoUserLoginoutBtnClick() {

    const userInfo = {
      userName: "",
      nickName: "",
      avatar: "",
    };
    this.setState({userInfo});
  }

    public onDoUserLoginBtnClick() {
      my.getAuthCode({
        scopes: "auth_user",
        // 主动授权（弹框）：auth_user，静默授权（不弹框）：auth_base
        success: (res) => {
          if (res.authCode) {
            console.log(`req.authCode: ${res.authCode}`);
            // 认证成功 调用自己的服务端接口，让服务端进行后端的授权认证，并且种session，需要解决跨域问题
            my.httpRequest({
              url: `${ONLINEBOYOCOMSHOST}/auth`,
              // 该url是自己的服务地址，实现的功能是服务端拿到authcode去开放平台进行token验证
              data: {
                authcode: res.authCode,
              },
              success: (e: any) => {
                console.log("授权成功并且服务器端登录成功");
                console.log(e);
                this.getAuthUserInfo(res.authCode);
              },
              fail: (e: any) => {
                console.log("根据自己的业务场景来进行错误处理");
                console.log(e);
              },
            });
          }
        },
      });
    }

public onComplexLoginPageBtnClick(e: any) {
console.log(e);
Taro.navigateTo({
    url: "/pages/login/login",
  });
}

    public componentDidMount() {
      //
    }

    public render() {
      const {userInfo} = this.state;
      return (
        <View className="fx-my-wrap">

          <UserInfoArea userInfo={userInfo} />
          <AtButton
            size="small"
            type="primary"
            key="DoUserLoginBtn"
            onClick={this
            .onDoUserLoginBtnClick
            .bind(this)}
          >
            登录
          </AtButton>
          <AtButton
            size="small"
            type="primary"
            key="DoUserLoginBtn"
            onClick={this
            .onDoUserLoginoutBtnClick
            .bind(this)}
          >
            注销
          </AtButton>
<AtButton
  size="small"
  type="primary"
  key="ComplexLoginPageBtn"
  onClick={
  this
    .onComplexLoginPageBtnClick
    .bind(this)
}
> 打开登录页面 </AtButton>
          <PersonalCard userInfo={userInfo} />
          <PersonalBoard />
        </View>
      );
    }
  }

export default MyProfile;
