import React from "react";
import { get } from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import { TemplateParam } from "./commontype"
import { tz } from "moment-timezone";
import {
  TIMEZONE,
  formatDateFullMonthProper,
  formatDatePrefix
} from "./functions";
import {
  renderLogoNP,
  renderLogoNPPartner,
  renderFooter,
  fullWidthStyle,
  printTextStyle,
  nameTextStyle,
  titleTextStyle
} from "./certificate";

export const formatDate = (dateString: string) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return <p>{tz(date, TIMEZONE).format("DD MMM YYYY")}</p>;
};

export const formatCertName = (certName: string, meritFlag: string) => {
  let certDipDisplay = "";
  if (meritFlag === "Y") {
    certDipDisplay = "Diploma with Merit";
  } else {
    certDipDisplay = "Diploma";
  }

  return (
    <p>
      {certDipDisplay}
      <br />
      in
      <br />
      {certName}
    </p>
  );
};

const renderAwardText = (document: any) => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "3rem" }}
    >
      <p style={printTextStyle as any}>This is to certify that</p>
    </div>
    <div className="row d-flex justify-content-center">
      <p style={nameTextStyle as any}>{document.recipient.name}</p>
    </div>
    <div className="row d-flex justify-content-center">
      <p style={printTextStyle as any}>
        has fulfilled {document.additionalData.optionType} in
      </p>
    </div>
    <div className="row d-flex justify-content-center">
      <p style={printTextStyle as any}>
        <p style={titleTextStyle as any}>{document.additionalData.optionName}</p>
      </p>
    </div>
    <div className="row d-flex justify-content-center">
      <p style={printTextStyle as any}>as part of the course of study in the</p>
    </div>
    <div className="row d-flex justify-content-center">
      <p style={titleTextStyle as any}>
        {" "}
        Diploma
        <br />
        in
        <br />
        {document.name}
      </p>
    </div>
  </div>
);

const renderTwoSignatures = (document: any) => (
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
              src={get(document, "additionalData.certSignatories[0].signature")}
            />
            <hr />
          </div>
        </div>
        <div className="col-5">
          <div className="px-4">
            <img
              style={fullWidthStyle}
              src={get(document, "additionalData.certSignatories[1].signature")}
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
            {get(document, "additionalData.certSignatories[0].name")}
          </div>
          <div className="text-center">
            {get(document, "additionalData.certSignatories[0].position")}
          </div>
        </div>
        <div className="col-5">
          <div className="text-center">
            {get(document, "additionalData.certSignatories[1].name")}
          </div>
          <div className="text-center">
            {get(document, "additionalData.certSignatories[1].position")}
          </div>
        </div>
        <div className="col-1" />
      </div>
    <div>
      <p>
        {formatDatePrefix(document.issuedOn)}{" "}
        {formatDateFullMonthProper(document.issuedOn)}
      </p>
    </div>
  </div>
);

const renderSignatures = (document: any) => (
  <div
    className="row d-flex justify-content-center align-items-end"
    style={{ marginTop: "8rem", marginBottom: "2rem" }}
  >
    <div className="col-1" />
    <div className="col-5">
      <div className="px-5">
        <div className="text-center">
          {formatDate(document.issuedOn)}
          <hr />
        </div>
      </div>
      <div className="text-center">Date</div>
      <div className="text-center">&nbsp;</div>
    </div>
    <div className="col-5">
      <div className="px-5">
        <img
          style={fullWidthStyle}
          src={document.additionalData.certSignatories[0].signature}
        />
        <hr />
      </div>
      <div className="text-center">
        {document.additionalData.certSignatories[0].name}
      </div>
      <div className="text-center">
        {document.additionalData.certSignatories[0].position}
      </div>
    </div>
    <div className="col-1" />
  </div>
);

export default (param?: TemplateParam) => ({document}:{document: any})=> (
  <div>
    <div
      className="container"
      style={{ border: 5, borderColor: "#AAA", borderStyle: "solid" }}
    >
      {param?.logo ? renderLogoNPPartner(param?.logo, param?.left) : renderLogoNP()}
      {renderAwardText(document)}
      {document.additionalData.certSignatories &&
      document.additionalData.certSignatories[1]
        ? renderTwoSignatures(document)
        : renderSignatures(document)}
    </div>
    {renderFooter(document)}
  </div>
);
