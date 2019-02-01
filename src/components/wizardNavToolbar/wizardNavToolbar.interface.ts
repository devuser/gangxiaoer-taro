// import { Item } from "taro-ui/@types/steps";

/**
 * WizardNavToolbar.state 参数类型
 *
 * @export
 * @interface WizardNavToolbarState
 */
export interface WizardNavToolbarState {

    prevEnabled: boolean;
    nextEnabled: boolean;
    // 内部属性缺省是零
    active: number;
}
export interface WizardNavToolbarStep {
    title: string;
    desc: string;
}

/**
 * WizardNavToolbar.props 参数类型
 *
 * @export
 * @interface WizardNavToolbarProps
 */
export interface WizardNavToolbarProps {

    steps: Number[];
    onUpdate: (type: Number) => any;
}
