import React from "react";

class Toggle extends React.Component {
    state = { on: false };
    toggle = () => {
        return this.setState(
            ({ on }) => ({ on: !on }),
            () => {
                this.props.onToggle(this.state.on);
            },
        );
    };
    render() {
        return this.props.children({ on: this.state.on, toggle: this.toggle });
    }
}

export default Toggle;
