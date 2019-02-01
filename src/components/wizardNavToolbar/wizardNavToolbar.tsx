import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import {WizardNavToolbarProps, WizardNavToolbarState} from "./wizardNavToolbar.interface";
import "./wizardNavToolbar.scss";
import {AtButton} from "taro-ui";

class WizardNavToolbar extends Component < WizardNavToolbarProps,
WizardNavToolbarState > {
  public static options = {
    addGlobalClass: true,
  };
  public static defaultProps: WizardNavToolbarProps = {
    steps: [
      0, 1, 2, 3,
    ],
    onUpdate: () => {},
  };

  constructor(props: WizardNavToolbarProps) {
    super(props);
    this.state = {
      active: 0,
      prevEnabled: false,
      nextEnabled: true,
    };
    this.onInsideUpdate = this
      .onInsideUpdate
      .bind(this);
  }

  public onPrevClicked() {
    if (this.state.active === 0) {} else {
      this.setState({
        active: this.state.active - 1,
      }, () => {
        this.onInsideUpdate();
      });
    }
  }
  public onInsideUpdate() {
    console.log(this.state.active);
    let prevEnabled = true;
    let nextEnabled = true;

    if (this.state.active === 0) {
      prevEnabled = true;
      nextEnabled = false;
    }
    if (this.state.active === (this.props.steps.length - 1)) {
      prevEnabled = true;
      nextEnabled = false;
    }
    this.setState({prevEnabled, nextEnabled},
      () => {
        this.props.onUpdate && this.props.onUpdate(this.state.active);
      });
  }

  public onNextClicked() {
    if (this.state.active === (this.props.steps.length - 1)) {} else {
      this.setState({
        active: this.state.active + 1,
      }, () => {
        this.onInsideUpdate();
      });
    }
  }

  public render() {
    return (
      <View className="fx-WizardNavToolbar-wrap at-row">
        <View className="at-col at-col-2">
          <AtButton
            key="prev-button"
            type="primary"
            size="small"
            onClick={this
            .onPrevClicked
            .bind(this)}
          >
            上一步
          </AtButton>
        </View>
        <View className="at-col  at-col-8">
          &nbsp;
        </View>
        <View className="at-col  at-col-2">
          <AtButton
            key="next-button"
            type="primary"
            size="small"
            onClick={this
            .onNextClicked
            .bind(this)}
          >
            下一步
          </AtButton>
        </View>
      </View>
    );
  }
}

export default WizardNavToolbar;
