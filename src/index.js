import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Toggle from "./Toggle";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
};

const App = () => (
    <div style={styles}>
        <Hello name="CodeSandbox" />
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
        <Toggle
            onToggle={() => {
                console.log("Toggle");
            }}>
            {({ on, toggle }) => (
                <div>
                    {on ? "The button is on" : "The button is off"}
                    <button onClick={toggle}>Toggle</button>
                    <button aria-label="custom-button" onClick={toggle}>
                        {on ? "on" : "off"}
                    </button>
                </div>
            )}
        </Toggle>
    </div>
);

render(<App />, document.getElementById("root"));
