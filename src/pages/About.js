import DisruptionMessage from "../molecules/DisruptionMessage/DisruptionMessage";

function About() {
  return (
    <div className="about">
      <p>About</p>
      <DisruptionMessage
        title="Warning"
        content="The style is so ugly, be careful"
        close={() => alert("hahah")}
      />
    </div>
  );
}

export default About;
