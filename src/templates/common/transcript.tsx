import React, { FunctionComponent } from "react";
import { get, groupBy, find } from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import { TemplateParam } from "./commontype"
import { IMG_LOGO_NP_HORIZONTAL } from "./images";
import { formatDate, formatDateFullMonth, isCETDiploma } from "./functions";

export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};

export const thWidth60Left = {
  width: "60%",
  textAlign: "left"
};

export const renderSemester = (semester: any, semesterId: any, { hideCredit }:{ hideCredit?: any } = {}) => {
  const subjectRows = semester.map((s: any, i: any) => (
    <tr key={i}>
      <td style={thWidth60Left as any}>{s.name}</td>
      <td>{s.courseCredit}</td>
      <td>{s.grade}</td>
    </tr>
  ));
  const sem = get(semester, "[0].semester");
  let semDisplay = "";
  if (sem > 0) {
    semDisplay = `SEMESTER OF STUDY  :  ${sem.toString()}`;
  }
  const date = get(semester, "[0].examinationDate");
  return (
    <div className="col-6 my-4" key={semesterId}>
      <div className="row m-0 mb-2">
        <div style={{ fontWeight: 700 }}>
          DATE OF EXAM&nbsp;:&nbsp;
          {formatDate(date)}
        </div>
        <div className="ml-auto" style={{ fontWeight: 700 }}>
          {semDisplay}
        </div>
      </div>
      <table style={fullWidthStyle}>
        <tbody>
          <tr>
            <th>MODULE</th>
            {hideCredit ? null : <th>CREDIT UNIT</th>}
            <th>GRADE</th>
          </tr>
          {subjectRows}
        </tbody>
      </table>
    </div>
  );
};

export const renderModuleCert = (mcItems: any, mcItemId: any, { hideCredit}:{ hideCredit?: any } = {}) => {
  const subjectRows = mcItems.map((m: any, i: any) => (
    <tr key={i}>
      <td style={thWidth60Left as any}>{m.name}</td>
      <td>{m.courseCredit}</td>
      <td>{m.grade}</td>
    </tr>
  ));
  const modularCertDescription = get(mcItems, "[0].modularCertDescription");
  return (
    <div key={mcItemId}>
      <div className="row ml-auto">
        <div style={{ fontWeight: 700 }}>{modularCertDescription}</div>
      </div>
      <table style={fullWidthStyle}>
        <tbody>
          <tr>
            <th>MODULE</th>
            {hideCredit ? null : <th>CREDIT UNIT</th>}
            <th>GRADE</th>
          </tr>
          {subjectRows}
        </tbody>
      </table>
      <div className="row my-auto">&nbsp;</div>
    </div>
  );
};

export const renderExamDate = (groupItems: any, itemId: any, opts: any) => {
  // display semester studies if it is not blank
  const sem = get(groupItems, "[0].semester");
  let semDisplay = "";
  if (sem > 0) {
    semDisplay = `SEMESTER OF STUDY  :  ${sem.toString()}`;
  }
  const date = get(groupItems, "[0].examinationDate");

  // group module by Modular Certificate
  const groupedModules = groupBy(groupItems, "modularCertDescription");
  const renderedModuleGroups = Object.keys(groupedModules).map(mcItem =>
    renderModuleCert(groupedModules[mcItem], mcItem, opts)
  );
  return (
    <div className="col-6 my-4" key={itemId}>
      <div className="row m-0 mb-2">
        <div style={{ fontWeight: 700 }}>
          DATE OF EXAM&nbsp;:&nbsp;
          {formatDate(date)}
        </div>
        <div className="ml-auto" style={{ fontWeight: 700 }}>
          {semDisplay}
        </div>
      </div>
      <div>{renderedModuleGroups}</div>
    </div>
  );
};

export const renderHeaderNPPartner = (logo: string, left: boolean, document: any) => {
  const serial = get(document, "additionalData.transcriptId");
  return (
    <div className="row">
      <div className="col-6">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-6">
            <img
              style={fullWidthStyle}
              src={left ? logo : IMG_LOGO_NP_HORIZONTAL}
            />
          </div>
          <div className="col-6">
            <img
              style={fullWidthStyle}
              src={left ? IMG_LOGO_NP_HORIZONTAL : logo}
            />
          </div>
        </div>
      </div>
      <div className="col-2" />
      <div className="col-4">
        <div style={{ color: "navy", fontWeight: 500 }}>
          TRANSCRIPT OF ACADEMIC RECORD
        </div>
        <div className="mt-3">SERIAL No. : {serial}</div>
      </div>
    </div>
  );
};

