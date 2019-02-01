import {AuxImageInteface} from "../../pages/common/ts/auxImage.interface";
/**
 * AuxImageView.state 参数类型
 *
 * @export
 * @interface AuxImageViewState
 */
export interface AuxImageViewState {
    bannerHeight: number;
}

/**
 * AuxImageView.props 参数类型
 *
 * @export
 * @interface AuxImageViewProps
 */
export interface AuxImageViewProps {
    auxImage: AuxImageInteface;
    index: number;
}
