import React from 'react'
import { Field } from 'redux-form'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import MenuItem from '@material-ui/core/MenuItem'
import constants from '../../constants/partnerOnBoarding/tableRenderData'
import SectionHeading from './sectionHeading'
import { FormattedMessage } from "react-intl";

const helpIcon = require('../../assets/partnerOnBoarding/aboutYou/inputInformation/help.png');

const selectFieldRender = options => {
  return Object.entries(options).map((optionData, optIndex) => {
    return (
      <MenuItem key={optIndex} value={optionData[0]}>
        <FormattedMessage id={optionData[0]} defaultMessage={optionData[1]} />
      </MenuItem>
    )
  })
}

const characterCheck = {
  pinyinAddress1: 5,
  pinyinAddress2: 30,
  pinyinAddress3: 40,
  pinyinAddress11: 40,
  pinyinAddress22: 30,
  pinyinAddress33: 40,
}

function tableDataRender(labelData, index, dataKey) {
  let characterLength = characterCheck.hasOwnProperty(labelData[0]) ? characterCheck[labelData[0]] : null;
  return (
    <TableRow key={index}>
      <TableCell style={dataKey === 'identificationData' ? { border: 0 } : null} className='table-cell'>
        <span>
          <Field
            name={labelData[0]}
            component={labelData[1].renderComponent}
            label={<FormattedMessage id={labelData[0]} defaultMessage={labelData[1].label} />}
            inputProps={{ style: { color: "white" }, ...characterLength && { maxLength: characterLength } }}
          >
            {labelData[1].options
              ? selectFieldRender(labelData[1].options)
              : null}
          </Field>
        </span>
        {characterLength != null && <span style={{ float: 'right', color: 'white', fontSize: '12px', lineHeight: '16px' }}>({characterLength} <FormattedMessage id="charMax" defaultMessage="char max" />)</span>}
        {(labelData[0] === 'Position' || labelData[0] === "CompanyName") && <span style={{ float: 'right', width: '18px', height: '18px', objectFit: 'contain' }}><img src={helpIcon} /></span>}
      </TableCell>
    </TableRow>
  )
}

function TableRender(props) {
  let { dataToRender } = { ...props }
  let renderData;

  const handleClick = addressContent => props.handleClick(addressContent);

  return (
    <div>
      {dataToRender.map((dataKey, indexValue) => {
        renderData = constants.tableData[Object.keys(dataKey)[0]]
        return (
          <div key={indexValue}>
            {SectionHeading(dataKey, handleClick)}
            <Table style={{ marginBottom: '30px' }}>
              <TableBody>
                {Object.entries(renderData).map((dataArray, index) => {
                  return tableDataRender(dataArray, index, Object.keys(dataKey)[0])
                })}
              </TableBody>
            </Table>
          </div>
        )
      })}
    </div>
  )
}

export default TableRender
