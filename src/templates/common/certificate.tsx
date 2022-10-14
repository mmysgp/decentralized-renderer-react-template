import React from "react";
import { get } from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import { TemplateParam } from "./commontype"
import { IMG_LOGO_NP, IMG_CERTIFICATE_SEAL } from "./images";

import {
  formatDateFullMonthProper,
  formatDatePrefix,
  formatCertName,
  formatCertID
} from "./functions";

export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};

export const printTextStyle = {
  fontSize: "1.6rem",
  color: "#555",
  textAlign: "center"
};

export const singaporeTextStyle = {
  color: "#555",
  fontSize: "3rem"
};

export const nameTextStyle = {
  fontSize: "3rem",
  textAlign: "center",
  padding: "0px 20px 0px 20px"
};

export const titleTextStyle = {
  color: "rgb(30,93,200)",
  fontSize: "3rem",
  textAlign: "center",
  padding: "0px 20px 0px 20px"
};

export const renderSingapore = () => (
  <div
    className="row d-flex justify-content-center"
    style={{ marginTop: "2rem" }}
  >
    <p style={singaporeTextStyle}>SINGAPORE</p>
  </div>
);

export const renderLogoNP = () => (
  <div className="row d-flex justify-content-center">
    <div className="col-2" />
    <div className="col-8">
      <img style={fullWidthStyle} src={IMG_LOGO_NP} />
    </div>
    <div className="col-2" />
  </div>
);

export const renderLogoNPPartner = (logo: string, left: boolean) => (
  <div
    className="row d-flex justify-content-center align-items-center"
    style={{ marginTop: "3rem" }}
  >
    <div className="col-1" />
    <div className="col-5">
      <img style={fullWidthStyle} src={left ? logo : IMG_LOGO_NP} />
    </div>
    <div className="col-5">
      <img style={fullWidthStyle} src={left ? IMG_LOGO_NP : logo} />
    </div>
    <div className="col-1" />
  </div>
);

export const renderFourSignatures = (document: any) => (
  <div>
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ marginTop: "8rem", marginBottom: "1rem" }}
    >
      <div className="col-4" />
      <div className="col-8">
        <div
          className="row d-flex justify-content-center align-items-end"
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          <div className="col-6">
            <div className="px-4">
              <img
                style={fullWidthStyle}
                src={get(document, "additionalData.certSignatories[0].signature")}
              />
              <hr />
            </div>
          </div>
          <div className="col-6">
            <div className="px-4">
              <img
                style={fullWidthStyle}
                src={get(document, "additionalData.certSignatories[1].signature")}
              />
              <hr />
            </div>
          </div>
        </div>  

        <div
          className="row d-flex justify-content-center align-items-top"
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          <div className="col-6">
            <div className="text-center">
              {get(document, "additionalData.certSignatories[0].name")}
            </div>
            <div className="text-center">
              {get(document, "additionalData.certSignatories[0].position")}
            </div>
            <div className="text-center">
              {get(document, "additionalData.certSignatories[0].organisation")}
            </div>
          </div>
          <div className="col-6">
            <div className="text-center">
              {get(document, "additionalData.certSignatories[1].name")}
            </div>
            <div className="text-center">
              {get(document, "additionalData.certSignatories[1].position")}
            </div>
            <div className="text-center">
              {get(document, "additionalData.certSignatories[1].organisation")}
            </div>
          </div>
        </div>
      </div>    
    </div>
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ marginTop: "1rem", marginBottom: "1rem" }}
    >
      <div className="col-4">
        <img style={fullWidthStyle} src={IMG_CERTIFICATE_SEAL} />
      </div>

      <div className="col-8">
        <div
          className="row d-flex justify-content-center align-items-end"
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          <div className="col-6">
            <div className="px-4">
              <img
                style={fullWidthStyle}
                src={get(document, "additionalData.certSignatories[2].signature")}
              />
              <hr />
            </div>
          </div>
          <div className="col-6">
            <div className="px-4">
              <img
                style={fullWidthStyle}
                src={get(document, "additionalData.certSignatories[3].signature")}
              />
              <hr />
            </div>
          </div>
        </div>  

        <div
          className="row d-flex justify-content-center align-items-top"
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          <div className="col-6">
            <div className="text-center">
              {get(document, "additionalData.certSignatories[2].name")}
            </div>
            <div className="text-center">
              {get(document, "additionalData.certSignatories[2].position")}
            </div>
            <div className="text-center">
              {get(document, "additionalData.certSignatories[2].organisation")}
            </div>
          </div>
          <div className="col-6">
            <div className="text-center">
              {get(document, "additionalData.certSignatories[3].name")}
            </div>
            <div className="text-center">
              {get(document, "additionalData.certSignatories[3].position")}
            </div>
            <div className="text-center">
              {get(document, "additionalData.certSignatories[3].organisation")}
            </div>
          </div>
        </div>
      </div>    
    </div>
  </div>
);

