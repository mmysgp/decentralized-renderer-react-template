import React from "react";
import { tz } from "moment-timezone";

export const TIMEZONE = "Asia/Singapore";

export const formatDate = (dateString: string) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return tz(date, TIMEZONE)
    .format("MMM YYYY")
    .toUpperCase();
};

export const formatDateFullMonth = (dateString: string) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return tz(date, TIMEZONE)
    .format("MMMM YYYY")
    .toUpperCase();
};

export const formatDateFullMonthProper = (dateString: string) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return tz(date, TIMEZONE).format("MMMM YYYY");
};

export const formatDateFullMonthProperDay = (dateString: string) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return tz(date, TIMEZONE).format("DD MMMM YYYY");
};

export const formatNRIC = (nricFin: string) => {
  if (!nricFin) return null;
  const arrayNric = nricFin.split(":");
  return arrayNric.length === 3 ? arrayNric[2] : null;
};

export const formatDatePrefix = (dateString: string) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  const day = Number(tz(date, TIMEZONE).format("DD"));
  let daySup = "th";
  if (day < 10 || day > 20) {
    switch (day % 10) {
      case 1:
        daySup = "st";
        break;
      case 2:
        daySup = "nd";
        break;
      case 3:
        daySup = "rd";
        break;
    }
  }

  return (
    <span>
      Dated this {day}
      <sup>{daySup}</sup> day of
    </span>
  );
};

export const getCertType = (certId: string) => {
  let certType = "";

  const arrayCertId = certId.split(":");
  if (arrayCertId.length > 1) certType = arrayCertId[1];

  return certType;
};

export const splitStringTo2 = (string: string, delimiter: string) => {
  const parts = string.split(delimiter);
  if (parts.length > 1)
    return [parts[0], parts.splice(1, parts.length).join(delimiter)];
  return ["", parts[0]];
};

export const certNameDisplay = (certPrefix: string, certDescr: string, delimiter: string) => {
  if (certPrefix) {
    return (
      <p>
        {certPrefix}
        <br />
        {certPrefix ? delimiter : ""}
        <br />
        {// split cert description with "(" and keep the separator.
        certDescr.length > 30
          ? certDescr.split(/(?=\()/g).map(i => <p key={i}> {i} </p>)
          : certDescr}
      </p>
    );
  }

  return (
    <p>
      {// split cert description with "(" and keep the separator.
      certDescr.length > 30
        ? certDescr.split(/(?=\()/g).map(i => <p key={i}> {i} </p>)
        : certDescr}
    </p>
  );
};

export const formatCertName = (certId: string, certName: string, meritFlag: string) => {
  let [certPrefix, certDescr] = ["", ""];

  const certType = getCertType(certId);

  switch (certType) {
    case "FT":
      if (certName.startsWith("Diploma")) {
        [certPrefix, certDescr] = splitStringTo2(certName, " in ");
      } else {
        [certPrefix, certDescr] = ["Diploma", certName];
      }
      break;
    case "PTD":
    case "PDP":
      [certPrefix, certDescr] = splitStringTo2(certName, " in ");
      break;
    default:
  }

  if (certType === "FT" || certType === "PTD") {
    certPrefix = meritFlag === "Y" ? `${certPrefix} with Merit` : certPrefix;
  }

  const renderedCertName = certNameDisplay(certPrefix, certDescr, "in");

  return <p>{renderedCertName}</p>;
};

export const formatCertID = (certId: string) => {
  if (!certId) return null;
  const arrayCertId = certId.split(":");
  return arrayCertId.length > 0 ? arrayCertId[0] : null;
};

export const isCETDiploma = (certId: string) => {
  if (!certId) return false;

  let isCertDipFlag = false;
  const certType = getCertType(certId);
  if (certType === "PTD" || certType === "PDP") isCertDipFlag = true;

  return isCertDipFlag;
};
