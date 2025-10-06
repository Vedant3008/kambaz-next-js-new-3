export default function Grades() {
  return (
    <div id="wd-grades">
      <h3>Grades</h3>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Assignment Name</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Score</th>
            <th>Out of</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A1 - ENV + HTML</td>
            <td>Sep 18 at 11:59pm</td>
            <td>Submitted</td>
            <td>95</td>
            <td>100</td>
          </tr>
          <tr>
            <td>A2 - CSS + BOOTSTRAP</td>
            <td>Oct 2 at 11:59pm</td>
            <td>Submitted</td>
            <td>90</td>
            <td>100</td>
          </tr>
          <tr>
            <td>A3 - JAVASCRIPT</td>
            <td>Oct 16 at 11:59pm</td>
            <td>Not Submitted</td>
            <td>-</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}