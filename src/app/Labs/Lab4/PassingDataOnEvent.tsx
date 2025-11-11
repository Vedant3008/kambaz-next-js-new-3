"use client"
const add = (a: number, b: number) => {
  alert(`${a} + ${b} = ${a + b}`);
};
export default function PassingDataOnEvent() {
  return (
    <div id="wd-passing-data-on-event">
      <h2>Passing Data on Event</h2>
      <button onClick={() => add(5, 6)}
              className="btn btn-primary"
              id="wd-pass-data-click">
        Pass 5 and 6 to add()
      </button>
      <hr/>
    </div>
);}





