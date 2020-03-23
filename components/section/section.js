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
        background: url("background_${this.props.dark ? "dark" : "light"}.svg");
        color: ${this.props.dark ? "#fff" : "#222"};
        margin-top: -${this.skewHeight};
        padding-top: ${this.paddingTop};
        padding-bottom: ${this.paddingBottom};
        clip-path: polygon(0% 0%, 100% calc(${
          this.skewHeight
        } - 2px), 100% 100%, 0% 100%);
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
