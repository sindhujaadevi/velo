import React from "react";
import { FormattedMessage } from "react-intl";

const addressContent = {
  title: "Sample Address Format",
  titleId: 'sampleaddressFormat',
  messageId: "sampleAddressAlert",
  message: `<p>Chinese address:</p><p>"北京市朝阳区望京西路50号通地苑3号楼6单元201室，邮编100026"</p>
    <p>Pinyin format：</p><p>ChaoYangQu WangJingXiLu 50Hao TongDiYuan 3HaoLou 6DanYuan 201 Shi,BeiJing 100026</p>`,
  buttonLabelId: 'gotIt',
  buttonLabel: 'Got It'
};

export default function SectionHeading(dataKey, handleClick) {
  return (
    <div style={{ borderBottom: "1px solid white", marginTop: "45px" }}>
      {Object.keys(dataKey)[0] === "personalInfoData" && (
        <div className="import-header">
          <FormattedMessage
            id="import-header"
            defaultMessage="Please take a moment to confirm your information is accurate. We’ll use this information to establish your U.S. bank account."
          />
        </div>
      )}
      <div className="heading">
        <FormattedMessage
          id={Object.keys(dataKey)[0]}
          defaultMessage={Object.values(dataKey)[0]}
        />
        {Object.keys(dataKey)[0] === "currentAddress" && (
          <div
            onClick={() => handleClick(addressContent)}
            style={{
              color: "#00ddf4",
              textTransform: "initial",
              letterSpacing: "normal",
              marginBottom: "-10px"
            }}
          >
            <FormattedMessage
              id="seeAddressExamples"
              defaultMessage="See address examples >"
            />
          </div>
        )}
      </div>
    </div>
  );
}
