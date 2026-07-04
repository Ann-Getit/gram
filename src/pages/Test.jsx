
export default function Test() {
  return (
    <div
      style={{
        width: 300,
        overflowX: "auto",
        border: "1px solid red",
      }}
    >
      <div style={{ display: "flex", width: 1000 }}>
        <div style={{ width: 200, height: 100, background: "red" }} />
        <div style={{ width: 200, height: 100, background: "blue" }} />
        <div style={{ width: 200, height: 100, background: "green" }} />
        <div style={{ width: 200, height: 100, background: "orange" }} />
      </div>
    </div>
  );
}