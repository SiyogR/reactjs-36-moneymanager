// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensiveAmount} = props

  return (
    <div className="money-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
          className="detail-img"
        />
        <div>
          <p className="paragraph"> Your Balance</p>
          <p className="paragraph2" data-testid="balanceAmount">
            {' '}
            RS {balanceAmount}
          </p>
        </div>
      </div>

      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="detail-img"
        />
        <div>
          <p className="paragraph"> Your Income</p>
          <p className="paragraph2" data-testid="incomeAmount">
            {' '}
            RS {incomeAmount}
          </p>
        </div>
      </div>

      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="balance"
          className="detail-img"
        />
        <div>
          <p className="paragraph"> Your expenses</p>
          <p className="paragraph2" data-testid="expensiveAmount">
            {' '}
            RS {expensiveAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
