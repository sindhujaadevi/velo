import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { FormattedMessage } from 'react-intl';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { fetchCustomerData } from '../../ducks/partnerOnBoarding/fetchApplicationData'
import LogoHeader from '../../baseComponents/VLHeader/logoHeader'
import constant from '../../constants/partnerOnBoarding/whyVelo'
import VLButton from '../../baseComponents/VLButton'
import Footer from '../../components/common/footer'
import '../../styles/theme/partnerOnBoarding/whyVelo.css'

var webContent1 = require('../../assets/partnerOnBoarding/whyVelo/webContent1.png')
var webContent2 = require('../../assets/partnerOnBoarding/whyVelo/webContent2.png')
var webContent3 = require('../../assets/partnerOnBoarding/whyVelo/webContent3.png')

const whyVeloList = constant.whyVeloContent || {};

const webContentLabel = {webContent1, webContent2, webContent3};

function WhyVelo(props) {

 const eastWestBankHeader = (id,defaultMessage) => <div className='east-west-bank-header'><FormattedMessage id={id} defaultMessage={defaultMessage} /></div>

 const whyVeloListRender = length => {
    const whyVeloListArray = [];
    for (let i = 1; i <= length; i++) {
      whyVeloListArray.push(
        <div key={i} className='velo-list-render'>
          <span className='icon-padding'>
            <img src={webContentLabel[`webContent${i}`]} alt={`webContent${i}`} />
          </span>
          <span className='content-padding'>
            <div className='content-heading'>
              <FormattedMessage
                id={`whyVeloContent${i}`}
                defaultMessage={whyVeloList[`whyVeloContent${i}`]}
              />
            </div>
            <div className='sub-content'>
              <FormattedMessage
                id={`whyVeloSubContent${i}`}
                defaultMessage={whyVeloList[`whyVeloSubContent${i}`]}
              />
            </div>
          </span>
        </div>
      )
    }

    return whyVeloListArray
  }

 const handleClick = () => props.history.push('/welcome');

 const whyVeloListLength = Object.keys(whyVeloList).length;
    return (
      <div>
        <LogoHeader />

        <div className='why-east-west-bank'>

          {eastWestBankHeader('whyEastWestBank', 'Why East West Bank?')}

          <div>{whyVeloListRender(whyVeloListLength / 2)}</div>

          {eastWestBankHeader('veloCheckingAccount', 'Velo Premier Checking Account')}

          <ul className='ul-style'>
            {Object.entries(constant.veloCheckingAccountContent).map((content, index) => {
              return (
                <li key={index} className='list-style'>
                  <FormattedMessage id={content[0]} defaultMessage={content[1]}/>
                </li>
              )
            })}
          </ul>

          {eastWestBankHeader('whoIsEastWestBank', 'Who is East West Bank?')}

          <div className='who-is-EWB-content'>
            <FormattedMessage
              id='whoVeloContent1'
              defaultMessage='East West Bank(NASDQ: EWBC), is one of the largest independent banks
          headquartered in Southern California, with an exclusive focus on the
          United States and Greater China markets. East West Bank ranks among
          the 25 largest publicly traded banks in the United States by market
          capitalization and, as of December 31, 2018, had assets totaling $41.0
          billion.'
            />
          </div>
          <div className="start-button">
            <VLButton
              title={['start', 'Start >']}
              onClick={handleClick}
              secondary
            />
          </div>
          <div className="who-is-EWB-content">
            <div>
              <FormattedMessage
                id='whoVeloContent2'
                defaultMessage='The above information is for reference only and does not constitute
            a recommendation to apply.'
              />
            </div>
            <div className='padding-top-15'>
              <FormattedMessage
                id='whoVeloContent3'
                defaultMessage='Velo Premier Checking Account applicants must be
            individuals that are 18 years of age or older. Offer is limited to
            one per customer and may be altered or discontinued at any time
            without notice.'
              />
            </div>
            <div className='padding-top-15'>
              <FormattedMessage
                id='whoVeloContent4'
                defaultMessage='1. Variable, tiered interest rates with the following Annual
            Percentage Yields (APY):'
              />
            </div>
            <div className='padding-top-15'>
              <Table size='small' className="table-font">
                <TableHead>
                  <TableRow>
                    <TableCell className='table-cell-border' style={{color:'white'}}>
                      <FormattedMessage
                        id='minimumBalance'
                        defaultMessage='Minimum Balance'
                      />
                    </TableCell>
                    <TableCell className='table-cell-border' style={{color:'white'}}>
                      <FormattedMessage id='APY' defaultMessage='APY' />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(constant.rows).map(row => (
                    <TableRow key={row[0]}>
                      <TableCell className='table-cell-border' style={{color:'white'}}>
                        {row[0]}
                      </TableCell>
                      <TableCell className='table-cell-border' style={{color:'white'}}>
                        {row[1]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className='padding-top-15'>
              <FormattedMessage
                id='whoVeloContent5'
                defaultMessage='Annual Percentage Yields are accurate as of CURRENT DATE.'
              />
            </div>
            <div className='padding-top-15'>
              <FormattedMessage
                id='whoVeloContent6'
                defaultMessage=' 2. A maintenance fee of $10 will be charged per monthly statement
            cycle if you do not maintain a minimum average monthly balance of
            $2,500 in your Velo Premier Checking account during the statement
            cycle. Accounts that are not funded within 90 days, or that at any
            time maintain a $0 balance for 90 days or more, will be
            automatically closed.'
              />
            </div>
            <div className='padding-top-15'>
              <FormattedMessage
                id='whoVeloContent7'
                defaultMessage='Velo by East West Bank™ does not charge a processing fee for ACH
            (Automated Clearing House) transfers initiated to or from your Velo
            Premier Checking account. Other 3rd party fees and charges may
            apply. Additionally, we will not charge a fee for transactions
            conducted at East West Bank owned ATMs, or at ATMs displaying the
            Allpoint® and MoneyPass® logos.'
              />
            </div>
            <div className='padding-top-15'>
              <FormattedMessage
                id='whoVeloContent8'
                defaultMessage='The Federal Deposit Insurance Corporation (FDIC) is an independent
            agency of the United States government that protects you against the
            loss of your deposits if an FDIC-insured bank fails. The FDIC
            insures up to $250,000 per depositor, per insured bank, for each
            account ownership category. East West Bank™ is an FDIC-insured bank,
            and the Velo Premier Checking account is covered by the FDIC.'
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
}

const mapDispatchToProps = dispatch => dispatch(fetchCustomerData());

export default withRouter(connect( null, mapDispatchToProps)(WhyVelo));
