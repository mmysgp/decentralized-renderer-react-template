import { Selector } from "testcafe";
import { FTMain22TemplateCertificate, ftmain22TemplateCertificate } from "../templates/samples";

const document: FTMain22TemplateCertificate = {
  ...ftmain22TemplateCertificate
};

fixture("FT Main 2022 Certificate Template").page`http://localhost:3000`;

const CustomTemplate = Selector("#template");

test("FT Main 2022 Certificate is rendered correctly", async test => {
  //load the default certificate template
  await test.eval(
    () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore can't find a way to have thos working on test cafe
      window.openAttestation({
        type: "RENDER_DOCUMENT",
        payload: {
          document
        }
      });
    },
    {
      dependencies: {
        document
      }
    }
  );

  // verificate rendered certificate is displayed
  await test.expect(CustomTemplate.visible).ok();
  await test.expect(CustomTemplate.textContent).contains("Biomedical Science");
  
  //load transcript template
  await test.eval(
    () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore can't find a way to have thos working on test cafe
      window.openAttestation({
        type: "SELECT_TEMPLATE",
        payload: "transcript"
      });
    },
    {
      dependencies: {
        document
      }
    }
  );

  // verificate rendered transcript is displayed
  await test.expect(CustomTemplate.textContent).contains("MINDWORKS");
  await test.expect(CustomTemplate.textContent).contains("A+");

});
