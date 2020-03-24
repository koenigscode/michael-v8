const sectionPadding = "5rem"

class Section extends React.Component {
  constructor(props) {
    super(props)
    this.skewHeight = "50px"
    if (!props.small) {
      this.skewHeight = "50px"
      this.paddingTop = this.paddingBottom = `calc(${this.skewHeight} + ${sectionPadding});`
    } else {
      this.paddingTop = this.skewHeight
      this.paddingBottom = `calc(${this.skewHeight}/2)`
    }
  }

  render() {
    return (
      <div>
        <style jsx>{`
          .Section {
            background-color: ${this.props.dark ? "#222" : "#fff"};
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='18' height='18' fill='%23${
            this.props.dark ? "333333" : "cccccc"
          }'/%3E%3C/svg%3E");

            color: ${this.props.dark ? "#fff" : "#222"};
            margin-top: -${this.skewHeight};
            padding-top: ${this.paddingTop};
            padding-bottom: ${this.paddingBottom};
            clip-path: polygon(
              0% 0%,
              100% calc(${this.skewHeight} - 2px),
              100% 100%,
              0% 100%
            );
          }
        `}</style>
        <div className="Section">
          <div className="Section__content">
            {this.props.heading && (
              <h2 className="my-section-heading">// {this.props.heading}</h2>
            )}
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Section
