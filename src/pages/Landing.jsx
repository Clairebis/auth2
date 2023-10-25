export default function Landing() {
  const linkStyle = {
    marginRight: "1rem", // Add space between links
  };

  return (
    <section>
      <div>Landing</div>
      <nav>
        <a href="/Login" style={linkStyle}>
          Login
        </a>
        <a href="/Signup">Signup</a>
      </nav>
    </section>
  );
}
