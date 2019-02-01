import {UserInfoInterface} from "../index/index.interface";

/**
 * myProfile.props 参数类型
 *
 * @export
 * @interface MyProfileProps
 */
export interface MyProfileProps {}
/**
 * wizardArticle.state 参数类型
 *
 * @export
 * @interface MyProfileState
 */
export interface MyProfileState {
    userInfo: UserInfoInterface;
    //
    // active : number, article : ArticleDetailInterface, articleUserInfo :
    // ArticleUserInfo, stepPanelClassName : Array < string >, second : number,
    // disabled : boolean
}

export interface GetAuthUserInfoParams {
    nickName: string;
    avatar: string;
}
