import React, { FunctionComponent } from "react";
import { get } from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import { TemplateParam } from "./commontype"
import {
  formatDateFullMonthProperDay,
  splitStringTo2,
  certNameDisplay
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

export const formatCertName = (certId: string, certName: string) => {
  let [certPrefix, certDescr] = ["", ""];
  let delimiter = "leading to the";
  [certPrefix, certDescr] = splitStringTo2(certName, " leading to the ");

  if (!certPrefix) {
    delimiter = "in";
    [certPrefix, certDescr] = splitStringTo2(certName, " in ");
  }

  const renderedCertName = certNameDisplay(certPrefix, certDescr, delimiter);

  return <p>{renderedCertName}</p>;
};

const renderAwardText = (document: any) => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "3rem" }}
    >
      <br />
      <br />
      <p style={printTextStyle as any}>This is to certify that</p>
    </div>
    <div className="row d-flex justify-content-center">
      <p style={nameTextStyle as any}>{get(document, "recipient.name")}</p>
    </div>
    <div className="row d-flex justify-content-center">
      <p style={printTextStyle as any}>
        {get(document, "additionalData.certContent1")}
      </p>
    </div>
    <div className="row d-flex justify-content-center">
      <p style={printTextStyle as any}>
        {get(document, "additionalData.certContent2")}
      </p>
    </div>
    <div className="row d-flex justify-content-center">
      <p style={printTextStyle as any}>was awarded the</p>
    </div>
    <div className="row d-flex justify-content-center">
      <p style={titleTextStyle as any}>
        {formatCertName(document.id, document.name)}
      </p>
      <br />
    </div>
    <div className="row d-flex justify-content-center">
      <p style={printTextStyle as any}>
        {get(document, "additionalData.certContent3")}
      </p>
      <br />
      <br />
      <br />
    </div>
    <div className="row d-flex justify-content-center">
      <p style={printTextStyle as any}>
        {formatDateFullMonthProperDay(document.issuedOn)}
      </p>
    </div>
  </div>
);

export const renderFourSignatures = (document: any) => (
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
      style={{ marginTop: "1rem", marginBottom: "1rem" }}
    >
      <div className="col-1" />
      
      <div className="col-5">
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

      <div className="col-5">
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

      <div className="col-1" />
    </div>

    <div
      className="row d-flex justify-content-center align-items-end"
      style={{ marginTop: "1rem", marginBottom: "1rem" }}
    >
      <div className="col-1" />

      <div className="col-5">
        <div className="px-4">
          <img
            style={fullWidthStyle}
            src={get(document, "additionalData.certSignatories[2].signature")}
          />
          <hr />
        </div>
      </div>
      
      <div className="col-5">
        <div className="px-4">
          <img
            style={fullWidthStyle}
            src={get(document, "additionalData.certSignatories[3].signature")}
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
          {get(document, "additionalData.certSignatories[2].name")}
        </div>
        <div className="text-center">
          {get(document, "additionalData.certSignatories[2].position")}
        </div>
        <div className="text-center">
          {get(document, "additionalData.certSignatories[2].organisation")}
        </div>
      </div>
      
      <div className="col-5">
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
      
      <div className="col-1" />
    </div>
    <br />
  </div>
);

export const renderThreeSignatures = (document: any) => (
  <div>
    <div
      className="row d-flex justify-content-center align-items-end"
      style={{ marginTop: "8rem", marginBottom: "1rem" }}
    >
      <div className="col-4" />
      
      <div className="col-5">
        <div className="px-4">
          <img
            style={fullWidthStyle}
            src={get(document, "additionalData.certSignatories[0].signature")}
          />
          <hr />
        </div>
      </div>

      <div className="col-3" />
    </div>  

    <div
      className="row d-flex justify-content-center align-items-top"
      style={{ marginTop: "1rem", marginBottom: "1rem" }}
    >
      <div className="col-4" />
      
      <div className="col-5">
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

      <div className="col-3" />
    </div>

    <div
      className="row d-flex justify-content-center align-items-end"
      style={{ marginTop: "1rem", marginBottom: "1rem" }}
    >
      <div className="col-1" />

      <div className="col-5">
        <div className="px-4">
          <img
            style={fullWidthStyle}
            src={get(document, "additionalData.certSignatories[1].signature")}
          />
          <hr />
        </div>
      </div>
      
      <div className="col-5">
        <div className="px-4">
          <img
            style={fullWidthStyle}
            src={get(document, "additionalData.certSignatories[2].signature")}
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
          {get(document, "additionalData.certSignatories[1].name")}
        </div>
        <div className="text-center">
          {get(document, "additionalData.certSignatories[1].position")}
        </div>
        <div className="text-center">
          {get(document, "additionalData.certSignatories[1].organisation")}
        </div>
      </div>
      
      <div className="col-5">
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
      
      <div className="col-1" />
    </div>
    <br />
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
          <div className="text-center">
            {get(document, "additionalData.certSignatories[0].organisation")}
          </div>
        </div>
        <div className="col-5">
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
        <div className="col-1" />
      </div>
    <br />
  </div>
);

const renderSignatures = (document: any) => (
  <div
    className="row d-flex justify-content-center align-items-end"
    style={{ marginTop: "8rem", marginBottom: "2rem" }}
  >
    <div className="col-4" />
    <div className="col-4">
      <div className="px-4">
        <img
          style={fullWidthStyle}
          src={get(document, "additionalData.certSignatories[0].signature")}
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
    <div className="col-4" />
    <br />
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
      document.additionalData.certSignatories[3]
        ? renderFourSignatures(document) :
		(document.additionalData.certSignatories &&
      document.additionalData.certSignatories[2] ?
	  	renderThreeSignatures(document) :
        (document.additionalData.certSignatories &&
          document.additionalData.certSignatories[1] ?
    	  	renderTwoSignatures(document) :
          renderSignatures(document)
        )
	  )
	}
    </div>
    {renderFooter(document)}
  </div>
);
