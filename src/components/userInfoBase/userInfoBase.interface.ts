import { ArticleUserInfo } from "../../pages/common/ts/articleUserInfo.interface";
/**
 * userInfoBase.state 参数类型
 *
 * @export
 * @interface UserInfoBaseState
 */
export interface UserInfoBaseState {}

/**
 * userInfoBase.props 参数类型
 *
 * @export
 * @interface UserInfoBaseProps
 */
export interface UserInfoBaseProps {
    articleUserInfo: ArticleUserInfo;
}