export const renderHeaderNP = (document: any) => {
  const serial = get(document, "additionalData.transcriptId");
  return (
    <div className="row">
      <div className="col-4">
        <img style={fullWidthStyle} src={IMG_LOGO_NP_HORIZONTAL} />
      </div>
      <div className="col-4" />
      <div className="col-4">
        <div style={{ color: "navy", fontWeight: 500 }}>
          TRANSCRIPT OF ACADEMIC RECORD
        </div>
        <div className="mt-3">SERIAL No. : {serial}</div>
      </div>
    </div>
  );
};

export const renderFTGradingSystem = () => (
  <div className="row">
    <div className="col-6" />
    <div className="col-6 border" style={{ fontSize: "0.6rem" }}>
      <div className="text-center">
        <u>GRADING SYSTEM</u>
      </div>
      <div className="text-center" style={{ fontSize: "0.5rem" }}>
        (EFFECTIVE FOR JULY 2001 INTAKE)
      </div>
      <div className="row">
        <div className="col">
          <table>
            <tbody>
              <tr>
                <th>GRADE</th>
                <th>GRADE POINT</th>
                <th>MARKS</th>
                <th>DESCRIPTION</th>
              </tr>
              <tr>
                <td>AD*</td>
                <td>4.0</td>
                <td>80 - 100%</td>
                <td>DISTINCTION</td>
              </tr>
              <tr>
                <td>A+</td>
                <td>4.0</td>
                <td>85 - 100%</td>
                <td>EXCELLENT</td>
              </tr>
              <tr>
                <td>A</td>
                <td>4.0</td>
                <td>80 - 84%</td>
                <td>EXCELLENT</td>
              </tr>
              <tr>
                <td>B+</td>
                <td>3.5</td>
                <td>75 - 79%</td>
                <td>VERY GOOD</td>
              </tr>
              <tr>
                <td>B</td>
                <td>3.0</td>
                <td>70 - 74%</td>
                <td>VERY GOOD</td>
              </tr>
              <tr>
                <td>C+</td>
                <td>2.5</td>
                <td>65 - 69%</td>
                <td>GOOD</td>
              </tr>
              <tr>
                <td>C</td>
                <td>2.0</td>
                <td>60 - 64%</td>
                <td>GOOD</td>
              </tr>
              <tr>
                <td>D+</td>
                <td>1.5</td>
                <td>55 - 59%</td>
                <td>PASS</td>
              </tr>
              <tr>
                <td>D</td>
                <td>1.0</td>
                <td>50 - 54%</td>
                <td>PASS</td>
              </tr>
              <tr>
                <td>F</td>
                <td>0</td>
                <td>0 - 49%</td>
                <td>FAIL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col">
          <table>
            <tbody>
              <tr>
                <th>GRADE</th>
                <th>DESCRIPTION</th>
              </tr>
              <tr>
                <td>PM</td>
                <td>PASS WITH MERIT</td>
              </tr>
              <tr>
                <td>PX</td>
                <td>PASS IN MODULES GRADED PASS OR FAIL ONLY</td>
              </tr>
              <tr>
                <td>ABS</td>
                <td>ABSENT</td>
              </tr>
              <tr>
                <td>DB</td>
                <td>DEBARRED</td>
              </tr>
              <tr>
                <td>EX</td>
                <td>CREDIT EXEMPTION</td>
              </tr>
              <tr>
                <td>TRF</td>
                <td>CREDIT TRANSFER</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>* DISTINCTION GRADE IS AWARDED TO THE TOP 5% COHORT</div>
    </div>
  </div>
);

