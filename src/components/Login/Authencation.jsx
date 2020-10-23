import React from "react";


class Authentication extends React.Component {
    toggleForm() {
        const container = document.querySelector(".authentication-container");
        container.classList.toggle("active");
    }

    render() {
        return (
            <section>
                <div className="authentication-container">
                    <SignIn toggleForm={this.toggleForm} />
                    <SignUp toggleForm={this.toggleForm} />
                </div>
            </section>
        );
    }
}

export default Authentication;