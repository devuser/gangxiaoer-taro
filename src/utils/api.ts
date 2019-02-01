import Taro from "@tarojs/taro";
import Notify from "../../static/vant/notify/notify";
import {BOYOCOMSHOST} from "../config/index";
// 分享渠道
export const cstWxappShare = "wxappShare";
// 主动阅读
export const cstWxappView = "wxappView";
// 大拇指
export const cstHandUpAction = "handup";
// 小拇指
export const cstHandDownAction = "handdown";
// 微信渠道分享二维码
export const cstQRCodeShareArticleScene = "QRCODER-SHARE-ARTICLE";

export function toLogin() {
    const userInfo = Taro.getStorageSync("userInfo");
    if (!userInfo) {
        Taro.navigateTo({url: "/pages/pC/login/main"});
    } else {
        return true;
    }
}

export function login() {
    const userInfo = Taro.getStorageSync("userInfo");
    if (userInfo) {
        return userInfo;
    }
}

// ----------------------------------------------用户是否登录 未登录跳转到登录页面
// -------------------------

export function getStorageOpenid() {
    const openId = Taro.getStorageSync("openId");
    if (openId) {
        return openId;
    } else {
        return "";
    }
}
export function randomTagType(): string {
    const tagTypes: string[] = ["danger", "primary", ""];
    const index: any = randomNum(0, tagTypes.length);
    return tagTypes[index];
}
// 生成从minNum到maxNum的随机数
function randomNum(minNum: any, maxNum: any) {
    let rlt: Number = 0;
    switch (arguments.length) {
        case 1:
            rlt = parseInt(`${Math.random() * minNum + 1}`, 10);
            break;
        case 2:
            rlt = parseInt(`${Math.random() * (maxNum - minNum + 1)}` + minNum, 10);
            break;
        default:
            break;
    }
    return rlt;
}

export const cstAppID = "wxdccc3a094de0e910";
// TODO: 怎么在上传GitHub前屏蔽
export const cstAppSecret = "d1ca7c7d42254bc9f74af4eb6be4c311";
// //user/wxapp/login
export function getOpenId() {
    const targetUrl = `${BOYOCOMSHOST}/user/wxapp/login`;
    console.log(targetUrl);
    Taro.login({
        success: (res) => {
            if (res.code) {
                Taro.showToast({title: "发起网络请求"});
                Taro
                    .request({
                    url: targetUrl,
                    data: {
                        appid: cstAppID,
                        secret: cstAppSecret,
                        code: res.code,
                        grant_type: "authorization_code",
                    },
                })
                    .then((resWxappLogin) => {
                        console.log(`data: ${resWxappLogin}`);
                        console.log(resWxappLogin);
                        console.log(resWxappLogin.data.code);
                        if (resWxappLogin.data.code === 0) {
                            const openId = resWxappLogin.data.data.openId;
                            const token = resWxappLogin.data.data.token;
                            console.log(`openId:${openId}`);
                            console.log(`token:${token}`);
                            Taro.setStorageSync("openId", openId);
                            Taro.setStorageSync("token", token);
                        } else {
                            console.log(`/user/wxapp/login ${resWxappLogin.data.code}:${resWxappLogin.data.msg}`);
                            Taro.showToast(resWxappLogin.data.msg);
                        }
                    });
            } else {
                console.log("登录失败！" + res.errMsg);
            }
        },
        fail: () => {},
        complete: () => {},
    });
}

/**
 * 返回一个包含code变量的闭包
 */
const ongetUserInfoSuccess = (code: any) => {
    return (res) => {
        const {rawData, userInfo, iv, encryptedData, signature} = res;
        //
        console.log(`rawData: ${rawData}`);
        console.log(`signature: ${signature}`);
        console.log(`userInfo: ${userInfo}`);
        console.log(`iv: ${iv}`);
        console.log(`encryptedData: ${encryptedData}`);
        console.log(res);
        Taro.setStorageSync("userInfo", userInfo);
        //
        // // 下面开始调用注册接口 设置请求的 参数
        Taro.request({
            url: "/wxapp/register/complex",
            data: {
                code,
                encryptedData,
                iv,
                userInfo,
            },
            method: "POST",
        }).then((res) => {
            console.log(res);
            Taro.hideLoading();
        });
    };
};

// 微信登录接口返回的 code 参数，下面注册接口需要用到
export function registerUser() {
    console.log("registerUser");
    Taro.login({
        success: (res) => {
            const code: any = res.code;
            console.log("code=<" + code + ">");
            Taro
                .getUserInfo({withCredentials: true, lang: "zh_CN"})
                .then((code: any) => {
                    ongetUserInfoSuccess(code);
                });
        },
    });
}

export function beautifyArticleList(rawArticleList) {
    const _articleList: any[] = [];
    rawArticleList.forEach((itm: any) => {
        if (itm.stick) {
            itm.cardTag = "置顶";
        } else {
            if (itm.recommend) {
                itm.cardTag = "内推";
            }
        }
        _articleList.push(itm);
    });
    return _articleList;
}
export interface BoardDataParamsInterface {
    start: number;
    count: number;
    city: string;
    q: string;
}
/**
 * 榜单：
 * Top 250：
 *  接口地址: top250
 *  要求权限：movie_basic_r
 *  可传参数：
 *    @params {number} start=0 开始索引
 *    @params {number} count=20 获取数量
 *
 * 北美票房榜：
 *  接口地址：us_box
 *  要求权限：movie_basic_r
 *
 * 正在上映：
 *  接口地址: in_theaters
 *  要求权限：movie_premium_r
 *  可传参数：
 *    @params {number} start=0 开始索引
 *    @params {count} count=20 获取数量
 *    @params {string} city=北京 城市
 *
 * 即将上映：
 *  接口地址: coming_soon
 *  要求权限：movie_premium_r
 *  可传参数：
 *    @params {number} start=0 开始索引
 *    @params {number} count=20 获取数量
 *
 * 口碑榜 -> weekly （movie_advance_r）
 * 新片榜 -> new_movies（movie_advance_r）
 */
export function getBoardData({
    board = "top250",
    page = 1,
    count = 20,
    city = "北京",
    search = "",
} = {}) {
    const params: BoardDataParamsInterface = {
        start: 0,
        count: 0,
        city: "",
        q: "",
    };
    if (board !== "us_box") {
        params.start = (page - 1) * count;
        params.count = count;
    }
    if (board === "in_theaters") {
        params.city = city;
    }
    if (board === "search") {
        params.q = search;
    }
    return Taro.request({url: `/${board}`, data: params});
}

/**
 * 获取电影条目信息：
 *  接口地址: subject/:id
 *  要求权限：movie_basic_r
 *  可传参数：
 *    @params {number} id 电影id
 */
export function getMovieData(id) {
    return Taro.request({url: `/subject/${id}`});
}

/**
 * @description: 在顶部显示通知信息，驻留3秒
 * @param {type PropTypes.string,}
 * @return:
 */
export function showNotify(text: string) {
    Notify({
        text,
        duration: 1000 * 3,
        selector: "#custom-selector",
        backgroundColor: "#1989fa",
    });
}