export const renderCETGradingSystem = () => (
  <div className="row">
    <div className="col-6" />
    <div className="col-6 border" style={{ fontSize: "0.6rem" }}>
      <div className="text-center">
        <u>GRADING SYSTEM</u>
      </div>
      <div className="text-center" style={{ fontSize: "0.5rem" }}>
        (EFFECTIVE FOR JULY 2001 INTAKE)
      </div>
      <div className="row">
        <div className="col">
          <table>
            <tbody>
              <tr>
                <th>GRADE</th>
                <th>GRADE POINT</th>
                <th>MARKS</th>
                <th>DESCRIPTION</th>
              </tr>
              <tr>
                <td>AD*</td>
                <td>4.0</td>
                <td>80 - 100%</td>
                <td>DISTINCTION</td>
              </tr>
              <tr>
                <td>A+</td>
                <td>4.0</td>
                <td>85 - 100%</td>
                <td>EXCELLENT</td>
              </tr>
              <tr>
                <td>A</td>
                <td>4.0</td>
                <td>80 - 84%</td>
                <td>EXCELLENT</td>
              </tr>
              <tr>
                <td>B+</td>
                <td>3.5</td>
                <td>75 - 79%</td>
                <td>VERY GOOD</td>
              </tr>
              <tr>
                <td>B</td>
                <td>3.0</td>
                <td>70 - 74%</td>
                <td>VERY GOOD</td>
              </tr>
              <tr>
                <td>C+</td>
                <td>2.5</td>
                <td>65 - 69%</td>
                <td>GOOD</td>
              </tr>
              <tr>
                <td>C</td>
                <td>2.0</td>
                <td>60 - 64%</td>
                <td>GOOD</td>
              </tr>
              <tr>
                <td>D+</td>
                <td>1.5</td>
                <td>55 - 59%</td>
                <td>PASS</td>
              </tr>
              <tr>
                <td>D</td>
                <td>1.0</td>
                <td>50 - 54%</td>
                <td>PASS</td>
              </tr>
              <tr>
                <td>F</td>
                <td>0</td>
                <td>0 - 49%</td>
                <td>FAIL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col">
          <table>
            <tbody>
              <tr>
                <th>GRADE</th>
                <th>DESCRIPTION</th>
              </tr>
              <tr>
                <td>PX</td>
                <td>PASS IN MODULES GRADED PASS OR FAIL ONLY</td>
              </tr>
              <tr>
                <td>ABS</td>
                <td>ABSENT</td>
              </tr>
              <tr>
                <td>DB</td>
                <td>DEBARRED</td>
              </tr>
              <tr>
                <td>EX</td>
                <td>CREDIT EXEMPTION</td>
              </tr>
              <tr>
                <td>TRF</td>
                <td>CREDIT TRANSFER</td>
              </tr>
              <tr>
                <td>SC</td>
                <td>SUCCESSFULLY COMPLETED</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>* DISTINCTION GRADE IS AWARDED TO THE TOP 5% COHORT</div>
    </div>
  </div>
);

export const renderCourse = (document: any, course: any, courseId: any, opts: any) => {
  // Get student info and course description
  const graduateCourse = get(document, "description");
  const recipientName = get(document, "recipient.name");
  const recipientNric = get(document, "recipient.nric");
  const studentId = get(document, "additionalData.studentId");
  const admissionDate = get(document, "admissionDate");
  const graduationDate = get(document, "graduationDate");
  const currentCourse = get(course, "[0].programDescription");
  // check if the transcript contains CET Modular Certification Description
  const modularCert = get(course, "[0].modularCertDescription");

  // For CET transcript, group modules by examinationDate and modular certification; for other transcript, group all modules by semesters
  const groupedSubjects = modularCert
    ? groupBy(course, "examinationDate")
    : groupBy(course, "semester");
  const renderedGroups = Object.keys(groupedSubjects).map(item =>
    modularCert
      ? renderExamDate(groupedSubjects[item], item, opts)
      : renderSemester(groupedSubjects[item], item, opts)
  );

  // Get Course Note
  const transcriptSummaries = get(
    document,
    "additionalData.TranscriptSummary"
  );

  const courseSummary = find(transcriptSummaries, ["course", currentCourse]);
  const courseNote = get(courseSummary, "note");

  // only display the summary of non-diploma courses.
  const courseNoteDisplay =
    currentCourse !== graduateCourse ? courseNote : null;

  return (
    <div key={courseId}>
      <hr />
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-3">Name</div>
            <div className="col-9">
              :&nbsp;&nbsp;
              {recipientName}
            </div>
          </div>
          <div className="row">
            <div className="col-3">COURSE</div>
            <div className="col-9">
              :&nbsp;&nbsp;
              {currentCourse}
            </div>
          </div>
          <div className="row">
            <div className="col-3">NRIC/FIN</div>
            <div className="col-9">
              :&nbsp;&nbsp;
              {recipientNric}
            </div>
          </div>
          <div className="row">
            <div className="col-3">STUDENT NO</div>
            <div className="col-9">
              :&nbsp;&nbsp;
              {studentId}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col-12">&nbsp;</div>
          </div>
          <div className="row">
            <div className="col-12">&nbsp;</div>
          </div>
          <div className="row">
            <div className="col-5">DATE OF ADMISSION</div>
            <div className="col-6">
              :&nbsp;&nbsp;
              {formatDateFullMonth(admissionDate)}
            </div>
          </div>
          <div className="row">
            <div className="col-5">DATE OF GRADUATION</div>
            <div className="col-6">
              :&nbsp;&nbsp;
              {formatDateFullMonth(graduationDate)}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">{renderedGroups}</div>
      <br />
      <div className="row mx-auto">{courseNoteDisplay}</div>
      <br />
    </div>
  );
};

