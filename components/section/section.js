export default props => (
  <div>
    <style jsx>{`
      .Section {
        background: url("background_${props.dark ? "dark" : "light"}.svg");
        color: ${props.dark ? "#fff" : "#222"};
      }
    `}</style>
    <div className="Section">
      <div className="Section__content">
        <h2 className="my-section-heading">// {props.heading}</h2>
        {props.children}
      </div>
    </div>
  </div>
)
