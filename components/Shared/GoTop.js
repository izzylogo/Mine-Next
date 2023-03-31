import React, { Component } from "react";

export default class GoTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        // var stickyTop = 0;
		// var scrollTarget = false;

        // var timeline = $(".timeline__nav");
		// var items = $("li", timeline);
		// var milestones = $(".timeline__section .milestone");
		// var offsetTop = parseInt(timeline.css("top"));







        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;
        return (
            <>
                <div className="scroll-to-top">
                    {is_visible && (
                        <i className="pe-7s-angle-up" onClick={() => this.scrollToTop()}></i>
                    )}
                </div>
            </>
        );
    }
}