export const renderTranscript = (document: any, opts?: any) => {
  // Group all modules by courses
  const transcript = get(document, "transcript");
  const groupedCourses = groupBy(transcript, "programDescription");
  const renderedCourses = Object.keys(groupedCourses).map(course =>
    renderCourse(document, groupedCourses[course], course, opts)
  );

  return <div>{renderedCourses}</div>;
};

export const renderNpfa = (document: any) => {
  const npfa = get(document, "additionalData.npfa", undefined);
  return npfa ? (
    <div className="row mx-auto">
      National Physical Fitness Award: {npfa}
      <br />
      <br />
    </div>
  ) : null;
};

export const renderGPA = (document: any) => {
  const GPA = get(document, "cumulativeScore", undefined);
  return GPA ? (
    <div className="row mx-auto">
      Graduating GPA: {GPA} (Graduating GPA is computed based on passed modules
      and has a maximum value of 4)
      <br />
      <br />
    </div>
  ) : null;
};

export const renderCourseNote = (gradCourse: any, course: any, courseId: any) => {
  const courseNotes = course.map((c: any, i: any) => <p key={i}>{c.note}</p>);

  return gradCourse === courseId ? (
    <div className="row mx-auto" key={courseId}>
      {courseNotes}
    </div>
  ) : null;
};

export const renderFinalStatement = (document: any) => {
  const graduateCourse = get(document, "description");
  const transcriptSummaries = get(
    document,
    "additionalData.TranscriptSummary"
  );

  const groupedCourses = groupBy(transcriptSummaries, "course");

  const renderedCourseNotes = Object.keys(groupedCourses).map(course =>
    renderCourseNote(graduateCourse, groupedCourses[course], course)
  );

  return <div>{renderedCourseNotes}</div>;
};

export const renderTwoSignature = (document: any) => (
  <div>
  <div
        className="row d-flex justify-content-center align-items-end"
        style={{ marginTop: "8rem", marginBottom: "1rem" }}
      >
        <div className="col-1" />
        <div className="col-5">
          <div className="px-4">
            <img
              style={fullWidthStyle}
              src={get(document, "additionalData.transcriptSignatories[0].signature")}
            />
            <hr />
          </div>
        </div>
        <div className="col-5">
          <div className="px-4">
            <img
              style={fullWidthStyle}
              src={get(document, "additionalData.transcriptSignatories[1].signature")}
            />
            <hr />
          </div>
        </div>
        <div className="col-1" />
      </div>  

      <div
        className="row d-flex justify-content-center align-items-top"
        style={{ marginTop: "1rem", marginBottom: "2rem" }}
      >
        <div className="col-1" />
        <div className="col-5">
          <div className="text-center">
            {get(document, "additionalData.transcriptSignatories[0].position")}
          </div>
          <div className="text-center">
            {get(document, "additionalData.transcriptSignatories[0].organisation")}
          </div>
        </div>
        <div className="col-5">
          <div className="text-center">
            {get(document, "additionalData.transcriptSignatories[1].position")}
          </div>
          <div className="text-center">
            {get(document, "additionalData.transcriptSignatories[1].organisation")}
          </div>
        </div>
        <div className="col-1" />
      </div>

  </div>
);

export const renderSignature = (document: any) => (
  <div
    className="row d-flex justify-content-center align-items-end"
    style={{ marginTop: "8rem", marginBottom: "2rem" }}
  >
    <div className="col-6" />

    <div className="col-4">
      <div className="px-4">
        <img
          style={fullWidthStyle}
          src={document.additionalData.transcriptSignatories[0].signature}
        />
        <hr />
      </div>
      <div className="text-center">
        {document.additionalData.transcriptSignatories[0].position}
      </div>
      <div className="text-center">
        {document.additionalData.transcriptSignatories[0].organisation}
      </div>
    </div>

    <div className="col-2" />
  </div>
);


export default (param?: TemplateParam) => ({document}:{document: any})=> (
  <div className="container" style={{ fontSize: "0.9rem" }} id="template">
    {param?.logo ? renderHeaderNPPartner(param?.logo, param?.left, document) : renderHeaderNP(document)}
	{isCETDiploma(document.id)?renderCETGradingSystem():renderFTGradingSystem()}
    {renderTranscript(document)}
    {renderNpfa(document)}
    {renderGPA(document)}
    {renderFinalStatement(document)}
    {document.additionalData.transcriptSignatories &&
       document.additionalData.transcriptSignatories[1]
       ? renderTwoSignature(document) :  renderSignature(document)
	}
  </div>
);
