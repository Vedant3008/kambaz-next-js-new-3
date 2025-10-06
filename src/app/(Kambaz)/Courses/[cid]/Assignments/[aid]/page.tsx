export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" cols={45} rows={10} defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel." />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} type="number" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                <option value="PERCENTAGE">Percentage</option>
                <option value="POINTS">Points</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="ONLINE">
                <option value="ONLINE">Online</option>
                <option value="PAPER">On Paper</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">Online Entry Options</td>
            <td>
              <input type="checkbox" id="wd-text-entry" /> 
              <label htmlFor="wd-text-entry">Text Entry</label><br />
              
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label><br />
              
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label><br />
              
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />
              
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" defaultValue="2025-09-13" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" defaultValue="2025-09-16" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input id="wd-available-until" type="date" defaultValue="2025-09-20" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}