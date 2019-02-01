import Taro from "@tarojs/taro";

// 设置轮播容器的高度
const setContainerHeight = (e: any) => {

    // 图片的原始宽度
    const imgWidth = e.detail.width;

    // 图片的原始高度
    const imgHeight = e.detail.height;

    // 同步获取设备宽度
    const sysInfo = Taro.getSystemInfoSync();
    console.log("sysInfo:", sysInfo);

    // 获取屏幕的宽度
    const screenWidth = sysInfo.screenWidth;

    // 获取屏幕和原图的比例
    const scale = screenWidth / imgWidth;

    // 设置容器的高度
    this.setState({
        bannerHeight: imgHeight * scale,
    });
    console.log(this.state.bannerHeight);
};

export {setContainerHeight};