export const renderThreeSignatures = (document: any) => (
  <div>
    <div
      className="row d-flex justify-content-center align-items-end"
      style={{ marginTop: "8rem", marginBottom: "1rem" }}
    >
      <div className="col-6" />
      <div className="col-4">
        <div className="px-4">
          <img
            style={fullWidthStyle}
            src={get(
              document,
              "additionalData.certSignatories[0].signature"
            )}
          />
          <hr />
        </div>
        <div className="text-center">
          {get(document, "additionalData.certSignatories[0].name")}
        </div>
        <div className="text-center">
          {get(document, "additionalData.certSignatories[0].position")}
        </div>
        <div className="text-center">
          {get(document, "additionalData.certSignatories[0].organisation")}
        </div>
      </div>
      <div className="col-2" />
    </div>
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ marginTop: "1rem", marginBottom: "1rem" }}
    >
      <div className="col-4">
        <img style={fullWidthStyle} src={IMG_CERTIFICATE_SEAL} />
      </div>

      <div className="col-8">
        <div
          className="row d-flex justify-content-center align-items-end"
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          <div className="col-6">
            <div className="px-4">
              <img
                style={fullWidthStyle}
                src={get(document, "additionalData.certSignatories[1].signature")}
              />
              <hr />
            </div>
          </div>
          <div className="col-6">
            <div className="px-4">
              <img
                style={fullWidthStyle}
                src={get(document, "additionalData.certSignatories[2].signature")}
              />
              <hr />
            </div>
          </div>
        </div>  

        <div
          className="row d-flex justify-content-center align-items-top"
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          <div className="col-6">
            <div className="text-center">
              {get(document, "additionalData.certSignatories[1].name")}
            </div>
            <div className="text-center">
              {get(document, "additionalData.certSignatories[1].position")}
            </div>
            <div className="text-center">
              {get(document, "additionalData.certSignatories[1].organisation")}
            </div>
          </div>
          <div className="col-6">
            <div className="text-center">
              {get(document, "additionalData.certSignatories[2].name")}
            </div>
            <div className="text-center">
              {get(document, "additionalData.certSignatories[2].position")}
            </div>
            <div className="text-center">
              {get(document, "additionalData.certSignatories[2].organisation")}
            </div>
          </div>
        </div>
      </div>    
    </div>
  </div>
);

export const renderTwoSignatures = (document: any) => (
  <div
    className="row d-flex justify-content-center align-items-center"
    style={{ marginTop: "8rem", marginBottom: "1rem" }}
  >
    <div className="col-4">
      <img style={fullWidthStyle} src={IMG_CERTIFICATE_SEAL} />
    </div>

    <div className="col-8">
      <div
        className="row d-flex justify-content-center align-items-end"
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        <div className="col-6">
          <div className="px-4">
            <img
              style={fullWidthStyle}
              src={get(document, "additionalData.certSignatories[0].signature")}
            />
            <hr />
          </div>
        </div>
        <div className="col-6">
          <div className="px-4">
            <img
              style={fullWidthStyle}
              src={get(document, "additionalData.certSignatories[1].signature")}
            />
            <hr />
          </div>
        </div>
      </div>  

      <div
        className="row d-flex justify-content-center align-items-top"
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        <div className="col-6">
          <div className="text-center">
            {get(document, "additionalData.certSignatories[0].name")}
          </div>
          <div className="text-center">
            {get(document, "additionalData.certSignatories[0].position")}
          </div>
          <div className="text-center">
            {get(document, "additionalData.certSignatories[0].organisation")}
          </div>
        </div>
        <div className="col-6">
          <div className="text-center">
            {get(document, "additionalData.certSignatories[1].name")}
          </div>
          <div className="text-center">
            {get(document, "additionalData.certSignatories[1].position")}
          </div>
          <div className="text-center">
            {get(document, "additionalData.certSignatories[1].organisation")}
          </div>
        </div>
      </div>
    </div>    
  </div>
);

export const renderAwardText = (document: any) => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "3rem" }}
    >
      <p style={printTextStyle as any}>It is hereby certified that</p>
    </div>
    <div className="row d-flex justify-content-center">
      <p style={nameTextStyle as any}>{document.recipient.name}</p>
    </div>
    <div className="row d-flex justify-content-center">
      <p style={printTextStyle as any}>
        having successfully completed the course of study <br />
        was awarded the
      </p>
    </div>
    <div className="row d-flex justify-content-center">
      <div style={titleTextStyle as any}>
        {formatCertName(
          document.id,
          document.name,
          document.additionalData.merit
        )}
      </div>
    </div>
  </div>
);

export const renderIssuingDate = (document: any) => (
  <div>
    <p>
      {formatDatePrefix(document.issuedOn)}{" "}
      {formatDateFullMonthProper(document.issuedOn)}
    </p>
  </div>
);

export const renderFooter = (document: any) => (
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-6 text-left">
        {get(document, "additionalData.additionalCertId")}
      </div>
      <div className="col-6 text-right">{formatCertID(document.id)}</div>
    </div>
  </div>
);


export const renderFunction = (document: any) => (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6 text-left">
          <h1>Tile rendered from a common function:  {document?.foo?.title}</h1>
        </div>
      </div>
    </div>
  );


export default (param?: TemplateParam) => ({document}:{document: any})=> (
  <div>
    <div
      className="container"
      style={{ border: 5, borderColor: "#AAA", borderStyle: "solid" }}
      id="template"
    >
      {param?.logo ? renderLogoNPPartner(param?.logo, param?.left) : renderLogoNP()}
      {!param?.logo ? renderSingapore() : ""}
      {renderAwardText(document)}
      {document.additionalData.certSignatories &&
      document.additionalData.certSignatories[3]
        ? renderFourSignatures(document) :
    (document.additionalData.certSignatories &&
      document.additionalData.certSignatories[2] ?
      renderThreeSignatures(document)
        : renderTwoSignatures(document)
    )
    }
      {renderIssuingDate(document)}
    </div>
    {renderFooter(document)}
  </div>
);